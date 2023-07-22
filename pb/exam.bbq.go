// NOTE:!!
// DON'T EDIT IT!!
//  请勿添加其他内容，包括函数，结构体，变量等等，否则重新生成时会丢失。

package pb

import (
	"time"

	"github.com/0x00b/gobbq/engine/codec"
	"github.com/0x00b/gobbq/engine/entity"
	"github.com/0x00b/gobbq/engine/nets"
	"github.com/0x00b/gobbq/erro"
	"github.com/0x00b/gobbq/proto/bbq"
	"github.com/0x00b/gobbq/tool/snowflake"
	"github.com/0x00b/gobbq/xlog"

	// pb "github.com/0x00b/gobbq-cocos-example/pb"

)

var _ = snowflake.GenUUID()

func RegisterExamService(etyMgr *entity.EntityManager, impl ExamService) {
	etyMgr.RegisterService(&ExamServiceDesc, impl)
}

func NewExamClient() *Exam {
	t := &Exam{}
	return t
}

type Exam struct {
}

func (t *Exam) Login(c entity.Context, req *LoginRequest) (*LoginRequest, error) {

	pkt := nets.NewPacket()
	defer pkt.Release()

	pkt.Header.Version = 1
	pkt.Header.RequestId = snowflake.GenUUID()
	pkt.Header.Timeout = 10
	pkt.Header.RequestType = bbq.RequestType_RequestRequest
	pkt.Header.CallType = bbq.CallType_Unary
	pkt.Header.ServiceType = bbq.ServiceType_Service
	pkt.Header.SrcEntity = uint64(c.EntityID())
	pkt.Header.DstEntity = 0
	pkt.Header.Type = ExamServiceDesc.TypeName
	pkt.Header.Method = "Login"
	pkt.Header.ContentType = bbq.ContentType_Proto
	pkt.Header.CompressType = bbq.CompressType_None
	pkt.Header.Flags = 0
	pkt.Header.TransInfo = map[string][]byte{}
	pkt.Header.ErrCode = 0
	pkt.Header.ErrMsg = ""

	var chanRsp chan any = make(chan any)
	defer close(chanRsp)

	etyMgr := entity.GetEntityMgr(c)
	if etyMgr == nil {
		return nil, erro.ErrBadContext
	}
	err := etyMgr.LocalCall(pkt, req, chanRsp)
	if err != nil {
		if !entity.NotMyMethod(err) {
			return nil, err
		}

		hdrBytes, err := codec.GetCodec(bbq.ContentType_Proto).Marshal(req)
		if err != nil {
			xlog.Errorln(err)
			return nil, err
		}

		pkt.WriteBody(hdrBytes)

		// register callback first, than SendPacket
		entity.RegisterCallback(c, pkt.Header.RequestId, func(pkt *nets.Packet) {
			if pkt.Header.ErrCode != 0 {
				chanRsp <- error(erro.NewError(erro.ErrBadCall.ErrCode, pkt.Header.ErrMsg))
				return
			}
			rsp := new(LoginRequest)
			reqbuf := pkt.PacketBody()
			err := codec.GetCodec(pkt.Header.GetContentType()).Unmarshal(reqbuf, rsp)
			if err != nil {
				chanRsp <- err
				return
			}
			chanRsp <- rsp
		})

		err = entity.GetProxy(c).SendPacket(pkt)
		if err != nil {
			return nil, err
		}
	}

	var rsp any
	select {
	case <-c.Done():
		entity.PopCallback(c, pkt.Header.RequestId)
		return nil, erro.ErrContextDone
	case <-time.After(time.Duration(pkt.Header.Timeout) * time.Second):
		entity.PopCallback(c, pkt.Header.RequestId)
		return nil, erro.ErrTimeOut
	case rsp = <-chanRsp:
	}

	if rsp, ok := rsp.(*LoginRequest); ok {
		return rsp, nil
	}
	return nil, rsp.(error)

}

// ExamService
type ExamService interface {
	entity.IService

	// Login
	Login(c entity.Context, req *LoginRequest) (*LoginRequest, error)
}

func _ExamService_Login_Handler(svc any, ctx entity.Context, in *LoginRequest, interceptor entity.ServerInterceptor) (*LoginRequest, error) {
	if interceptor == nil {
		return svc.(ExamService).Login(ctx, in)
	}

	info := &entity.ServerInfo{
		Server:     svc,
		FullMethod: "/pb.ExamService/Login",
	}

	handler := func(ctx entity.Context, rsp any) (any, error) {

		return svc.(ExamService).Login(ctx, in)

	}

	rsp, err := interceptor(ctx, in, info, handler)
	_ = rsp

	return rsp.(*LoginRequest), err

}

func _ExamService_Login_Local_Handler(svc any, ctx entity.Context, in any, interceptor entity.ServerInterceptor) (any, error) {

	return _ExamService_Login_Handler(svc, ctx, in.(*LoginRequest), interceptor)

}

func _ExamService_Login_Remote_Handler(svc any, ctx entity.Context, pkt *nets.Packet, interceptor entity.ServerInterceptor) {

	hdr := pkt.Header

	in := new(LoginRequest)
	reqbuf := pkt.PacketBody()
	err := codec.GetCodec(hdr.GetContentType()).Unmarshal(reqbuf, in)

	npkt := nets.NewPacket()
	defer npkt.Release()

	npkt.Header.Version = hdr.Version
	npkt.Header.RequestId = hdr.RequestId
	npkt.Header.Timeout = hdr.Timeout
	npkt.Header.RequestType = bbq.RequestType_RequestRespone
	npkt.Header.ServiceType = hdr.ServiceType
	npkt.Header.CallType = hdr.CallType
	npkt.Header.SrcEntity = hdr.DstEntity
	npkt.Header.DstEntity = hdr.SrcEntity
	npkt.Header.Type = hdr.Type
	npkt.Header.Method = hdr.Method
	npkt.Header.ContentType = hdr.ContentType
	npkt.Header.CompressType = hdr.CompressType
	npkt.Header.Flags = 0
	npkt.Header.TransInfo = hdr.TransInfo

	var rsp any
	if err == nil {
		rsp, err = _ExamService_Login_Handler(svc, ctx, in, interceptor)
	}
	if err != nil {
		if x, ok := err.(erro.CodeError); ok {
			npkt.Header.ErrCode = x.Code()
			npkt.Header.ErrMsg = x.Message()
		} else {
			npkt.Header.ErrCode = -1
			npkt.Header.ErrMsg = err.Error()
		}
		npkt.WriteBody(nil)
	} else {
		var rb []byte
		rb, err = codec.DefaultCodec.Marshal(rsp)
		if err != nil {
			npkt.Header.ErrCode = -1
			npkt.Header.ErrMsg = err.Error()
		} else {
			npkt.WriteBody(rb)
		}
	}
	err = pkt.Src.SendPacket(npkt)
	if err != nil {
		// report
		_ = err
		return
	}

}

var ExamServiceDesc = entity.EntityDesc{
	TypeName:    "pb.ExamService",
	HandlerType: (*ExamService)(nil),
	Methods: map[string]entity.MethodDesc{

		"Login": {
			MethodName:   "Login",
			Handler:      _ExamService_Login_Remote_Handler,
			LocalHandler: _ExamService_Login_Local_Handler,
		},
	},

	Metadata: "exam.proto",
}
