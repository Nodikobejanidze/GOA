class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return ${this.name} makes a sound.;
    }

}
class Cat extends Animal {
     constructor(name, period) {
        super(name)
        this.period = period
     }
     roar(){
        return ${this.name} roars from the ${this.period} period!; 
     }

    }

const Cat = new Cat("T-Rex", "Cretaceous");
console.log(Cat.speak()); 
console.log(Cat.roar());
