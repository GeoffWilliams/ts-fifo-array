# ts-fifo-array

This is a TypeScript/ES6 rewrite of [fifo-array](https://github.com/ben-bradley/fifo-array/).

`fifo-array` is a great simple module but its missing its type definitions and hasnt been updated for many years so easiest to just copy-paste-and-update it.




https://github.com/ben-bradley/fifo-array/



# TypeScript template project

A sample TypeScript project for you to copy and adjust. This was originally going to be some instructions but theres too many files and moving parts so make a git repository instead.

## Features

* TypeScript/ES6
* Source code in `/src`, test code in `/test`
* [typescript-eslint](https://typescript-eslint.io/)
* [Logging](https://github.com/log4js-node/log4js-node)
* [dotenv](https://github.com/motdotla/dotenv)
* [Example .ts source file](./src/index.ts)
* [Example vitest testcase](./test/index.test.ts)

## Customization

Just adjust the details `package.json` and your in business.


## Script targets

`npm run `

* `test` - vitest
* `lint` - eslint
* `build` - test and transpile 
* `dev` - run build, then the app on command line

eg:

```shell
npm run test
```

## Publishing to NPM 

[HLMGTFY](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/)

TLDR:

```shell
npm publish ...
```