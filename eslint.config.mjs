import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint",
      "react-hooks",
      "prettier",
      "jsx-a11y",
      "node",
    ],
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "eslint:recommended",
      "plugin:node/recommended",
      "prettier",
    ],
    rules: {
      // TypeScript Rules
      "@typescript-eslint/no-unused-vars": "off", // Disable rule
      "@typescript-eslint/no-unused-vars-experimental": "error", // Enable stricter rule
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",

      // React Rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility Rules
      "jsx-a11y/anchor-is-valid": "warn",

      // Node.js Rules
      "node/no-unsupported-features/es-syntax": "off",

      // Formatting Rules
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: true,
          singleQuote: true,
          printWidth: 80,
        },
      ],

      // Additional Rules
      "react/no-unescaped-entities": "off", // Disable rule for unescaped entities
    },
  },
];

export default eslintConfig;
