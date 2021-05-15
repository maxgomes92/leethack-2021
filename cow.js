const fs = require('fs')
const l = console.log

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).replace('\n', '')

const obj = JSON.parse(JSON.parse(input))

const i = Object.values(obj).reduce((acc, cur) => acc + cur, 0)

l(i)
