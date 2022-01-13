const { writeFile } = require('fs')

const rand = Math.floor(Math.random() * 100)

writeFile('./data/app.log', 
    'writing some stuff ' + rand,
    {flag: "wx"}, 
    err => {
    err ? console.log(err) : console.log("file written")
})