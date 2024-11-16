let obj = {
    name: 'dato',
    lastname: 'bezhanidze',
    address: 'Batumi',
    height: 2.80,
    bicepSizeCm: 50 + 'cm',
}

obj.lastname = 'bezhanidze - changed value'

delete obj.height
delete obj.bicepSizeCm

console.log(obj);