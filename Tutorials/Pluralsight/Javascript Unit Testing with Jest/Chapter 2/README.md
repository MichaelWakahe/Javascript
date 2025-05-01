# Chapter 2

Install jest with the following command: `npm install jest --save-dev`

Update the `package.json` file in the `scripts` section to add a `test` command.

## Run App

Ensure that you have Node and npm available in your executable path.

Run the following command in the `globoticket` folder:
`npm run start`

To view the website, browse over to <http://localhost:3000>

## Notes

Use a `describe` block to group tests for one function.

Inside a `describe` block you can have the `beforeEach`, `beforeAll`, `afterEach` and `afterAll` hooks. See the example
in `basket.test.js`. All hooks can be used in the root of the file or scoped to a `describe` block.

Tests must have `.test` in their names to be found by Jest. Conventionally, the test file has the name of the file it is
testing as its first part.

You can keep the tests in the same directory as your source code file. You can also create a separate directory for your
tests. This is the convention used by this project. There is no consensus in the community over which one to choose.

Jest can be configured with a configuration file. Any file named Jest.config.js|ts|mjs|cjs|json will be automatically
discovered. You can specify an explicit path using `--config` option when using the CLI. Configuration can also be
specified in the `package.json` file using the `Jest` key. For more information, visit
<https://jestjs.io/docs/configuration>.

For CLI options, visit the docs at <https://jestjs.io/docs/cli>. Some useful commands are:

- jest

- jest filename
- jest /tickets/*

- jest --findRelatedTests filename

- jest -onlyChanged

- npm test -- -onlyChanged

Many of the options above require source control tooling to track what files have been changed.