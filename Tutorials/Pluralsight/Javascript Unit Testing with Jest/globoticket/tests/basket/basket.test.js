const basket = require("../../js/basket/basket").default;
const {Event} = require("../../js/events/event");
const {BasketItem} = require("../../js/basket/basketitem");
const {User} = require("../../js/users/users");


describe("calculateTotal", () => {
    let events = [];
    let items = [];

    beforeEach(() => {
        events = [
            new Event(1, "A Night At The Proms", 2500.00, 2500, 2500),
            new Event(2, "Taylor Swift", 50.00, 5500, 2500),
            new Event(3, "Rage Against The Machine", 35.00, 2500, 2500),
        ];

        items = [
            new BasketItem(events[0], 1),
            new BasketItem(events[1], 4),
            new BasketItem(events[2], 2),
        ];
    })

    test("Test calculates total basket price when no discount applied", () => {

            const total = basket.calculateTotal(items);

            expect(total).toBeCloseTo(2770.00, 2)
    });

    test("Test calculates total basket price with discount", () => {

            const total = basket.calculateTotal(items, 800);

            expect(total).toBeCloseTo(1970.00, 2)
    });


});

describe("showAdverts", () => {
    let user;

    beforeEach(() => {
        user = new User(1, "John Doe", false); // Default user is not premium
    });

    test("should return true for non-premium users", () => {
        user.isPremium = false;

        const result = basket.showAdverts(user);

        expect(result).toBe(true);
    });

    test("should return false for premium users", () => {
        user.isPremium = true;

        const result = basket.showAdverts(user);

        expect(result).toBe(false);
    });
});

describe("serializeBasketItemsToJson", () => {
    test("Basket items are serialized correctly", () => {
        const events = [
            new Event(1, "A Night At The Proms", 2500.00, 2500, 2500),
            new Event(3, "Raging Machine", 35.00, 2500, 2500),
        ]

        const items = [
            new BasketItem(events[0], 1),
            new BasketItem(events[1], 2),
        ];

        itemsSerializedToJson = [
            {
                event: {
                        id: 1,
                        name: "A Night At The Proms",
                        ticketPrice: 2500.00,
                        totalTickets: 2500,
                        ticketsRemaining: 2500,
                    },
                ticketCount: 1,
            },
            {
                event: {
                    id: 3,
                    name: "Raging Machine",
                    ticketPrice: 35.00,
                    totalTickets: 2500,
                    ticketsRemaining: 2500,
                },
                ticketCount: 2
            }
        ];

        const serializedItems = basket.serializeBasketItemsToJson(items);

        expect(serializedItems).toEqual(itemsSerializedToJson);
    });
});

describe("searchBasket", () => {
    test("Only returns events that match the search query", () => {
        const events = [
            new Event(1, "The Movie Premiere", 2500.00, 2500, 2500),
            new Event(2, "Rock n Roll night", 50.00, 5500, 2500),
            new Event(3, "The Raging Machine", 35.00, 2500, 2500),
        ]

        const items = [
            new BasketItem(events[0], 1),
            new BasketItem(events[1], 4),
            new BasketItem(events[2], 2),
        ];

        const foundItems = basket.searchBasket(items, "THE");

        expect(foundItems).toContain(items[0]);
        expect(foundItems).toContain(items[2]);

        expect(foundItems).not.toContain(items[1]);
    });

    describe("getBasketItem", () => {
        let events, items = [];

        beforeEach(() => {
            events = [
                new Event(1, "A Night At The Proms", 2500.00, 2500, 2500),
                new Event(2, "Raging Machine", 200.00, 2000, 1500),
            ];

            items = [
                new BasketItem(events[0], 2),
                new BasketItem(events[1], 1),
            ];
        });

        test("Returns truthy if event exists in basket", () => {
            const basketItem = basket.getBasketItem(items, events[0]);

            expect(basketItem).toBeTruthy();
            expect(basketItem).not.toBeNull();
        });

        test("Returns falsy if event exists in basket", () => {
            const basketItem = basket.getBasketItem(items, new Event(1, "Pop party", 2500.00, 2500, 2500));

            expect(basketItem).toBeFalsy();
            expect(basketItem).toBeNull();
        });

        test("Returns the correct basket item when event exists in basket", () => {
            const events = [
                new Event(1, "Concert A", 100.00, 1000, 500),
                new Event(2, "Concert B", 200.00, 2000, 1500),
            ];

            const items = [
                new BasketItem(events[0], 2),
                new BasketItem(events[1], 1),
            ];

            const foundItem = basket.getBasketItem(items, events[1]);

            expect(foundItem).toBe(items[1]);
        });

        test("Returns null when event does not exist in basket", () => {
            const events = [
                new Event(1, "Concert A", 100.00, 1000, 500),
                new Event(2, "Concert B", 200.00, 2000, 1500),
            ];

            const items = [
                new BasketItem(events[0], 2),
            ];

            const foundItem = basket.getBasketItem(items, events[1]);

            expect(foundItem).toBeNull();
        });

        test("Returns null when basket is empty", () => {
            const events = [
                new Event(1, "Concert A", 100.00, 1000, 500),
            ];

            const items = [];

            const foundItem = basket.getBasketItem(items, events[0]);

            expect(foundItem).toBeNull();
        });
    });
});