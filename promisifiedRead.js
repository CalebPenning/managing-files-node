const { convertCsv } = require('./csv.parse')
const fs = require('fs')
const { promisify } = require('util')

const promiseReadFile = promisify(fs.readFile)

promiseReadFile('./data/pulitzer-data.csv', 'utf-8')
    .then(data => console.table(convertCsv(data)))
    .catch(err => console.log(`File error: ${err}`))


const awaitRead = async () => {
    const data = await promiseReadFile('./data/pulitzer-data.csv', 'utf-8')
    console.table(convertCsv(data))
}
