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

## Usage
```sh
$ eslint ./src/** --ext ts
```
