/** Chapter 5 */

// Creating an Interface
interface Employee {
    name: string;
    title: string;
}

interface Manager extends Employee {
    department: string;
    numOfEmployees?: number;    // this is an optional member
    scheduleMeeting: (topic: string) => void;
}


// TypeScript's Structural Type System
// The following object implements the Employee interface
let developer = {
    name: "Mike",
    title: "Accountant",
    age: 23
}
let newEmployee: Employee = developer;
// The above is also referred to as duck typing


// Interfaces don't compile to JavaScript. They are ignored.


// Class Members
// Class members are public by default

class Developer {
    department: string;
    private _title: string;
    #salary: number;    // This is an ECMAScript private field

    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }

    documentRequirements(requirements: string): void {  // notice the absence of the keyword "function"
        console.log(requirements);
    }
}


// Extending a Class
class WebDeveloper extends Developer {
    favouriteEditor: string;
    writeTypescript(): void {
        // write awesome code
    }
}

let webdev: WebDeveloper = new WebDeveloper();
webdev.department = "Software Eng";
webdev.favouriteEditor = "Visual Studio";


// Implementing an Interface
interface Employee2 {
    name: string;
    title: string;
    logID: () => string;
}

class Engineer implements Employee2 {
    name: string;
    title: string;
    hobby: string;   // classes can add properties and functions that are not mentioned in the interface.

    logID() {
        return "This is my Id";
    }

}

// Though not required, it is conventional to store each class and interface in its own file.


// Static Members
// They are accessed from the class directly, not an instance of the class
// Examples are below:
class WebDeveloper2 extends Developer {
    static jobDescription: string = "Build cool things";
    
    static logFavoriteProtocol() {
        console.log("HTTPS, of course!");
    }
    
    logJobDescription(): void {
        console.log(WebDeveloper2.jobDescription);
    }
}

WebDeveloper2.logFavoriteProtocol();



// Constructors
class Developer3 {
    constructor() { // constructors are optional
        console.log("Creating a new developer");
    }
}

class WebDeveloper3 extends Developer3 {
    readonly favouriteEditor: string;   // the "readonly" modifier prevents the value of the property from changing once
                                        // it is set

    constructor(editor: string) {
        super();    // if you class extends some other class and your class has a constructor, then you are required to
                    // call "super()"
        this.favouriteEditor = editor;
    }
}


class Game {
    name: string;
    duration: number;
    playerCount: number;

    constructor(gameName: string, length: number, numOfPlayers: number) {
        this.name = gameName;
        this.duration = length;
        this.playerCount = numOfPlayers;
    }
}

// The above can be rewritten as follows:
class Game2 {    
    
    constructor(public name: string, public duration: number, public playerCount: number) {        
    }
}