module.exports = {
    // https://eslint.org/docs/rules/indent
    'indent': ['error', 4],

    // https://eslint.org/docs/rules/quotes
    'quotes': ['error', 'single', { avoidEscape: true }],

    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // https://eslint.org/docs/rules/semi
    'semi': ['error', 'always'],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],

    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'off', // Disabled to avoid duplicate with @typescript-eslint/no-unused-vars

    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
        'error',
        {
            'overrides': {
                'this': { 'before': false }, // For prevent errors in strings like '<any>this'
            },
        },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [
        'error',
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
    ],

    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',

    // https://eslint.org/docs/rules/max-len
    'max-len': 'off',

    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': ['warn'],

    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',

    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': ['warn'],

    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': ['warn'],

    // https://eslint.org/docs/rules/camelcase
    'camelcase': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
        'error',
        'ignorePackages',
        {
            'ts': 'never',
        },
    ],

    'prettier/prettier': ['error'],

};
