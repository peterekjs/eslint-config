# @peterek/eslint-config-js

An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs)
for projects using **Prettier** and **JavaScript Standard Style** as ESLint
rules.

## Installation

These instructions assume that you've already installed ESLint
(`npm i -D eslint`) and **@babel/eslint-parser** (`npm i -D @babel/eslint-parser`).

```sh
# install @peterek/eslint-config-js
npm i -D @peterek/eslint-config-js

# install exact version of prettier to achieve consistent results over time
npm i -ED prettier
```


## Usage

### ESLint config

Once you've finished installation, add @peterek/eslint-config-js to the
"extends" array in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files). Make sure to put it last, so that
it gets the chance to override other configs that could conflict with Prettier.

```json
{
  "extends": [
    "@peterek/js"
  ]
}
```

<details>
<summary>ESLint config recommendations</summary>

It is up to your judgement to specify environment used within project and also to specify whether it's a root repository so the ESLint does not look for another configs up in the file path.

```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "@peterek/js"
  ]
}
```
</details>

### Prettier config

Make sure you have created prettier config file (`.prettierrc`) with following content:

```json
"prettier-config-standard"
```

### Update package.json scripts

Update `scripts` section in `package.json` file to include following **lint** entry:

```json
{
  "scripts": {
    "lint": "eslint --fix --ext .cjs,.mjs,.js,.ts,.jsx,.tsx --format codeframe ."
  }
}
```
