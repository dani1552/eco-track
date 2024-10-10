const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'eco-track',
  location: 'asia-northeast3'
};
exports.connectorConfig = connectorConfig;

