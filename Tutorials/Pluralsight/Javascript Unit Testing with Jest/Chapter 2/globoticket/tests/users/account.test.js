import { getPastPurchases } from "../../js/users/account/account";
import purchaseHistory from "../../js/users/account/purchaseHistory/purchaseHistory";
jest.unmock("../../js/users/account/account");

describe("getPastPurchases", () => {
    test("Test gets past purchase history", () => {
        const userId = 123;
        const items = getPastPurchases(userId);
        expect(items).toEqual([
            {
                name: "Punk Goes Pop - 90s",
                tickets: 2,
                price: 40.00,
            },
            {
                name: "Adventures Live!",
                tickets: 5,
                price: 120.00,       
            },
            {
                name: "Folk dance party!",
                tickets: 3,
                price: 75.00,
            }
        ]);
    });

    test("Throws error when readyState is not 4", () => {
        jest.spyOn(purchaseHistory, 'getPurchaseHistory').mockReturnValue({ // override the mock
            readyState: 2,        
            onreadystatechange: null,
            response: {
                events: [
                ],
            }   
        });
        expect(() => getPastPurchases(123)).toThrow("Failed to get purchase history");
    })
});

describe("createAccount", () => {
    let newEmailAddress = "newuser2@pluralsight.com"
    beforeEach(() => {
        jest.spyOn(users, 'userExists').mockResolvedValue(false)
        jest.spyOn(users, 'createUserId').mockReturnValue(2)
    })

    test("Returns user data when account created successfully", () => {
        expect.hasAssertions(); // helps to avoid false positives due to skipped tests

        return account.createAccount(newEmailAddress)   // the `return` keyword is important here. Without it, jest will not run assertions
            .then((userAccount) => {
                expect(userAccount).toStrictEqual({"data": {"userId": 2, "username": newEmailAddress}});
            });
    });

    // This test is the same as the one above, but uses async/await syntax
    test("Returns user data when account created successfully - async/await", async () => {
        expect.hasAssertions();

        const userAccount = await account.createAccount(newEmailAddress);
        expect(userAccount).toStrictEqual({"data": {"userId": 2, "username": newEmailAddress}});
    });

    test("Returns user data when account created successfully - .resolves", () => {
        expect.hasAssertions();

        expect(account.createAccount(newEmailAddress)).resolves.toStrictEqual({"data": {"userId": 2, "username": newEmailAddress}});
    });

    test("Returns error message when user already exists", () => {
        jest.spyOn(users, 'userExists').mockReturnValue(true);

        expect.hasAssertions();

        return expect(account.createAccount(newEmailAddress)).rejects.toStrictEqual("User already exists");
    })

    test("Returns error message when user already exists - async/await", async () => {
        jest.spyOn(users, 'userExists').mockReturnValue(true);

        expect.hasAssertions();

        await expect(account.createAccount(newEmailAddress)).rejects.toStrictEqual("User already exists");
    })
});