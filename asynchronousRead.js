const { convertCsv } = require('./csv.parse')
const { readFile } = require("fs")

readFile("./data/pulitzer-data.csv", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    
    const vals = convertCsv(data)

    console.table(vals)
})