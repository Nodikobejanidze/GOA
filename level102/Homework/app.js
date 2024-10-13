function* gbGelabarkalaia() {
    let index = 0;
    while (index < 5) {
        yield index++
    }
}

let generator = gbGelabarkalaia();

console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.return())
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)