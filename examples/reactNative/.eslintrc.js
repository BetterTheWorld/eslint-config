const { generateConfig } = require("../../lib");
const schemaPath = "";
const { reactNativeConfig } = generateConfig(schemaPath);

module.exports = {
  ...reactNativeConfig,
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  settings: {
    ...reactNativeConfig.settings,
    "import/resolver": {
      typescript: {
        project: __dirname + "/tsconfig.json",
      },
      alias: {
        map: [["@", "./"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
