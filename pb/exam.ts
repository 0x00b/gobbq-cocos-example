/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "exampb";

export interface LoginRequest {
  Name: string;
}

export interface LoginResponse {
}

function createBaseLoginRequest(): LoginRequest {
  return { Name: "" };
}

export const LoginRequest = {
  encode(message: LoginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return { Name: isSet(object.Name) ? String(object.Name) : "" };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  create(base?: DeepPartial<LoginRequest>): LoginRequest {
    return LoginRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LoginRequest>): LoginRequest {
    const message = createBaseLoginRequest();
    message.Name = object.Name ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return {};
}

export const LoginResponse = {
  encode(_: LoginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): LoginResponse {
    return {};
  },

  toJSON(_: LoginResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LoginResponse>): LoginResponse {
    return LoginResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<LoginResponse>): LoginResponse {
    const message = createBaseLoginResponse();
    return message;
  },
};

export type examDefinition = typeof examDefinition;
export const examDefinition = {
  name: "exam",
  fullName: "exampb.exam",
  methods: {
    login: {
      name: "Login",
      requestType: LoginRequest,
      requestStream: false,
      responseType: LoginRequest,
      responseStream: false,
      options: {},
    },
  },
} as const;

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
