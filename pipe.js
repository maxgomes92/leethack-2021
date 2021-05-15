const fs = require('fs')
const l = console.log

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).replace('\n', '')

const total = input.split('').reduce((acc, cur) => {
  if (cur === '|') {
    return acc + 1
  }
  return acc
},0)

console.log(total)
