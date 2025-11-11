const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Garante que não duplica extensões
const sourceExts = config.resolver.sourceExts || [];
["scss", "sass"].forEach((ext) => {
  if (!sourceExts.includes(ext)) sourceExts.push(ext);
});
config.resolver.sourceExts = sourceExts;

// Define transformer do SASS
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-sass-transformer"),
};

module.exports = config;

module.exports = config;
