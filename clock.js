const fs = require('fs')
const l = console.log

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).replace(/\n/gm, '')

// :01:01:01.001,ieHours:Minutes:Seconds.Milliseconds.

const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  ms: 0,
}

input.split(',').forEach((el) => {
  // s
  if (/-{0,1}\d+s$/.test(el)) {
    time.seconds += parseInt(el.replace('s', ''))
  }

  // min
  if (/-{0,1}\d+m$/.test(el)) {
    time.minutes += parseInt(el.replace('m', ''))
  }

  // ms
  if (/-{0,1}\d+ms$/.test(el)) {
    time.ms += parseInt(el.replace('ms', ''))
  }

  // h
  if (/-{0,1}\d+h$/.test(el)) {
    time.hours += parseInt(el.replace('h', ''))
  }
})

time.seconds += Math.floor(time.ms / 1000)
time.ms = time.ms % 1000

time.minutes += Math.floor(time.seconds / 60)
time.seconds = time.seconds % 60

time.hours += Math.floor(time.minutes / 60)
time.minutes = time.minutes % 60

// ieHours:Minutes:Seconds.Milliseconds
console.log(`${time.hours}:${time.minutes}:${time.seconds}:${time.ms}`)
