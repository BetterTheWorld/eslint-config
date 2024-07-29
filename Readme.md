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

### For Web (Next.js) Projects

```javascript
const { generateConfig } = require("@flipgive/eslint-config");
const schemaPath = "./path/to/your/schema.graphql";

const config = generateConfig(schemaPath);

module.exports = {
  ...config,
  extends: config.configs.web.extends,
};
```

### For React Native Projects

```javascript
const { generateConfig } = require("@flipgive/eslint-config");
const schemaPath = "./path/to/your/schema.graphql";

const config = generateConfig(schemaPath);

module.exports = {
  ...config,
  extends: config.configs["react-native"].extends,
};
```

Replace `./path/to/your/schema.graphql` with the actual path to your `schema.graphql` file.

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
