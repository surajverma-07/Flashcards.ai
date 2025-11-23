import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig({
  ...nextVitals,
  ...nextTs,
  extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  plugins:['prettier'],
  rules:{
    'prettier/prettier': 'error',
    'react/no-escape-entities': 'off',
  },
  ...globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
});

export default eslintConfig;
