var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    Employee.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Employee;
}());
var employee = new Employee('Kaushal', 'Ghimire');
console.log(employee);
