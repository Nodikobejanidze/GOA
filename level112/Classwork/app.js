const { readFile, writeFile } = require("fs")

const text = `
    Nodiko yochag !
    gamarjoba batono davit !
`

writeFile("./batono.js", text, (err, res) => {
    if (err) {

        return;
    }
    console.log(res)
})