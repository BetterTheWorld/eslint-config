module.exports = {  
  "@typescript-eslint/no-var-requires": "off",
  "no-console": "off",
  "import/no-default-export": "off",
  "import/prefer-default-export": "error",
  "import/no-anonymous-default-export": "off",
  "padding-line-between-statements": [
    "error",
    {
      blankLine: "never",
      prev: "export",
      next: "export",
    },
  ],
};