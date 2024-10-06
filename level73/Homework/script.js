function carBrand(model, color, condition, gearBox) {
    this.model = model;
    this.color = color;
    this.condition = condition;
    this.gearBox = gearBox;
}


let car1 = new carBrand('Mercedes', 'black', 'as new', 'mechanic')

let car2 = new carBrand('Nissan', 'grey', 'as new', 'mechanic')

console.log(car1);
console.log(car2);