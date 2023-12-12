import { Person, hireDeveloper } from "./person";
import { StaffMember as CoWorker } from "./person";
import * as HR from "./person";

let human: Person;
let emp: CoWorker = new CoWorker();
HR.hireDeveloper();


// Examples of relative imports
import { Laptop } from "/hardware";
import { Developer } from "./person";
import { NewHire } from "../HR/recruiting";

// Examples of non-relative imports
import * as $ from "jquery";
import * as lodash from "lodash";


// Module resolution strategies
// tsc --moduleResolution Classic | Node

// Type declaration files have the file extension ".d.ts"