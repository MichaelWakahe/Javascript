import { getExchangeRate } from "../../js/promotions/exchange/exchange";
import exchangeRateProvider from "../../js/promotions/exchange/exchangeRateProvider";

describe("getExchangeRate", () => {
    test("Returns correct exchange rate for US Dollars", done => { // pay atttention to the `done` callback
        jest.spyOn(exchangeRateProvider, 'callExchangeRateProvider').mockResolvedValue(1.21);

        function callback(data) {
            try {
                expect(data.originalCurrency).toBe("GBP");
                expect(data.newCurrency).toBe("USD");
                expect(data.exchangeRate).toBeCloseTo(1.21);
                done();
            } catch (error) {
                done(error);
            }
        }

        getExchangeRate("USD", callback);
    });
});