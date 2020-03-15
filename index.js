module.exports = {
    'plugins': [
        '@typescript-eslint',
    ],
    'env': {
        'es6': true,
        'node': true
    },
    extends: [
        'eslint-config-airbnb-base',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    rules: require('./rules'),
};
