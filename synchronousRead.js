const { convertCsv } = require('./csv.parse')
const { readFileSync } = require("fs")

try {
    const data = readFileSync("./data/pulitzer-data.csv", "utf-8")
    console.table(convertCsv(data))
}
catch (err) {
    console.log(err)
    return
}