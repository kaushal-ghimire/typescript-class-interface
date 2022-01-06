interface Json{
    toJson() : string;
}


class Employee implements Json{
firstname : string;
lastname : string;

constructor(fname : string , lname : string){
    this.firstname = fname;
    this.lastname = lname;
}

    toJson() : string {
        return JSON.stringify(this);
    }    
    
    }
    let employee = new Employee('Kaushal','Ghimire');
    console.log(employee);