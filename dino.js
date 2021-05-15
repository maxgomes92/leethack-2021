const fs = require('fs')
const l = console.log

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })


const dinos = ['🦕', '🐊', '🤖']

const dink = '(0)v(0)'

const codes = input.split(/🦕|🐊|🤖/gm)

const single = {}

codes.forEach(c => {
  if (single[c]) {
    single[c]++
  } else {
    single[c] = 1
  }
})

l(single)
