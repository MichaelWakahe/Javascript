import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';


// console.clear();
// console.log("Adam's Todo List");


let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection: TodoCollection = new TodoCollection("Adam", todos);

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
    Quit = "Quit"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    })
} 

promptUser();



console.clear();
console.log(`${collection.userName}'s Todo List `
    + `(${collection.getItemCounts().incomplete} items to do)`);

let newId: number = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);

console.log(JSON.stringify(todoItem));
todoItem.printDetails();

// collection.addTodo(todoItem);
collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());
