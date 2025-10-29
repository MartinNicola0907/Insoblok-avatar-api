const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'insoblok-webapp-server',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createDefaultAvatarsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDefaultAvatars');
}
createDefaultAvatarsRef.operationName = 'CreateDefaultAvatars';
exports.createDefaultAvatarsRef = createDefaultAvatarsRef;

exports.createDefaultAvatars = function createDefaultAvatars(dc) {
  return executeMutation(createDefaultAvatarsRef(dc));
};

const listDefaultAvatarsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListDefaultAvatars');
}
listDefaultAvatarsRef.operationName = 'ListDefaultAvatars';
exports.listDefaultAvatarsRef = listDefaultAvatarsRef;

exports.listDefaultAvatars = function listDefaultAvatars(dc) {
  return executeQuery(listDefaultAvatarsRef(dc));
};

const createAvatarRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateAvatar', inputVars);
}
createAvatarRef.operationName = 'CreateAvatar';
exports.createAvatarRef = createAvatarRef;

exports.createAvatar = function createAvatar(dcOrVars, vars) {
  return executeMutation(createAvatarRef(dcOrVars, vars));
};

const getUserAvatarsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserAvatars');
}
getUserAvatarsRef.operationName = 'GetUserAvatars';
exports.getUserAvatarsRef = getUserAvatarsRef;

exports.getUserAvatars = function getUserAvatars(dc) {
  return executeQuery(getUserAvatarsRef(dc));
};
