const path = require('path');
const fs = require('fs');

function generateConfig(schemaPath) {
  let schemaString = '';

  if (schemaPath) {
    const resolvedSchemaPath = path.resolve(process.cwd(), schemaPath);
    if (fs.existsSync(resolvedSchemaPath)) {
      schemaString = fs.readFileSync(resolvedSchemaPath, 'utf8');
    } else {
      console.warn(`Schema file not found at ${resolvedSchemaPath}`);
    }
  }

  const webRules = require('./rules/web');
  const reactNativeRules = require('./rules/react-native');
  const sharedRules = require('./rules/shared');
  const sharedExtends = require('./rules/sharedExtends');

  const config = {
    rules: {
      ...sharedRules,
      ...webRules,
      ...reactNativeRules,
    },
    configs: {
      web: {
        plugins: ['@flipgive/eslint-config'],
        extends: [
          'airbnb',
          'next',
          'plugin:workspaces/recommended',
          'plugin:storybook/recommended',
          ...sharedExtends
        ],
        rules: {
          ...sharedRules,
          ...webRules,
        },
      },
      'react-native': {
        plugins: ['@flipgive/eslint-config'],
        extends: [
          'universe/native',
          '@react-native-community',
          'airbnb',
          ...sharedExtends
        ],
        rules: {
          ...sharedRules,
          ...reactNativeRules,
        },
      },
    },
  };

  if (schemaString) {
    config.configs.web.rules['graphql/template-strings'] = [
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
    config.configs.web.rules['graphql/required-fields'] = [
      "error",
      {
        env: "apollo",
        requiredFields: ["id", "cursor", "month"],
        schemaString,
      },
    ];
    config.configs.web.rules['graphql/capitalized-type-name'] = [
      "error",
      {
        schemaString,
      },
    ];
    config.configs.web.rules['graphql/named-operations'] = [
      "error",
      {
        schemaString,
      },
    ];
  }

  return config;
}

module.exports = generateConfig;
