# Node.js Boilerplate

> **Note** This tool is still in development.
>
> All the pre-releases i.e `v0.0.x` are mostly built as per personal requirements.
> Pre-releases will not be published to NPM and most probably not be used as a cli tool.

## Tools

Prerequisites:

- [Node.js](https://nodejs.org/en/) >= 14.17.0

TODO: At the moment v20 is being used as default

### Development

> Core utilities for building applications.
>
> By default we use `Node.js` as the runtime environment.
> Since javascript is not a compiled language, we use `Typescript` as the scripting language which provides type safety and other features which enhances the development capabilities in using javascript.
> All the development checks are configured in [tsconfig.json](./tsconfig.json) file. However, we use `SWC` to compile typescript to a **distributable** javascript code.

- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [SWC](https://swc.rs/)
- [ ] Get an alternative for `rm -rf` in build script [package.json](./package.json#L7)
- [ ] The base package versions should be the LTS versions of the respective packages.

### Testing

> These tools can serve their purpose in both a [development](#development) and in a [CI/CD pipeline](#continuous-integration)  environment.
>
> We use a modern zero configuration javascript testing framework `Vitest` for unit testing.
> `Istanbul` is used to check the code coverage of unit-tests. This by default provides a coverage report in table format and also generates [coverage](./coverage) directory which contains the coverage reports in the configured format.

- [x] [Vitest](https://vitest.dev/)
- [x] [Istanbul](https://istanbul.js.org/)

### Linting & Formatting

> These tools are used to maintain a consistent code style and to avoid common errors.
>
> `ESLint` is used to enforce a [configurable](./.eslintrc.json) code style. This code style is be implemented using `Prettier`
>

- [x] [ESLint](https://eslint.org/)

> Eslint configuration is dependent on the project requirements. However, we use the Node.js recommended configuration as the base configuration for now.
>
> TODO: Cli needs to generate project specific eslint configuration.

- [x] [Prettier](./.vscode/extensions.json)

### Continuous Integration

> Continuous Integration is a development practice that requires developers to integrate code into a shared repository several times a day.
> We make use of `Husky` to run setups to ensure code is in the best possible local state before being pushed to the remote repository.

- [x] [Husky](https://typicode.github.io/husky/#/)
- [x] [Lint Staged](https://github.com/lint-staged/lint-staged)
- [x] [Commit Lint](https://commitlint.js.org/#/)

> Making use of [Test](#testing) and [Linting](#linting--formatting) tools in a CI/CD pipeline is a good practice.

### Continuous Deployment

> `Github Actions` will be used to orchestrate the CI/CD pipeline. This will be configured in the [workflow](./.github/workflows) directory.

- [ ] [Github Actions](https://docs.github.com/en/actions)
