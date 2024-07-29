const path = require('path');
const fs = require('fs');

function generateConfig(schemaPath) {
  const resolvedSchemaPath = path.resolve(process.cwd(), schemaPath);
  const schemaString = fs.readFileSync(resolvedSchemaPath, 'utf8');

  const webRules = require('./rules/web');
  const reactNativeRules = require('./rules/react-native');
  const sharedRules = require('./rules/shared');

  return {
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
          'eslint:recommended',
          'next',
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
          'plugin:promise/recommended',
          'plugin:react/recommended',
          'plugin:import/recommended',
          'plugin:import/typescript',
          'plugin:workspaces/recommended',
          'prettier',
          'plugin:storybook/recommended'
        ],
        rules: {
          ...sharedRules,
          ...webRules,
          "graphql/template-strings": [
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
          ],
          "graphql/required-fields": [
            "error",
            {
              env: "apollo",
              requiredFields: ["id", "cursor", "month"],
              schemaString,
            },
          ],
          "graphql/capitalized-type-name": [
            "error",
            {
              schemaString,
            },
          ],
          "graphql/named-operations": [
            "error",
            {
              schemaString,
            },
          ],
        },
      },
      'react-native': {
        plugins: ['@flipgive/eslint-config'],
        extends: [
          'universe/native',
          '@react-native-community',
          'airbnb',
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
          'plugin:promise/recommended',
          'plugin:react/recommended',
          'plugin:import/recommended',
          'plugin:import/typescript',
          'prettier'
        ],
        rules: {
          ...sharedRules,
          ...reactNativeRules,
        },
      },
    },
  };
}

module.exports = generateConfig;
