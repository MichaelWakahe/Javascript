export interface Person { }

export function hireDeveloper(): void { }

// "default" specifies that this will be the default item exported from this module
// If the importing module didn't specify what to import, then it is this class that would be imported
export default class Employee { }

class Manager { }   // not accessible outside the module - they are private to this module


// An alternative to exporting items one at a time is below:
//export { Person, hireDeveloper, Employee as StaffMember };
export { Employee as StaffMember };
// In the above example, this module will see class "Employee" and external modules will see "StaffMember"