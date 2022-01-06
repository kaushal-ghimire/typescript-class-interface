class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello " + this.greeting;
    }
}

let greet = new Greeter("Bikash, are you fine!!");


console.log(greet.greet());