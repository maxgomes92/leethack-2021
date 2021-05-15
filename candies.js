const axios = require('axios')
const fs = require('fs')
const l = console.log

const max = 'http://game.leethack.ninja/challenge/several-lean-xraytetra/kiosk/'
const bernardo = 'http://game.leethack.ninja/challenge/acrobatic-bewitched-cleanerwrasse/kiosk/'
const api = max

// ffbaab19-c6d0-4dc1-bfd5-4e15335147bc,Snockers
const getAll = () => axios.get(`${api}getAll`)

// 1294,Snockers,candy,2,below
const getId = (id) => axios.get(`${api}get/${id}`)
const postId = (id, newCount) => axios.post(`${api}update/${id}/${newCount}`, {})

// 1294,Snockers,candy,100,above
// below|within|above

async function main () {
  const { data: all } = await getAll()

  const items = all.split('\n').reduce((acc, item) => {
    const [id, name] = item.split(',')
    acc.push({id, name})
    return acc
  }, [])

  for (item of items) {
    let increment = 5000
    l(item.id, 'Get id')
    let { data } = await getId(item.id)
    data = data.split(',')
    let previousStatus = ''

    do {
      item.amount = parseInt(data[3])
      item.status = data[4]

      if (previousStatus && previousStatus !== item.status) {
        increment = Math.floor(increment / 2)
        l(item.id, 'New increment', increment)
      }

      if (item.status === 'below') {
        const amount = Math.min(item.amount + increment, 10000)
        l(item.id, 'Below', amount)
        const resp = await postId(item.id, amount)
        data = resp.data.split(',')
      }

      if (item.status === 'above') {
        const amount = Math.max(item.amount - increment, 0)
        l(item.id, 'Above', amount)
        const resp = await postId(item.id, amount)
        data = resp.data.split(',')
      }

      previousStatus = item.status
    } while (item.status !== 'within')

    l('NEXT')
  }

  l('Fim')
  const {data: newAll} = await getAll()
  l(newAll)
}

main()
