// შექმენით ფუნქცია სახელად manualFilter რომელსაც პირველი გადაეცემა ფუნქცია და მეორე მასივი, ამ ფუნქციაში უნდა გამოიყენოთ for ციკლი და გადაუარეთ გადმოცემულ მასივს, გამოიყენეთ if და გამოიძახეთ გადმოცემული ფუნქცია ამჟამინდელ ინდექსზე მდგომი მნიშნელობით, თუ დაბრუნებული მნიშნელობა არის true დაამატეთ ახალ მასივში და თუ არის false არ დაამატოთ ახალ მასივში, როცა მორჩება for ციკლის მუშაობა დააბრუნეთ ახალი მასივი=, გადაცემული ფუნქციიდან აუცილებლად უნდა ბრუნდებოეს boolean მნიშვნელობა, და უნდა იღებდეს ერთ მნიშნელობას გადაცემულ ფუნქციაში რას შეამოწმებთ თქვენზეა დამოკიდებული

function manualFilter(filter) {
    let newArray = [];
    for (let i = 0; i < filter.length; i++) {
        if (filter[i] > 5) {
            newArray.push(filter[i]);
        }
    }
    return newArray;
}