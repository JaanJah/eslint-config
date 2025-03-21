# @jaanjah/eslint-config

Typescript [ESLint](https://eslint.org/) config for [JaanJah](https://github.com/JaanJah/).

Requires Node 20.x or higher to use.

## Usage

Install:
```sh
npm install --save-dev @jaanjah/eslint-config
yarn add --dev @jaanjah/eslint-config
```

Extend eslint configuration in your `eslint.config.ts` file
```ts
import config from '@jaanjah/eslint-config';

export default [...config];
```
