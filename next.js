const fs = require('fs')
const l = console.log

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

const words = input.split(',').map(w => w.split('').reverse().join('').replace('\n', '').trim()).sort()

console.log(words)
