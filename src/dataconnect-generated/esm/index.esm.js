import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'insoblok-webapp-server',
  location: 'us-east4'
};

export const createDefaultAvatarsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDefaultAvatars');
}
createDefaultAvatarsRef.operationName = 'CreateDefaultAvatars';

export function createDefaultAvatars(dc) {
  return executeMutation(createDefaultAvatarsRef(dc));
}

export const listDefaultAvatarsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListDefaultAvatars');
}
listDefaultAvatarsRef.operationName = 'ListDefaultAvatars';

export function listDefaultAvatars(dc) {
  return executeQuery(listDefaultAvatarsRef(dc));
}

export const createAvatarRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateAvatar', inputVars);
}
createAvatarRef.operationName = 'CreateAvatar';

export function createAvatar(dcOrVars, vars) {
  return executeMutation(createAvatarRef(dcOrVars, vars));
}

export const getUserAvatarsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserAvatars');
}
getUserAvatarsRef.operationName = 'GetUserAvatars';

export function getUserAvatars(dc) {
  return executeQuery(getUserAvatarsRef(dc));
}

