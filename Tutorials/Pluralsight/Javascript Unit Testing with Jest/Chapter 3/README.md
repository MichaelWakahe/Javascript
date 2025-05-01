# Chapter 3

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
