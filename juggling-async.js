//I COULDN'T SOLVE THIS CHALLENGE. YOU MAY ASK "THEN HOW DID YOU GET THE OFFICIAL SOLUTION ?"
//MY "SOLUTION" SOLVED THE CHALLENGE BY CHANCE AND I COULDN'T COME UP WITH ANOTHER SOLUTION
//THIS IS THE OFFICIAL SOLUTION NOT MINE !

const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
    for (let i = 0; i < 3; i++) {
    console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
        return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
        printResults()
        }
    }))
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}
