module.exports = {
  root: true,
  extends: ["universe/native", "@react-native-community"],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        quotes: ["warn", "single"],
      },
    },
  ],
};