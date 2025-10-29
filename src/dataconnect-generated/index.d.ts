import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AvatarVariant_Key {
  id: UUIDString;
  __typename?: 'AvatarVariant_Key';
}

export interface Avatar_Key {
  id: UUIDString;
  __typename?: 'Avatar_Key';
}

export interface CreateAvatarData {
  avatar_insert: Avatar_Key;
}

export interface CreateAvatarVariables {
  filename: string;
  mimeType: string;
  originalUrl: string;
  storagePath?: string | null;
}

export interface CreateDefaultAvatarsData {
  defaultAvatar_insertMany: DefaultAvatar_Key[];
}

export interface DefaultAvatar_Key {
  id: UUIDString;
  __typename?: 'DefaultAvatar_Key';
}

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

export interface ListDefaultAvatarsData {
  defaultAvatars: ({
    id: UUIDString;
    name?: string | null;
    description?: string | null;
    url: string;
    createdAt: TimestampString;
  } & DefaultAvatar_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateDefaultAvatarsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateDefaultAvatarsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateDefaultAvatarsData, undefined>;
  operationName: string;
}
export const createDefaultAvatarsRef: CreateDefaultAvatarsRef;

export function createDefaultAvatars(): MutationPromise<CreateDefaultAvatarsData, undefined>;
export function createDefaultAvatars(dc: DataConnect): MutationPromise<CreateDefaultAvatarsData, undefined>;

interface ListDefaultAvatarsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDefaultAvatarsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListDefaultAvatarsData, undefined>;
  operationName: string;
}
export const listDefaultAvatarsRef: ListDefaultAvatarsRef;

export function listDefaultAvatars(): QueryPromise<ListDefaultAvatarsData, undefined>;
export function listDefaultAvatars(dc: DataConnect): QueryPromise<ListDefaultAvatarsData, undefined>;

interface CreateAvatarRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAvatarVariables): MutationRef<CreateAvatarData, CreateAvatarVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateAvatarVariables): MutationRef<CreateAvatarData, CreateAvatarVariables>;
  operationName: string;
}
export const createAvatarRef: CreateAvatarRef;

export function createAvatar(vars: CreateAvatarVariables): MutationPromise<CreateAvatarData, CreateAvatarVariables>;
export function createAvatar(dc: DataConnect, vars: CreateAvatarVariables): MutationPromise<CreateAvatarData, CreateAvatarVariables>;

interface GetUserAvatarsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserAvatarsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserAvatarsData, undefined>;
  operationName: string;
}
export const getUserAvatarsRef: GetUserAvatarsRef;

export function getUserAvatars(): QueryPromise<GetUserAvatarsData, undefined>;
export function getUserAvatars(dc: DataConnect): QueryPromise<GetUserAvatarsData, undefined>;

