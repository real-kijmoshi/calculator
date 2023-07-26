const { default: MessageQueue } = require("react-native/Libraries/BatchedBridge/MessageQueue");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
