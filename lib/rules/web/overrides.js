module.exports = [
  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "no-console": "off",
    },
  },
  {
    files: ["**/*.page.tsx", "**/*.api.ts", "**/*.api.tsx"],
    rules: {
      "import/no-default-export": "off",
      "import/prefer-default-export": "error",
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    files: ["*.stories.tsx"],
    rules: {
      "import/no-default-export": "off",
      "import/prefer-default-export": "error",
    },
  },
];
