# README - Chapter 13

Note that this book was written before ES6.

JavaScript doesn’t have a classical object-oriented model, where you create objects from classes. In fact, JavaScript
doesn’t have classes at all. In JavaScript, objects inherit behavior from other objects, which we call prototypal
inheritance, or inheritance based on prototypes.

The Dog constructor in Chapter 12 makes each dog object have its own copy of the bark() function. This eats up memory.

JavaScript objects can inherit properties and behavior from other objects. More specifically, JavaScript uses what is
known as _prototypal inheritance_, and the object you’re inheriting behavior from is called the _prototype_.
