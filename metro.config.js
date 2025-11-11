const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);
// Adiciona suporte a scss/sass
config.resolver.sourceExts.push("scss", "sass");
config.transformer.babelTransformerPath = require.resolve(
  "react-native-sass-transformer"
);

module.exports = config;
