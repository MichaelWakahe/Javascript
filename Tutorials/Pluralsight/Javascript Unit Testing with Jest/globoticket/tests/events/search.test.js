const { getEvents } = require("../../js/events/search");
const { Event } = require("../../js/events/event");

describe('getEvents', () => {
    test('Returns events with ticket prices less than 30', () => {
        const searchPredicateMock = jest.fn(e => e.ticketPrice < 30);

        const expectedEvent1 = new Event(1, "Pop goes Punk!", 20.00, 1000, 1000);
        const expectedEvent2 = new Event(4, "Party Like Its 1990!", 10.00, 1000, 1000);
        const expectedEvent3 = new Event(7, "Head Banging Tunes of the Noughties", 29.99, 1000, 1000);
        
        const events = [
            expectedEvent1,
            new Event(2, "The Music of The Elders", 70.00, 1000, 1000),
            new Event(3, "Glastonbury 2025", 250.00, 1000, 1000),
            expectedEvent2,
            new Event(5, "Radio Tunes Extravanganza", 50.00, 1000, 1000),
            new Event(6, "Jump Around", 30.01, 1000, 1000),
            expectedEvent3
        ];

        const filterResults = getEvents(events, searchPredicateMock);

        expect(filterResults).toEqual([
            expectedEvent1,
            expectedEvent2,
            expectedEvent3
        ])

        expect(searchPredicateMock).toHaveBeenCalled();
        expect(searchPredicateMock).toHaveBeenCalledTimes(events.length);
        expect(searchPredicateMock.mock.calls.length).toBe(events.length);

        expect(searchPredicateMock.mock.calls[0][0]).toBe(events[0]);
        expect(searchPredicateMock.mock.calls[1][0]).toBe(events[1]);
    });
});