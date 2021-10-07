let fs = require('fs')
let limit = 60 * 1000, start = new Date().getTime(), res = []

const run = (numLimit = Infinity) => {
  let next = 1000, cancelled = false
  for (let i = 2; res.length < numLimit; i++) { 
    if (cancelled) break
    let found = true
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      let now = new Date().getTime() // time handling
      if (now - start > next) { // prints every second
        console.log(next / 1000 + ' - ' + res[res.length-1])
        next += 1000
      }
      if (now - start > limit) {
        cancelled = true
        break 
      }// breaks at the limit, i.e., 60

      if (i % j == 0) {
        found = false
        break
      }
    }
    if (found) res.push(i) // adds to array for sanity check
  }
  return res
}

// console.log(JSON.stringify(run(20)) == fs.readFileSync('./firstTwenty.json', 'utf8'))
run()
