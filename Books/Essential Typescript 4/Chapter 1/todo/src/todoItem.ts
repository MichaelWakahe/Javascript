export class TodoItem {
    public id: number;
    public task: string;
    public complete: boolean = false;

    public constructor(id: number, task: string, complete: boolean = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    
    // Below is a more compact way of writing the constructor above
    // constructor(public id: number,
    //     public task: string,
    //     public complete: boolean = false) {
    //     // no statements required
    // }

    // The `public` keyword is optional below; Typescript assumes all methods and properties are `public` unless another
    // access level is used.
    // The `public` keyword should however be used in constructors.
    public printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)" : ""}`);
    }
}