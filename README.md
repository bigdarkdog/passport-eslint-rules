# First version of linter config

## Installation
```sh
$ npm install ivanlem/passport-eslint-rules --save-dev
```

Add `.eslintrc.js` in root of project
```javascript
module.exports = {
    extends: ['eslint-config-passport-rules'],
};
```

and `.prettierrc` in root
```json
{
    "singleQuote": true,
    "printWidth": 120,
    "trailingComma": "none",
    "tabWidth": 4,
    "parser": "typescript"
}
```

## Usage
```sh
$ eslint ./src/** --ext ts
```
