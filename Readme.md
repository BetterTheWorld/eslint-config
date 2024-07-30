# @flipgive/eslint-config

A custom ESLint configuration for both web (Next.js) and React Native projects.

![npm](https://img.shields.io/npm/v/@flipgive/eslint-config)
![license](https://img.shields.io/npm/l/@flipgive/eslint-config)
![downloads](https://img.shields.io/npm/dm/@flipgive/eslint-config)

## Installation

Install the package via npm:

```bash
npm install @flipgive/eslint-config
```

## Usage

Create or update your `.eslintrc.js` file in your project to use the custom ESLint package:

```javascript
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
```

Replace `./path/to/your/schema.graphql` with the actual path to your `schema.graphql` file.

## Handling Module Path Resolution Errors

If you encounter an error like:

`error Unable to resolve path to module '@/my-path' import/no-unresolved`

You can resolve this by configuring ESLint to understand your module aliases. Follow these steps:

### Step 1: Install the Necessary Package

First, you need to install the `eslint-import-resolver-alias` package:

```bash
npm install --save-dev eslint-import-resolver-alias
```

### Step 2: Configure ESLint to Use the Alias Resolver

Update your ESLint configuration to use the eslint-import-resolver-alias resolver. You can do this by adding the following to your ESLint configuration file (e.g., .eslintrc.js).

## Configuration Details

This package includes the following configurations:

### Web (Next.js)

- **Plugins**:

  - `promise`
  - `react`
  - `react-hooks`
  - `graphql`
  - `import`
  - `workspaces`
  - `@typescript-eslint`
  - `typescript-sort-keys`
  - `turbo`
  - `deprecate`

- **Extends**:
  - `airbnb`
  - `eslint:recommended`
  - `next`
  - `plugin:@typescript-eslint/recommended`
  - `plugin:@typescript-eslint/recommended-requiring-type-checking`
  - `plugin:promise/recommended`
  - `plugin:react/recommended`
  - `plugin:import/recommended`
  - `plugin:import/typescript`
  - `plugin:workspaces/recommended`
  - `prettier`
  - `plugin:storybook/recommended`

### React Native

- **Plugins**:

  - `promise`
  - `react`
  - `react-hooks`
  - `graphql`
  - `import`
  - `workspaces`
  - `@typescript-eslint`
  - `typescript-sort-keys`
  - `turbo`
  - `deprecate`

- **Extends**:
  - `universe/native`
  - `@react-native-community`
  - `airbnb`
  - `eslint:recommended`
  - `plugin:@typescript-eslint/recommended`
  - `plugin:@typescript-eslint/recommended-requiring-type-checking`
  - `plugin:promise/recommended`
  - `plugin:react/recommended`
  - `plugin:import/recommended`
  - `plugin:import/typescript`
  - `prettier`

## License

MIT
