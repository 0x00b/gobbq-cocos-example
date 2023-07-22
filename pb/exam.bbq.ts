// NOTE:!!
// DON'T EDIT IT!!
//  请勿添加其他内容，包括函数，结构体，变量等等，否则重新生成时会丢失。

import { UnaryResponse } from "gobbq-ts/dist/src/context/unary";
import { Client, Context } from "gobbq-ts/dist/src";
import { makeClientConstructor } from "gobbq-ts/dist/src/bbq/bbq";
import { ServiceType } from "gobbq-ts/dist/proto/bbq";
import Long from "long";
import { LoginRequest } from "./exam"
import { LoginResponse } from "./exam"
	
// ExamService
export type ExamServiceDefinition = typeof ExamServiceDefinition;
export const ExamServiceDefinition = {
  typeName: "pb.ExamService",
  serviceType: ServiceType.Service, 
  methods: {
    Login: {
      methodName: "Login",
      requestType: LoginRequest,
      responseType: LoginRequest,
      requestSerialize: (req: LoginRequest): Buffer => {
        return Buffer.from(LoginRequest.encode(req).finish())
      },
      requestDeserialize: (input: Uint8Array): LoginRequest => {
        return LoginRequest.decode(input)
      },
      responseSerialize: (req: LoginRequest): Buffer => {
        return Buffer.from(LoginRequest.encode(req).finish())
      },
      responseDeserialize: (input: Uint8Array): LoginRequest => {
        return LoginRequest.decode(input)
      },
    },
	},
} as const;

export interface ExamService {

	// Login
	Login(request: LoginRequest):UnaryResponse<LoginRequest>
}

export interface ExamServiceService {

	// Login
	Login(c: Context, request: LoginRequest):UnaryResponse<LoginRequest>
}

export function RegisterExamServiceService(client: Client<any>, svc: ExamServiceService){
  client.register(ExamServiceDefinition, svc)
}

export function NewExamService(client: Client<any>): ExamService {
  return makeClientConstructor(client, ExamServiceDefinition) as unknown as ExamService
}

