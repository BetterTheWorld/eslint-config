const path = require("path");
const fs = require("fs");
const sharedConfig = require("./config/sharedConfig");
const sharedRules = require("./rules/shared");
const webRules = require("./rules/web");
const webOverrides = require("./rules/overrides");
const reactNativeRules = require("./rules/react-native");

function generateConfig(schemaPath = "") {
  let schemaString = "";

  if (schemaPath) {
    const resolvedSchemaPath = path.resolve(process.cwd(), schemaPath);
    if (fs.existsSync(resolvedSchemaPath)) {
      schemaString = fs.readFileSync(resolvedSchemaPath, "utf8");
    } else {
      console.warn(`Schema file not found at ${resolvedSchemaPath}`);
    }
  }

  const webConfig = {
    ...sharedConfig,
    extends: ["next", "plugin:storybook/recommended", ...sharedConfig.extends],
    rules: {
      ...sharedRules,
      ...webRules,
    },
    settings: {
      ...sharedConfig.settings,
    },
    overrides: webOverrides,
  };

  if (schemaString) {
    webConfig.rules["graphql/template-strings"] = [
      "error",
      {
        env: "apollo",
        schemaString,
        validators: [
          "FieldsOnCorrectTypeRule",
          "KnownArgumentNamesRule",
          "KnownTypeNamesRule",
          "NoUndefinedVariablesRule",
          "PossibleFragmentSpreadsRule",
          "ScalarLeafsRule",
          "VariablesAreInputTypesRule",
          "UniqueArgumentNamesRule",
          "UniqueOperationNamesRule",
          "UniqueFragmentNamesRule",
          "UniqueVariableNamesRule",
          "ValuesOfCorrectTypeRule",
          "VariablesInAllowedPositionRule",
        ],
      },
    ];
    webConfig.rules["graphql/required-fields"] = [
      "error",
      {
        env: "apollo",
        requiredFields: ["id", "cursor", "month"],
        schemaString,
      },
    ];
    webConfig.rules["graphql/capitalized-type-name"] = [
      "error",
      {
        schemaString,
      },
    ];
    webConfig.rules["graphql/named-operations"] = [
      "error",
      {
        schemaString,
      },
    ];
  }

  const reactNativeConfig = {
    ...sharedConfig,
    plugins: [...sharedConfig.plugins, "jest"],
    extends: [...sharedConfig.extends, "universe/native", "expo"],
    env: {
      ...sharedConfig.env,
      "jest/globals": true,
    },
    rules: {
      ...sharedRules,
      ...reactNativeRules,
    },
    settings: {
      ...sharedConfig.settings,
    },
  };

  return { webConfig, reactNativeConfig };
}

module.exports = generateConfig;
