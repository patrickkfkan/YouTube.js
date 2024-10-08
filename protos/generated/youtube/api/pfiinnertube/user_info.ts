// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/user_info.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface UserInfo {
  onBehalfOfUser?: string | undefined;
  enableSafetyMode?: boolean | undefined;
  credentialTransferTokens: UserInfo_CredentialTransferToken[];
  delegatePurchases?: UserInfo_DelegatePurchases | undefined;
  kidsParent?: UserInfo_KidsParent | undefined;
  isIncognito?: boolean | undefined;
  lockedSafetyMode?: boolean | undefined;
  delegationContext?: UserInfo_DelegationContext | undefined;
  serializedDelegationContext?: string | undefined;
}

export interface UserInfo_KidsParent {
}

export interface UserInfo_DelegatePurchases {
}

export interface UserInfo_DelegationContext {
}

export interface UserInfo_CredentialTransferToken {
}

function createBaseUserInfo(): UserInfo {
  return {
    onBehalfOfUser: undefined,
    enableSafetyMode: undefined,
    credentialTransferTokens: [],
    delegatePurchases: undefined,
    kidsParent: undefined,
    isIncognito: undefined,
    lockedSafetyMode: undefined,
    delegationContext: undefined,
    serializedDelegationContext: undefined,
  };
}

export const UserInfo: MessageFns<UserInfo> = {
  encode(message: UserInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.onBehalfOfUser !== undefined) {
      writer.uint32(26).string(message.onBehalfOfUser);
    }
    if (message.enableSafetyMode !== undefined) {
      writer.uint32(56).bool(message.enableSafetyMode);
    }
    for (const v of message.credentialTransferTokens) {
      UserInfo_CredentialTransferToken.encode(v!, writer.uint32(98).fork()).join();
    }
    if (message.delegatePurchases !== undefined) {
      UserInfo_DelegatePurchases.encode(message.delegatePurchases, writer.uint32(106).fork()).join();
    }
    if (message.kidsParent !== undefined) {
      UserInfo_KidsParent.encode(message.kidsParent, writer.uint32(114).fork()).join();
    }
    if (message.isIncognito !== undefined) {
      writer.uint32(120).bool(message.isIncognito);
    }
    if (message.lockedSafetyMode !== undefined) {
      writer.uint32(128).bool(message.lockedSafetyMode);
    }
    if (message.delegationContext !== undefined) {
      UserInfo_DelegationContext.encode(message.delegationContext, writer.uint32(138).fork()).join();
    }
    if (message.serializedDelegationContext !== undefined) {
      writer.uint32(146).string(message.serializedDelegationContext);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.onBehalfOfUser = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.enableSafetyMode = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.credentialTransferTokens.push(UserInfo_CredentialTransferToken.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.delegatePurchases = UserInfo_DelegatePurchases.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.kidsParent = UserInfo_KidsParent.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.isIncognito = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.lockedSafetyMode = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.delegationContext = UserInfo_DelegationContext.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.serializedDelegationContext = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserInfo {
    return {
      onBehalfOfUser: isSet(object.onBehalfOfUser) ? globalThis.String(object.onBehalfOfUser) : undefined,
      enableSafetyMode: isSet(object.enableSafetyMode) ? globalThis.Boolean(object.enableSafetyMode) : undefined,
      credentialTransferTokens: globalThis.Array.isArray(object?.credentialTransferTokens)
        ? object.credentialTransferTokens.map((e: any) => UserInfo_CredentialTransferToken.fromJSON(e))
        : [],
      delegatePurchases: isSet(object.delegatePurchases)
        ? UserInfo_DelegatePurchases.fromJSON(object.delegatePurchases)
        : undefined,
      kidsParent: isSet(object.kidsParent) ? UserInfo_KidsParent.fromJSON(object.kidsParent) : undefined,
      isIncognito: isSet(object.isIncognito) ? globalThis.Boolean(object.isIncognito) : undefined,
      lockedSafetyMode: isSet(object.lockedSafetyMode) ? globalThis.Boolean(object.lockedSafetyMode) : undefined,
      delegationContext: isSet(object.delegationContext)
        ? UserInfo_DelegationContext.fromJSON(object.delegationContext)
        : undefined,
      serializedDelegationContext: isSet(object.serializedDelegationContext)
        ? globalThis.String(object.serializedDelegationContext)
        : undefined,
    };
  },

  toJSON(message: UserInfo): unknown {
    const obj: any = {};
    if (message.onBehalfOfUser !== undefined) {
      obj.onBehalfOfUser = message.onBehalfOfUser;
    }
    if (message.enableSafetyMode !== undefined) {
      obj.enableSafetyMode = message.enableSafetyMode;
    }
    if (message.credentialTransferTokens?.length) {
      obj.credentialTransferTokens = message.credentialTransferTokens.map((e) =>
        UserInfo_CredentialTransferToken.toJSON(e)
      );
    }
    if (message.delegatePurchases !== undefined) {
      obj.delegatePurchases = UserInfo_DelegatePurchases.toJSON(message.delegatePurchases);
    }
    if (message.kidsParent !== undefined) {
      obj.kidsParent = UserInfo_KidsParent.toJSON(message.kidsParent);
    }
    if (message.isIncognito !== undefined) {
      obj.isIncognito = message.isIncognito;
    }
    if (message.lockedSafetyMode !== undefined) {
      obj.lockedSafetyMode = message.lockedSafetyMode;
    }
    if (message.delegationContext !== undefined) {
      obj.delegationContext = UserInfo_DelegationContext.toJSON(message.delegationContext);
    }
    if (message.serializedDelegationContext !== undefined) {
      obj.serializedDelegationContext = message.serializedDelegationContext;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo>, I>>(base?: I): UserInfo {
    return UserInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserInfo>, I>>(object: I): UserInfo {
    const message = createBaseUserInfo();
    message.onBehalfOfUser = object.onBehalfOfUser ?? undefined;
    message.enableSafetyMode = object.enableSafetyMode ?? undefined;
    message.credentialTransferTokens =
      object.credentialTransferTokens?.map((e) => UserInfo_CredentialTransferToken.fromPartial(e)) || [];
    message.delegatePurchases = (object.delegatePurchases !== undefined && object.delegatePurchases !== null)
      ? UserInfo_DelegatePurchases.fromPartial(object.delegatePurchases)
      : undefined;
    message.kidsParent = (object.kidsParent !== undefined && object.kidsParent !== null)
      ? UserInfo_KidsParent.fromPartial(object.kidsParent)
      : undefined;
    message.isIncognito = object.isIncognito ?? undefined;
    message.lockedSafetyMode = object.lockedSafetyMode ?? undefined;
    message.delegationContext = (object.delegationContext !== undefined && object.delegationContext !== null)
      ? UserInfo_DelegationContext.fromPartial(object.delegationContext)
      : undefined;
    message.serializedDelegationContext = object.serializedDelegationContext ?? undefined;
    return message;
  },
};

function createBaseUserInfo_KidsParent(): UserInfo_KidsParent {
  return {};
}

export const UserInfo_KidsParent: MessageFns<UserInfo_KidsParent> = {
  encode(_: UserInfo_KidsParent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_KidsParent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_KidsParent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UserInfo_KidsParent {
    return {};
  },

  toJSON(_: UserInfo_KidsParent): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo_KidsParent>, I>>(base?: I): UserInfo_KidsParent {
    return UserInfo_KidsParent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserInfo_KidsParent>, I>>(_: I): UserInfo_KidsParent {
    const message = createBaseUserInfo_KidsParent();
    return message;
  },
};

function createBaseUserInfo_DelegatePurchases(): UserInfo_DelegatePurchases {
  return {};
}

export const UserInfo_DelegatePurchases: MessageFns<UserInfo_DelegatePurchases> = {
  encode(_: UserInfo_DelegatePurchases, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_DelegatePurchases {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_DelegatePurchases();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UserInfo_DelegatePurchases {
    return {};
  },

  toJSON(_: UserInfo_DelegatePurchases): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo_DelegatePurchases>, I>>(base?: I): UserInfo_DelegatePurchases {
    return UserInfo_DelegatePurchases.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserInfo_DelegatePurchases>, I>>(_: I): UserInfo_DelegatePurchases {
    const message = createBaseUserInfo_DelegatePurchases();
    return message;
  },
};

function createBaseUserInfo_DelegationContext(): UserInfo_DelegationContext {
  return {};
}

export const UserInfo_DelegationContext: MessageFns<UserInfo_DelegationContext> = {
  encode(_: UserInfo_DelegationContext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_DelegationContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_DelegationContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UserInfo_DelegationContext {
    return {};
  },

  toJSON(_: UserInfo_DelegationContext): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo_DelegationContext>, I>>(base?: I): UserInfo_DelegationContext {
    return UserInfo_DelegationContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserInfo_DelegationContext>, I>>(_: I): UserInfo_DelegationContext {
    const message = createBaseUserInfo_DelegationContext();
    return message;
  },
};

function createBaseUserInfo_CredentialTransferToken(): UserInfo_CredentialTransferToken {
  return {};
}

export const UserInfo_CredentialTransferToken: MessageFns<UserInfo_CredentialTransferToken> = {
  encode(_: UserInfo_CredentialTransferToken, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserInfo_CredentialTransferToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserInfo_CredentialTransferToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UserInfo_CredentialTransferToken {
    return {};
  },

  toJSON(_: UserInfo_CredentialTransferToken): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserInfo_CredentialTransferToken>, I>>(
    base?: I,
  ): UserInfo_CredentialTransferToken {
    return UserInfo_CredentialTransferToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserInfo_CredentialTransferToken>, I>>(
    _: I,
  ): UserInfo_CredentialTransferToken {
    const message = createBaseUserInfo_CredentialTransferToken();
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
