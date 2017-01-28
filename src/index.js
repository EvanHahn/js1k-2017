/*
 * A = adjectives
 * C = container type
 * O = owner (proper name)
 * P = properties
 *
 * other capital letters are temporary
 *
 * a = <canvas>
 * b = <body>
 * c = canvas context 2D
 * d = document
 * r = render function
 * s = function to sample from an array
 * t = <h1> for potion title
 * u = update function
 */

/* eslint-disable no-undef */

// define constants

A = [
  'delicious',
  'gross',
  'naked',
  'oily',
  'pleasant',
  'vile'
]
O = [
  'dragon',
  'fartbane',
  'the dark lord',
  'witch',
  'warlock',
  'hag',
  'sorcerer',
  'wizard'
]
C = [
  'ale',
  'beverage',
  'brew',
  'drink',
  'elixir',
  'juice',
  'poison',
  'potion',
  'serum',
  'tonic'
]
P = [
  'anger',
  'death',
  'englargement',
  'hair',
  'illness',
  'invisibility',
  'laughter',
  'life',
  'popularity',
  'night vision',
  'shrinking',
  'sleep',
  'speed'
]

// set up CSS and DOM

b.appendChild(t = document.createElement('h1'))

b.style.cssText = 'background:#003;color:#fff;text-align:center'
t.style.cssText = 'user-select:none'

// sample from an array, or return undefined

s = (arr) => arr[Math.floor(Math.random() * (arr.length + 1))]

// define update function

u = (result = '', container, owner, adjective, property) => {
  // canvas drawing

  S = (Math.random() * 100) + 100 // bottle radius
  M = (Math.random() * S / 2) + 25  // width of the neck
  H = (Math.random() * 80) + 50  // height of the next
  K = new Date()  // when was this created?
  Z = Math.floor(Math.random() * 16777215).toString(16)  // color
  while (Z.length < 6) { Z = '0' + Z }

  // text rendering

  while (!container) { container = s(C) }

  while (!owner && !adjective && !property) {
    owner = s(O)
    adjective = s(A)
    property = s(P)
  }

  if (owner) {
    result = owner + "'s "
  }

  if (property) {
    if (adjective) {
      property = adjective + ' ' + property
    }

    if (Math.random() < 0.5) {
      result += container + ' of ' + property
    } else {
      result += property + ' ' + container
    }
  } else {
    if (adjective) {
      result += adjective + ' '
    }
    result += container
  }

  t.innerHTML = result
}

u()
b.onclick = () => u()

// render function

r = (time) => {
  c.clearRect(0, 0, 500, 500)

  c.fillStyle = '#ffffff'

  c.beginPath()
  c.arc(250, 500 - S, S, 0, 7)
  c.fill()

  c.fillRect(250 - M / 2, 500 - S * 2 - H / 2, M, H)

  c.fillRect(250 - (M / 2) - 10, 498 - S * 2 - H / 2, M + 20, -20)

  c.fillStyle = '#' + Z

  let jostle = Math.max(0, (2 + (K - new Date()) / 1000) * 0.2)
  let oscillation = Math.sin(time / 200) * jostle

  c.beginPath()
  c.arc(250, 500 - S, S * 0.88, oscillation, Math.PI + oscillation)
  c.fill()

  requestAnimationFrame(r)
}
requestAnimationFrame(r)
