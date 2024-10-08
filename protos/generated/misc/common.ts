// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: misc/common.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "misc";

export interface HttpHeader {
  name?: string | undefined;
  value?: string | undefined;
}

export interface FormatId {
  itag?: number | undefined;
  lastModified?: number | undefined;
  xtags?: string | undefined;
}

export interface InitRange {
  start?: number | undefined;
  end?: number | undefined;
}

export interface IndexRange {
  start?: number | undefined;
  end?: number | undefined;
}

export interface KeyValuePair {
  key?: string | undefined;
  value?: string | undefined;
}

function createBaseHttpHeader(): HttpHeader {
  return { name: undefined, value: undefined };
}

export const HttpHeader: MessageFns<HttpHeader> = {
  encode(message: HttpHeader, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HttpHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HttpHeader {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      value: isSet(object.value) ? globalThis.String(object.value) : undefined,
    };
  },

  toJSON(message: HttpHeader): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HttpHeader>, I>>(base?: I): HttpHeader {
    return HttpHeader.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HttpHeader>, I>>(object: I): HttpHeader {
    const message = createBaseHttpHeader();
    message.name = object.name ?? undefined;
    message.value = object.value ?? undefined;
    return message;
  },
};

function createBaseFormatId(): FormatId {
  return { itag: undefined, lastModified: undefined, xtags: undefined };
}

export const FormatId: MessageFns<FormatId> = {
  encode(message: FormatId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.itag !== undefined) {
      writer.uint32(8).int32(message.itag);
    }
    if (message.lastModified !== undefined) {
      writer.uint32(16).uint64(message.lastModified);
    }
    if (message.xtags !== undefined) {
      writer.uint32(26).string(message.xtags);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FormatId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFormatId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.itag = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lastModified = longToNumber(reader.uint64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.xtags = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FormatId {
    return {
      itag: isSet(object.itag) ? globalThis.Number(object.itag) : undefined,
      lastModified: isSet(object.lastModified) ? globalThis.Number(object.lastModified) : undefined,
      xtags: isSet(object.xtags) ? globalThis.String(object.xtags) : undefined,
    };
  },

  toJSON(message: FormatId): unknown {
    const obj: any = {};
    if (message.itag !== undefined) {
      obj.itag = Math.round(message.itag);
    }
    if (message.lastModified !== undefined) {
      obj.lastModified = Math.round(message.lastModified);
    }
    if (message.xtags !== undefined) {
      obj.xtags = message.xtags;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FormatId>, I>>(base?: I): FormatId {
    return FormatId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FormatId>, I>>(object: I): FormatId {
    const message = createBaseFormatId();
    message.itag = object.itag ?? undefined;
    message.lastModified = object.lastModified ?? undefined;
    message.xtags = object.xtags ?? undefined;
    return message;
  },
};

function createBaseInitRange(): InitRange {
  return { start: undefined, end: undefined };
}

export const InitRange: MessageFns<InitRange> = {
  encode(message: InitRange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.start !== undefined) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InitRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InitRange {
    return {
      start: isSet(object.start) ? globalThis.Number(object.start) : undefined,
      end: isSet(object.end) ? globalThis.Number(object.end) : undefined,
    };
  },

  toJSON(message: InitRange): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined) {
      obj.end = Math.round(message.end);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InitRange>, I>>(base?: I): InitRange {
    return InitRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InitRange>, I>>(object: I): InitRange {
    const message = createBaseInitRange();
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    return message;
  },
};

function createBaseIndexRange(): IndexRange {
  return { start: undefined, end: undefined };
}

export const IndexRange: MessageFns<IndexRange> = {
  encode(message: IndexRange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.start !== undefined) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IndexRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexRange {
    return {
      start: isSet(object.start) ? globalThis.Number(object.start) : undefined,
      end: isSet(object.end) ? globalThis.Number(object.end) : undefined,
    };
  },

  toJSON(message: IndexRange): unknown {
    const obj: any = {};
    if (message.start !== undefined) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined) {
      obj.end = Math.round(message.end);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexRange>, I>>(base?: I): IndexRange {
    return IndexRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexRange>, I>>(object: I): IndexRange {
    const message = createBaseIndexRange();
    message.start = object.start ?? undefined;
    message.end = object.end ?? undefined;
    return message;
  },
};

function createBaseKeyValuePair(): KeyValuePair {
  return { key: undefined, value: undefined };
}

export const KeyValuePair: MessageFns<KeyValuePair> = {
  encode(message: KeyValuePair, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): KeyValuePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValuePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyValuePair {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : undefined,
      value: isSet(object.value) ? globalThis.String(object.value) : undefined,
    };
  },

  toJSON(message: KeyValuePair): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValuePair>, I>>(base?: I): KeyValuePair {
    return KeyValuePair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyValuePair>, I>>(object: I): KeyValuePair {
    const message = createBaseKeyValuePair();
    message.key = object.key ?? undefined;
    message.value = object.value ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
