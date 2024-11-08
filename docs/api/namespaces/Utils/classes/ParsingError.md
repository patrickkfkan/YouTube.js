[youtubei.js](../../../README.md) / [Utils](../README.md) / ParsingError

# Class: ParsingError

## Extends

- [`InnertubeError`](InnertubeError.md)

## Constructors

### new ParsingError()

> **new ParsingError**(`message`, `info`?): [`ParsingError`](ParsingError.md)

#### Parameters

• **message**: `string`

• **info?**: `any`

#### Returns

[`ParsingError`](ParsingError.md)

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`constructor`](InnertubeError.md#constructors)

#### Defined in

[src/utils/Utils.ts:31](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/utils/Utils.ts#L31)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`cause`](InnertubeError.md#cause)

#### Defined in

node\_modules/.deno/typescript@5.6.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### date

> **date**: `Date`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`date`](InnertubeError.md#date)

#### Defined in

[src/utils/Utils.ts:27](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/utils/Utils.ts#L27)

***

### info?

> `optional` **info**: `any`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`info`](InnertubeError.md#info)

#### Defined in

[src/utils/Utils.ts:29](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/utils/Utils.ts#L29)

***

### message

> **message**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`message`](InnertubeError.md#message)

#### Defined in

node\_modules/.deno/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`name`](InnertubeError.md#name)

#### Defined in

node\_modules/.deno/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`stack`](InnertubeError.md#stack)

#### Defined in

node\_modules/.deno/typescript@5.6.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### version

> **version**: `string`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`version`](InnertubeError.md#version)

#### Defined in

[src/utils/Utils.ts:28](https://github.com/LuanRT/YouTube.js/blob/305a398158a6cac82e6ef288fed4bf1661c89d52/src/utils/Utils.ts#L28)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`prepareStackTrace`](InnertubeError.md#preparestacktrace)

#### Defined in

node\_modules/.deno/@types+node@17.0.45/node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`stackTraceLimit`](InnertubeError.md#stacktracelimit)

#### Defined in

node\_modules/.deno/@types+node@17.0.45/node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`InnertubeError`](InnertubeError.md).[`captureStackTrace`](InnertubeError.md#capturestacktrace)

#### Defined in

node\_modules/.deno/@types+node@17.0.45/node\_modules/@types/node/globals.d.ts:4