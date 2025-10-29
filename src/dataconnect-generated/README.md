# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListDefaultAvatars*](#listdefaultavatars)
  - [*GetUserAvatars*](#getuseravatars)
- [**Mutations**](#mutations)
  - [*CreateDefaultAvatars*](#createdefaultavatars)
  - [*CreateAvatar*](#createavatar)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListDefaultAvatars
You can execute the `ListDefaultAvatars` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listDefaultAvatars(): QueryPromise<ListDefaultAvatarsData, undefined>;

interface ListDefaultAvatarsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDefaultAvatarsData, undefined>;
}
export const listDefaultAvatarsRef: ListDefaultAvatarsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDefaultAvatars(dc: DataConnect): QueryPromise<ListDefaultAvatarsData, undefined>;

interface ListDefaultAvatarsRef {
  ...
  (dc: DataConnect): QueryRef<ListDefaultAvatarsData, undefined>;
}
export const listDefaultAvatarsRef: ListDefaultAvatarsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDefaultAvatarsRef:
```typescript
const name = listDefaultAvatarsRef.operationName;
console.log(name);
```

### Variables
The `ListDefaultAvatars` query has no variables.
### Return Type
Recall that executing the `ListDefaultAvatars` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDefaultAvatarsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDefaultAvatarsData {
  defaultAvatars: ({
    id: UUIDString;
    name?: string | null;
    description?: string | null;
    url: string;
    createdAt: TimestampString;
  } & DefaultAvatar_Key)[];
}
```
### Using `ListDefaultAvatars`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDefaultAvatars } from '@dataconnect/generated';


// Call the `listDefaultAvatars()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDefaultAvatars();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDefaultAvatars(dataConnect);

console.log(data.defaultAvatars);

// Or, you can use the `Promise` API.
listDefaultAvatars().then((response) => {
  const data = response.data;
  console.log(data.defaultAvatars);
});
```

### Using `ListDefaultAvatars`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDefaultAvatarsRef } from '@dataconnect/generated';


// Call the `listDefaultAvatarsRef()` function to get a reference to the query.
const ref = listDefaultAvatarsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDefaultAvatarsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.defaultAvatars);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.defaultAvatars);
});
```

## GetUserAvatars
You can execute the `GetUserAvatars` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserAvatars(): QueryPromise<GetUserAvatarsData, undefined>;

interface GetUserAvatarsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserAvatarsData, undefined>;
}
export const getUserAvatarsRef: GetUserAvatarsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserAvatars(dc: DataConnect): QueryPromise<GetUserAvatarsData, undefined>;

interface GetUserAvatarsRef {
  ...
  (dc: DataConnect): QueryRef<GetUserAvatarsData, undefined>;
}
export const getUserAvatarsRef: GetUserAvatarsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserAvatarsRef:
```typescript
const name = getUserAvatarsRef.operationName;
console.log(name);
```

### Variables
The `GetUserAvatars` query has no variables.
### Return Type
Recall that executing the `GetUserAvatars` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserAvatarsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserAvatarsData {
  avatars: ({
    id: UUIDString;
    filename?: string | null;
    mimeType?: string | null;
    originalUrl: string;
    storagePath?: string | null;
    createdAt: TimestampString;
    avatarVariants_on_avatar: ({
      id: UUIDString;
      sizeName: string;
      variantUrl: string;
      width?: number | null;
      height?: number | null;
    } & AvatarVariant_Key)[];
  } & Avatar_Key)[];
}
```
### Using `GetUserAvatars`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserAvatars } from '@dataconnect/generated';


// Call the `getUserAvatars()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserAvatars();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserAvatars(dataConnect);

console.log(data.avatars);

// Or, you can use the `Promise` API.
getUserAvatars().then((response) => {
  const data = response.data;
  console.log(data.avatars);
});
```

### Using `GetUserAvatars`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserAvatarsRef } from '@dataconnect/generated';


// Call the `getUserAvatarsRef()` function to get a reference to the query.
const ref = getUserAvatarsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserAvatarsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.avatars);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.avatars);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateDefaultAvatars
You can execute the `CreateDefaultAvatars` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDefaultAvatars(): MutationPromise<CreateDefaultAvatarsData, undefined>;

interface CreateDefaultAvatarsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateDefaultAvatarsData, undefined>;
}
export const createDefaultAvatarsRef: CreateDefaultAvatarsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDefaultAvatars(dc: DataConnect): MutationPromise<CreateDefaultAvatarsData, undefined>;

interface CreateDefaultAvatarsRef {
  ...
  (dc: DataConnect): MutationRef<CreateDefaultAvatarsData, undefined>;
}
export const createDefaultAvatarsRef: CreateDefaultAvatarsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDefaultAvatarsRef:
```typescript
const name = createDefaultAvatarsRef.operationName;
console.log(name);
```

### Variables
The `CreateDefaultAvatars` mutation has no variables.
### Return Type
Recall that executing the `CreateDefaultAvatars` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDefaultAvatarsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDefaultAvatarsData {
  defaultAvatar_insertMany: DefaultAvatar_Key[];
}
```
### Using `CreateDefaultAvatars`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDefaultAvatars } from '@dataconnect/generated';


// Call the `createDefaultAvatars()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDefaultAvatars();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDefaultAvatars(dataConnect);

console.log(data.defaultAvatar_insertMany);

// Or, you can use the `Promise` API.
createDefaultAvatars().then((response) => {
  const data = response.data;
  console.log(data.defaultAvatar_insertMany);
});
```

### Using `CreateDefaultAvatars`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDefaultAvatarsRef } from '@dataconnect/generated';


// Call the `createDefaultAvatarsRef()` function to get a reference to the mutation.
const ref = createDefaultAvatarsRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDefaultAvatarsRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.defaultAvatar_insertMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.defaultAvatar_insertMany);
});
```

## CreateAvatar
You can execute the `CreateAvatar` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createAvatar(vars: CreateAvatarVariables): MutationPromise<CreateAvatarData, CreateAvatarVariables>;

interface CreateAvatarRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAvatarVariables): MutationRef<CreateAvatarData, CreateAvatarVariables>;
}
export const createAvatarRef: CreateAvatarRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createAvatar(dc: DataConnect, vars: CreateAvatarVariables): MutationPromise<CreateAvatarData, CreateAvatarVariables>;

interface CreateAvatarRef {
  ...
  (dc: DataConnect, vars: CreateAvatarVariables): MutationRef<CreateAvatarData, CreateAvatarVariables>;
}
export const createAvatarRef: CreateAvatarRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createAvatarRef:
```typescript
const name = createAvatarRef.operationName;
console.log(name);
```

### Variables
The `CreateAvatar` mutation requires an argument of type `CreateAvatarVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateAvatarVariables {
  filename: string;
  mimeType: string;
  originalUrl: string;
  storagePath?: string | null;
}
```
### Return Type
Recall that executing the `CreateAvatar` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateAvatarData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateAvatarData {
  avatar_insert: Avatar_Key;
}
```
### Using `CreateAvatar`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createAvatar, CreateAvatarVariables } from '@dataconnect/generated';

// The `CreateAvatar` mutation requires an argument of type `CreateAvatarVariables`:
const createAvatarVars: CreateAvatarVariables = {
  filename: ..., 
  mimeType: ..., 
  originalUrl: ..., 
  storagePath: ..., // optional
};

// Call the `createAvatar()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createAvatar(createAvatarVars);
// Variables can be defined inline as well.
const { data } = await createAvatar({ filename: ..., mimeType: ..., originalUrl: ..., storagePath: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createAvatar(dataConnect, createAvatarVars);

console.log(data.avatar_insert);

// Or, you can use the `Promise` API.
createAvatar(createAvatarVars).then((response) => {
  const data = response.data;
  console.log(data.avatar_insert);
});
```

### Using `CreateAvatar`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createAvatarRef, CreateAvatarVariables } from '@dataconnect/generated';

// The `CreateAvatar` mutation requires an argument of type `CreateAvatarVariables`:
const createAvatarVars: CreateAvatarVariables = {
  filename: ..., 
  mimeType: ..., 
  originalUrl: ..., 
  storagePath: ..., // optional
};

// Call the `createAvatarRef()` function to get a reference to the mutation.
const ref = createAvatarRef(createAvatarVars);
// Variables can be defined inline as well.
const ref = createAvatarRef({ filename: ..., mimeType: ..., originalUrl: ..., storagePath: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createAvatarRef(dataConnect, createAvatarVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.avatar_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.avatar_insert);
});
```

