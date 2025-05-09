# README

This is based on the course *JavaScript Unit Testing with Jest by Gabriel McNeilly*.

The course was created using:

- JavaScript 2022
- Jest v29
- Node.js v18
- npm v8

## General Notes

- No configuration is required to get started with Jest.
- Tests run in parallel.
- By default Jest tests time out after 5 seconds.
- Matchers are used to perform validation.
- An example of running a specific test: `npm test -- event.test.js`

## Chapter 2

Install jest with the following command: `npm install jest --save-dev`

Update the `package.json` file in the `scripts` section to add a `test` command.

### Run App

Ensure that you have Node and npm available in your executable path.

Run the following command in the `globoticket` folder:
`npm run start`

To view the website, browse over to <http://localhost:3000>

### Notes

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

## Chapter 3: Exploring Common Matchers

Matchers are documented here: <https://jestjs.io/docs/expect#methods>

.not can be used with all matchers to check the opposite condition.

When comparing objects, don't use the `toBe` matcher, use the `toEqual`. The `toBe` is only suitable for primitives such
as strings, booleans and integers. The `toStrictEqual` is a matcher that has extra checks beyond `toEqual`. See the `serializeBasketItemsToJson` example in `basket.test.js`.

For pattern matching, use the `toContain` and . See the example in `promotion.test.js`. See the `searchBasket` example
in `basket.test.js`. For a regexp example, refer to the `generateReferralCode` test in `promotions.test.js`.

Falsy values in Javascript are six: false, 0, '', null, undefined, NaN. Use the `toBeTruthy` and `toBeFalsy` pattern
matchers for such. Assert on truthiness when you do not need to validate the exact value. Refer to the `getBasketItem`
test in `basket.test.js` for an example.

To test for errors, use the `toThrow` matcher. Refer to the `createEvent` test in `event.test.js`.

## Chapter 4: Using Mocks

Mocks are sometimes referred to as spies.

For simple mock functions, refer to the `Returns events with ticket prices less than 30` test in `search.test.js`. Also
refer to the `Returns correct referral code` in `promotions.test.js`. To see an example of Jest built in mocks, refer to
the `Test Today Filter` tests in `filters.test.js`.

With Automock toggled on in the configuration file, all imported modules apart from built-in node modules will
automatically be mocked. This removes the need to add explicit mocks for dependencies. You must then "unmock" any
functions if you want to use their actual implementation. Automock can be difficult to introduce into existing test
suites. See the example in the `tests/users` folder.

For a manual mock example, refer to `globoticket/js/users/account/purchaseHistory/__mocks__/purchaseHistory.js`. Jest
will automatically use manual mocks when jest.mock is called for a module or when automock is toggled on.

## Chapter 5: Testing Asynchronous Code

For an example with a promise, look at the `createAccount` test in `account.test.js`.

For an example with a callback, look at `exchange.jest.js`.

## Chapter 6: Measuring Code Coverage

By default Babel is used by Jest to facilitate measuring code coverage.

Jest provides 4 main metrics for code coverage: statements, branches, functions and lines.

You can use the --coverage to collect coverage statistics from the command line. Alternatively, you can set coverage in
the config file. Refer to `globoticket/jest.config.json` as an example.

Git pre-commit hooks can be used to enforce coverage.
