import { InvalidUsernameError } from "../../error-handling/exceptions";
import { getPurchaseHistory } from "./purchaseHistory/purchaseHistory";
import { userExists as _userExists, createUserId } from "../users";

class Purchase {
    constructor(eventName, tickets, cost) {
        this.eventName = eventName;
        this.tickets = tickets;
        this.cost = cost;
    }
}

async function isValidUserName(userName) {
    // Placeholder for request checking if username is valid
    if (!userName || !userName.includes('@')) {
        return false;
    }
    else{
        return true;
    }
}

async function createAccount(username) {
    if (!isValidUserName(username)) {
        throw InvalidUsernameError("Please enter a valid username")
    }
    const userExists = await _userExists(username);
    return new Promise((resolve, reject) => {
        if (!userExists) {
            resolve({data: {
                "userId": createUserId(),
                "username": username,
            }}) 
        } else {
            reject("User already exists")
        }
       
    })
}

function getPastPurchases(userId) {
    const purchases = getPurchaseHistory(userId);
        if (purchases.readyState === 4) {
            return purchases.response.events;
        }
        else {
            throw Error("Failed to get purchase history");
        }
}

export default {
    Purchase,
    createAccount,
    isValidUserName,
    getPastPurchases
}