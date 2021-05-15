const fs = require('fs')
const l = console.log

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).replace('\n', '')

// like digits only
// sum all digits

const regex = /(\d)/gm

let r, total = 0
do {
  r = regex.exec(input)

  if (r) total += parseInt(r)
} while (r)

l(total)
