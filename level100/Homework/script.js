// console.log("hi")
// setTimeout(() => {
//   console.log("5 წამის შემდეგ მოხდა ეს ფუნქცია")
// }, 5000)
//    setTimeout(1 პარამეტრი არის cancelIdleCallback() , დრო თუ რამდენ ხანში იქნება ქოლბექი)

const კატა = () => {
    console.log("მიაუ მიაუ")
}
const ნოდო = () => {
    console.log("ვინ შეჭამა ჩემი თევზი!")
}

// კატა();
// ნოდო();

setTimeout(კატა, 5000); // api1
setTimeout(ნოდო, 1000); // api2