function checkOut<T, V>(item: T, customer: V): T {
    availableItem: T = getItemFromDB(item);
    activeCustomer: V = getCustomerFromDB(customer);

    if (availableItem && activeCustomer) {

    }

    return availableItem;
}

checkOut<Book, Student>(someBook, someStudent);

// The above differs from this one
checkOut(someBook, someStudent);


function checkOut2<T, V>(item: T, customer: V): void {
    availableItem: T = getItemFromDB(item);
    activeCustomer: V = getCustomerFromDB(customer);

    if (availableItem && activeCustomer) {

    }
}