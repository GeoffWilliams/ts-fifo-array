/* eslint-env node */
const typescriptEslint = require('@typescript-eslint/eslint-plugin');


module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic'
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    root: true,
    rules: {
        // Note: you must disable the base rule as it can report incorrect errors
        "semi": "off",
        // TS styleguide says dont use em...
        "no-restricted-globals": [
            "error",
            {"name": "parseFloat", "message": "Use Number('123') instead"},
            {"name": "parseInt", "message": "Use Math.trunc(Number('123')) instead"},
        ],
        "@typescript-eslint/semi": "error",

        // PascalCase enum members
        // bad default in https://github.com/typescript-eslint/typescript-eslint/issues/6592
        // means have to recreate the entire rule structure here by extracting the defaults from:
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/rules/naming-convention.ts
        "@typescript-eslint/naming-convention": [
            "error",
            ...[...typescriptEslint.rules["naming-convention"].defaultOptions, {
                "selector": "enumMember",
                "format": ["PascalCase"]
            }]
        ],

        // Need to allow unused parameters for some callback styles to work, style guide
        // bans variables starting `_`: https://ts.dev/style/#identifiers
        //
        // Allow unused parameters if the name starts `ignore`
        // https://stackoverflow.com/questions/65921949/eslint-warns-about-unused-function-parameter-type
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {argsIgnorePattern: "^ignore"}]
    }
};