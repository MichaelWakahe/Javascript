# README

This is based on the course *JavaScript Unit Testing with Jest by Gabriel McNeilly*.

The course was created using:

- JavaScript 2022
- Jest v29
- Node.js v18
- npm v8

## Notes

- No configuration is required to get started with Jest.
- Tests run in parallel.
- By default Jest tests time out after 5 seconds.
- Matchers are used to perform validation.
- An example of running a specific test: `npm test -- event.test.js`

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
