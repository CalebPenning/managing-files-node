const { writeFile } = require('fs')

writeFile('./data/app.log', `Writing some stuff ${Math.floor(Math.random() * 100)} edition \n`, 
    {flag: "a"},
    err => {
    err ? console.log(err) : console.log("file written")
})