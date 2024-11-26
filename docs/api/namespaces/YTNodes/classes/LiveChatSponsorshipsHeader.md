[youtubei.js](../../../README.md) / [YTNodes](../README.md) / LiveChatSponsorshipsHeader

# Class: LiveChatSponsorshipsHeader

## Extends

- [`YTNode`](../../Helpers/classes/YTNode.md)

## Constructors

### new LiveChatSponsorshipsHeader()

> **new LiveChatSponsorshipsHeader**(`data`): [`LiveChatSponsorshipsHeader`](LiveChatSponsorshipsHeader.md)

#### Parameters

• **data**: [`RawNode`](../../APIResponseTypes/type-aliases/RawNode.md)

#### Returns

[`LiveChatSponsorshipsHeader`](LiveChatSponsorshipsHeader.md)

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`constructor`](../../Helpers/classes/YTNode.md#constructors)

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:21](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L21)

## Properties

### author\_badges

> **author\_badges**: `null` \| [`ObservedArray`](../../Helpers/type-aliases/ObservedArray.md)\<[`LiveChatAuthorBadge`](LiveChatAuthorBadge.md)\>

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:15](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L15)

***

### author\_name

> **author\_name**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:13](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L13)

***

### author\_photo

> **author\_photo**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:14](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L14)

***

### context\_menu\_accessibility\_label

> **context\_menu\_accessibility\_label**: `string`

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:18](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L18)

***

### image

> **image**: [`Thumbnail`](../../Misc/classes/Thumbnail.md)[]

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:19](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L19)

***

### menu\_endpoint

> **menu\_endpoint**: [`NavigationEndpoint`](NavigationEndpoint.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:17](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L17)

***

### primary\_text

> **primary\_text**: [`Text`](../../Misc/classes/Text.md)

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:16](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L16)

***

### type

> `readonly` **type**: `string`

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type)

#### Defined in

[src/parser/helpers.ts:8](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L8)

***

### type

> `static` **type**: `string` = `'LiveChatSponsorshipsHeader'`

#### Overrides

[`YTNode`](../../Helpers/classes/YTNode.md).[`type`](../../Helpers/classes/YTNode.md#type-1)

#### Defined in

[src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts:11](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/classes/livechat/items/LiveChatSponsorshipsHeader.ts#L11)

## Methods

### as()

> **as**\<`T`, `K`\>(...`types`): `InstanceType`\<`K`\[`number`\]\>

Cast to one of the given types.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The types to cast to

#### Returns

`InstanceType`\<`K`\[`number`\]\>

The node cast to one of the given types

#### Throws

If the node is not of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`as`](../../Helpers/classes/YTNode.md#as)

#### Defined in

[src/parser/helpers.ts:38](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L38)

***

### hasKey()

> **hasKey**\<`T`, `R`\>(`key`): `this is LiveChatSponsorshipsHeader & { [k in string]: R }`

Check for a key without asserting the type.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

`this is LiveChatSponsorshipsHeader & { [k in string]: R }`

Whether the node has the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`hasKey`](../../Helpers/classes/YTNode.md#haskey)

#### Defined in

[src/parser/helpers.ts:50](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L50)

***

### is()

> **is**\<`T`, `K`\>(...`types`): `this is InstanceType<K[number]>`

Check if the node is of the given type.

#### Type Parameters

• **T** *extends* [`YTNode`](../../Helpers/classes/YTNode.md)

• **K** *extends* [`YTNodeConstructor`](../../Helpers/interfaces/YTNodeConstructor.md)\<`T`\>[]

#### Parameters

• ...**types**: `K`

The type to check

#### Returns

`this is InstanceType<K[number]>`

whether the node is of the given type

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`is`](../../Helpers/classes/YTNode.md#is)

#### Defined in

[src/parser/helpers.ts:28](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L28)

***

### key()

> **key**\<`T`, `R`\>(`key`): [`Maybe`](../../Helpers/classes/Maybe.md)

Assert that the node has the given key and return it.

#### Type Parameters

• **T** *extends* `string`

• **R** = `any`

#### Parameters

• **key**: `T`

The key to check

#### Returns

[`Maybe`](../../Helpers/classes/Maybe.md)

The value of the key wrapped in a Maybe

#### Throws

If the node does not have the key

#### Inherited from

[`YTNode`](../../Helpers/classes/YTNode.md).[`key`](../../Helpers/classes/YTNode.md#key)

#### Defined in

[src/parser/helpers.ts:60](https://github.com/LuanRT/YouTube.js/blob/4729016fb98e7045ee4043857be7eef780c01e35/src/parser/helpers.ts#L60)