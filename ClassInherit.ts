class Animal{
    move(distanceInMeter : number = 0){
        console.log(`Animal moved ${distanceInMeter} metre.`);
    }
}

class Cat extends Animal{
    bark(){
        console.log("Meow Meow!!");
    }
}

const cat = new Cat();
cat.move();
cat.bark();
