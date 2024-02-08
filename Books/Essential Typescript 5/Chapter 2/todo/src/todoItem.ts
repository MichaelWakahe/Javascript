export class TodoItem {
    
    constructor(public id: number, 
                public task: string, 
                public complete: boolean = false) {
        // no statements required
    }

    /*
    The above constructor could have been written as follows:

    public id: number;
    public task: string;
    public complete: boolean = false;

    public constructor(id: number, task: string,
            complete: boolean = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    */

    printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete 
            ? "\t(complete)": ""}`);        
    }
}
