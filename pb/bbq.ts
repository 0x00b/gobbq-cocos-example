/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "bbq";

export enum ContentType {
  Proto = 0,
  UNRECOGNIZED = -1,
}

export function contentTypeFromJSON(object: any): ContentType {
  switch (object) {
    case 0:
    case "Proto":
      return ContentType.Proto;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContentType.UNRECOGNIZED;
  }
}

export function contentTypeToJSON(object: ContentType): string {
  switch (object) {
    case ContentType.Proto:
      return "Proto";
    case ContentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CompressType {
  None = 0,
  Gzip = 1,
  UNRECOGNIZED = -1,
}

export function compressTypeFromJSON(object: any): CompressType {
  switch (object) {
    case 0:
    case "None":
      return CompressType.None;
    case 1:
    case "Gzip":
      return CompressType.Gzip;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CompressType.UNRECOGNIZED;
  }
}

export function compressTypeToJSON(object: CompressType): string {
  switch (object) {
    case CompressType.None:
      return "None";
    case CompressType.Gzip:
      return "Gzip";
    case CompressType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RequestType {
  RequestRequest = 0,
  RequestRespone = 1,
  UNRECOGNIZED = -1,
}

export function requestTypeFromJSON(object: any): RequestType {
  switch (object) {
    case 0:
    case "RequestRequest":
      return RequestType.RequestRequest;
    case 1:
    case "RequestRespone":
      return RequestType.RequestRespone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestType.UNRECOGNIZED;
  }
}

export function requestTypeToJSON(object: RequestType): string {
  switch (object) {
    case RequestType.RequestRequest:
      return "RequestRequest";
    case RequestType.RequestRespone:
      return "RequestRespone";
    case RequestType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CallType {
  Unary = 0,
  OneWay = 1,
  UNRECOGNIZED = -1,
}

export function callTypeFromJSON(object: any): CallType {
  switch (object) {
    case 0:
    case "Unary":
      return CallType.Unary;
    case 1:
    case "OneWay":
      return CallType.OneWay;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CallType.UNRECOGNIZED;
  }
}

export function callTypeToJSON(object: CallType): string {
  switch (object) {
    case CallType.Unary:
      return "Unary";
    case CallType.OneWay:
      return "OneWay";
    case CallType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ServiceType {
  /** Entity - 请求entity，需要提供entity id， entity是有ID的service, entity可以创建很多 */
  Entity = 0,
  /** Service - 请求service，只需要提供完整接口名，service是单例entity，只能有一个 */
  Service = 1,
  UNRECOGNIZED = -1,
}

export function serviceTypeFromJSON(object: any): ServiceType {
  switch (object) {
    case 0:
    case "Entity":
      return ServiceType.Entity;
    case 1:
    case "Service":
      return ServiceType.Service;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceType.UNRECOGNIZED;
  }
}

export function serviceTypeToJSON(object: ServiceType): string {
  switch (object) {
    case ServiceType.Entity:
      return "Entity";
    case ServiceType.Service:
      return "Service";
    case ServiceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum MySQL {
  /** MYSQL_FIELD - 普通db字段 */
  MYSQL_FIELD = 0,
  /** MYSQL_NONE - 非db字段，不持久化，其他类型都是db字段，持久化存储 */
  MYSQL_NONE = 1,
  /** MYSQL_PRIMARY_KEY - 主键 */
  MYSQL_PRIMARY_KEY = 2,
  /** MYSQL_UNIQUE - 唯一索引 */
  MYSQL_UNIQUE = 3,
  /** MYSQL_INDEX - 普通索引 */
  MYSQL_INDEX = 4,
  UNRECOGNIZED = -1,
}

export function mySQLFromJSON(object: any): MySQL {
  switch (object) {
    case 0:
    case "MYSQL_FIELD":
      return MySQL.MYSQL_FIELD;
    case 1:
    case "MYSQL_NONE":
      return MySQL.MYSQL_NONE;
    case 2:
    case "MYSQL_PRIMARY_KEY":
      return MySQL.MYSQL_PRIMARY_KEY;
    case 3:
    case "MYSQL_UNIQUE":
      return MySQL.MYSQL_UNIQUE;
    case 4:
    case "MYSQL_INDEX":
      return MySQL.MYSQL_INDEX;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MySQL.UNRECOGNIZED;
  }
}

export function mySQLToJSON(object: MySQL): string {
  switch (object) {
    case MySQL.MYSQL_FIELD:
      return "MYSQL_FIELD";
    case MySQL.MYSQL_NONE:
      return "MYSQL_NONE";
    case MySQL.MYSQL_PRIMARY_KEY:
      return "MYSQL_PRIMARY_KEY";
    case MySQL.MYSQL_UNIQUE:
      return "MYSQL_UNIQUE";
    case MySQL.MYSQL_INDEX:
      return "MYSQL_INDEX";
    case MySQL.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** mongodb */
export enum MONGO {
  /** MGO_FIELD - 普通db字段 */
  MGO_FIELD = 0,
  /** MGO_NONE - 非db字段，不持久化，其他类型都是db字段，持久化存储 */
  MGO_NONE = 1,
  /** MGO_ID - 主键 */
  MGO_ID = 2,
  UNRECOGNIZED = -1,
}

export function mONGOFromJSON(object: any): MONGO {
  switch (object) {
    case 0:
    case "MGO_FIELD":
      return MONGO.MGO_FIELD;
    case 1:
    case "MGO_NONE":
      return MONGO.MGO_NONE;
    case 2:
    case "MGO_ID":
      return MONGO.MGO_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MONGO.UNRECOGNIZED;
  }
}

export function mONGOToJSON(object: MONGO): string {
  switch (object) {
    case MONGO.MGO_FIELD:
      return "MGO_FIELD";
    case MONGO.MGO_NONE:
      return "MGO_NONE";
    case MONGO.MGO_ID:
      return "MGO_ID";
    case MONGO.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** 请求协议头 */
export interface Header {
  /** 协议版本 */
  Version: number;
  /** 请求唯一id */
  RequestId: string;
  /** 请求的超时时间，单位ms */
  Timeout: number;
  /** 是请求包，还是返回包 */
  RequestType: RequestType;
  /** sverice or entity */
  ServiceType: ServiceType;
  /** Unary or OneWay, OneWay no response, just notify */
  CallType: CallType;
  /** 调用的原EntityID */
  SrcEntity: Long;
  /** 调用的目的EntityID */
  DstEntity: Long;
  /** 规范格式: 类名，服务名 */
  Type: string;
  /** 规范格式: 接口名 */
  Method: string;
  /**
   * 请求数据的序列化类型
   * 比如: proto/jce/json, 默认proto
   * 具体值与ContentEncodeType对应
   */
  ContentType: ContentType;
  /**
   * 请求数据使用的压缩方式
   * 比如: gzip/snappy/..., 默认不使用
   * 具体值与CompressType对应
   */
  CompressType: CompressType;
  /** 是否检查包是否正确 */
  Flags: number;
  /** 附加信息 */
  TransInfo: { [key: string]: Uint8Array };
  /** 返回值 */
  ErrCode: number;
  ErrMsg: string;
}

export interface Header_TransInfoEntry {
  key: string;
  value: Uint8Array;
}

export interface Field {
  /** 自定义tag，可以自己针对不同的tag实现不同的逻辑 */
  tag: string;
  /** mysql */
  mysql: MySQL;
  /** mongo */
  mgo: MONGO;
}

function createBaseHeader(): Header {
  return {
    Version: 0,
    RequestId: "",
    Timeout: 0,
    RequestType: 0,
    ServiceType: 0,
    CallType: 0,
    SrcEntity: Long.UZERO,
    DstEntity: Long.UZERO,
    Type: "",
    Method: "",
    ContentType: 0,
    CompressType: 0,
    Flags: 0,
    TransInfo: {},
    ErrCode: 0,
    ErrMsg: "",
  };
}

export const Header = {
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Version !== 0) {
      writer.uint32(8).uint32(message.Version);
    }
    if (message.RequestId !== "") {
      writer.uint32(18).string(message.RequestId);
    }
    if (message.Timeout !== 0) {
      writer.uint32(24).uint32(message.Timeout);
    }
    if (message.RequestType !== 0) {
      writer.uint32(32).int32(message.RequestType);
    }
    if (message.ServiceType !== 0) {
      writer.uint32(40).int32(message.ServiceType);
    }
    if (message.CallType !== 0) {
      writer.uint32(48).int32(message.CallType);
    }
    if (!message.SrcEntity.isZero()) {
      writer.uint32(56).uint64(message.SrcEntity);
    }
    if (!message.DstEntity.isZero()) {
      writer.uint32(64).uint64(message.DstEntity);
    }
    if (message.Type !== "") {
      writer.uint32(74).string(message.Type);
    }
    if (message.Method !== "") {
      writer.uint32(82).string(message.Method);
    }
    if (message.ContentType !== 0) {
      writer.uint32(88).int32(message.ContentType);
    }
    if (message.CompressType !== 0) {
      writer.uint32(96).int32(message.CompressType);
    }
    if (message.Flags !== 0) {
      writer.uint32(104).uint32(message.Flags);
    }
    Object.entries(message.TransInfo).forEach(([key, value]) => {
      Header_TransInfoEntry.encode({ key: key as any, value }, writer.uint32(114).fork()).ldelim();
    });
    if (message.ErrCode !== 0) {
      writer.uint32(120).int32(message.ErrCode);
    }
    if (message.ErrMsg !== "") {
      writer.uint32(130).string(message.ErrMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Version = reader.uint32();
          break;
        case 2:
          message.RequestId = reader.string();
          break;
        case 3:
          message.Timeout = reader.uint32();
          break;
        case 4:
          message.RequestType = reader.int32() as any;
          break;
        case 5:
          message.ServiceType = reader.int32() as any;
          break;
        case 6:
          message.CallType = reader.int32() as any;
          break;
        case 7:
          message.SrcEntity = reader.uint64() as Long;
          break;
        case 8:
          message.DstEntity = reader.uint64() as Long;
          break;
        case 9:
          message.Type = reader.string();
          break;
        case 10:
          message.Method = reader.string();
          break;
        case 11:
          message.ContentType = reader.int32() as any;
          break;
        case 12:
          message.CompressType = reader.int32() as any;
          break;
        case 13:
          message.Flags = reader.uint32();
          break;
        case 14:
          const entry14 = Header_TransInfoEntry.decode(reader, reader.uint32());
          if (entry14.value !== undefined) {
            message.TransInfo[entry14.key] = entry14.value;
          }
          break;
        case 15:
          message.ErrCode = reader.int32();
          break;
        case 16:
          message.ErrMsg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Header {
    return {
      Version: isSet(object.Version) ? Number(object.Version) : 0,
      RequestId: isSet(object.RequestId) ? String(object.RequestId) : "",
      Timeout: isSet(object.Timeout) ? Number(object.Timeout) : 0,
      RequestType: isSet(object.RequestType) ? requestTypeFromJSON(object.RequestType) : 0,
      ServiceType: isSet(object.ServiceType) ? serviceTypeFromJSON(object.ServiceType) : 0,
      CallType: isSet(object.CallType) ? callTypeFromJSON(object.CallType) : 0,
      SrcEntity: isSet(object.SrcEntity) ? Long.fromValue(object.SrcEntity) : Long.UZERO,
      DstEntity: isSet(object.DstEntity) ? Long.fromValue(object.DstEntity) : Long.UZERO,
      Type: isSet(object.Type) ? String(object.Type) : "",
      Method: isSet(object.Method) ? String(object.Method) : "",
      ContentType: isSet(object.ContentType) ? contentTypeFromJSON(object.ContentType) : 0,
      CompressType: isSet(object.CompressType) ? compressTypeFromJSON(object.CompressType) : 0,
      Flags: isSet(object.Flags) ? Number(object.Flags) : 0,
      TransInfo: isObject(object.TransInfo)
        ? Object.entries(object.TransInfo).reduce<{ [key: string]: Uint8Array }>((acc, [key, value]) => {
          acc[key] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      ErrCode: isSet(object.ErrCode) ? Number(object.ErrCode) : 0,
      ErrMsg: isSet(object.ErrMsg) ? String(object.ErrMsg) : "",
    };
  },

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.Version !== undefined && (obj.Version = Math.round(message.Version));
    message.RequestId !== undefined && (obj.RequestId = message.RequestId);
    message.Timeout !== undefined && (obj.Timeout = Math.round(message.Timeout));
    message.RequestType !== undefined && (obj.RequestType = requestTypeToJSON(message.RequestType));
    message.ServiceType !== undefined && (obj.ServiceType = serviceTypeToJSON(message.ServiceType));
    message.CallType !== undefined && (obj.CallType = callTypeToJSON(message.CallType));
    message.SrcEntity !== undefined && (obj.SrcEntity = (message.SrcEntity || Long.UZERO).toString());
    message.DstEntity !== undefined && (obj.DstEntity = (message.DstEntity || Long.UZERO).toString());
    message.Type !== undefined && (obj.Type = message.Type);
    message.Method !== undefined && (obj.Method = message.Method);
    message.ContentType !== undefined && (obj.ContentType = contentTypeToJSON(message.ContentType));
    message.CompressType !== undefined && (obj.CompressType = compressTypeToJSON(message.CompressType));
    message.Flags !== undefined && (obj.Flags = Math.round(message.Flags));
    obj.TransInfo = {};
    if (message.TransInfo) {
      Object.entries(message.TransInfo).forEach(([k, v]) => {
        obj.TransInfo[k] = base64FromBytes(v);
      });
    }
    message.ErrCode !== undefined && (obj.ErrCode = Math.round(message.ErrCode));
    message.ErrMsg !== undefined && (obj.ErrMsg = message.ErrMsg);
    return obj;
  },

  create(base?: DeepPartial<Header>): Header {
    return Header.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.Version = object.Version ?? 0;
    message.RequestId = object.RequestId ?? "";
    message.Timeout = object.Timeout ?? 0;
    message.RequestType = object.RequestType ?? 0;
    message.ServiceType = object.ServiceType ?? 0;
    message.CallType = object.CallType ?? 0;
    message.SrcEntity = (object.SrcEntity !== undefined && object.SrcEntity !== null)
      ? Long.fromValue(object.SrcEntity)
      : Long.UZERO;
    message.DstEntity = (object.DstEntity !== undefined && object.DstEntity !== null)
      ? Long.fromValue(object.DstEntity)
      : Long.UZERO;
    message.Type = object.Type ?? "";
    message.Method = object.Method ?? "";
    message.ContentType = object.ContentType ?? 0;
    message.CompressType = object.CompressType ?? 0;
    message.Flags = object.Flags ?? 0;
    message.TransInfo = Object.entries(object.TransInfo ?? {}).reduce<{ [key: string]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );
    message.ErrCode = object.ErrCode ?? 0;
    message.ErrMsg = object.ErrMsg ?? "";
    return message;
  },
};

function createBaseHeader_TransInfoEntry(): Header_TransInfoEntry {
  return { key: "", value: new Uint8Array() };
}

export const Header_TransInfoEntry = {
  encode(message: Header_TransInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Header_TransInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader_TransInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Header_TransInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: Header_TransInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<Header_TransInfoEntry>): Header_TransInfoEntry {
    return Header_TransInfoEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Header_TransInfoEntry>): Header_TransInfoEntry {
    const message = createBaseHeader_TransInfoEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseField(): Field {
  return { tag: "", mysql: 0, mgo: 0 };
}

export const Field = {
  encode(message: Field, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tag !== "") {
      writer.uint32(10).string(message.tag);
    }
    if (message.mysql !== 0) {
      writer.uint32(16).int32(message.mysql);
    }
    if (message.mgo !== 0) {
      writer.uint32(24).int32(message.mgo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Field {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = reader.string();
          break;
        case 2:
          message.mysql = reader.int32() as any;
          break;
        case 3:
          message.mgo = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Field {
    return {
      tag: isSet(object.tag) ? String(object.tag) : "",
      mysql: isSet(object.mysql) ? mySQLFromJSON(object.mysql) : 0,
      mgo: isSet(object.mgo) ? mONGOFromJSON(object.mgo) : 0,
    };
  },

  toJSON(message: Field): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = message.tag);
    message.mysql !== undefined && (obj.mysql = mySQLToJSON(message.mysql));
    message.mgo !== undefined && (obj.mgo = mONGOToJSON(message.mgo));
    return obj;
  },

  create(base?: DeepPartial<Field>): Field {
    return Field.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Field>): Field {
    const message = createBaseField();
    message.tag = object.tag ?? "";
    message.mysql = object.mysql ?? 0;
    message.mgo = object.mgo ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
