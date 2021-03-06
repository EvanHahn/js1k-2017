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
  'pleasant',
  'vile',
  'dark'
]
O = [
  'dragon',
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
  'mixture',
  'elixir',
  'juice',
  'poison',
  'potion',
  'serum',
  'tonic'
]
P = [
  'anger',
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

b.style.background = '#003'
t.style.cssText = 'user-select:none;color:#fff;text-align:center'

// sample from an array, or return undefined

s = (arr) => arr[(Math.random() * (arr.length + 1)) | 0]

// define update function

u = (result = '', container, owner, adjective, property) => {
  // canvas drawing

  S = (Math.random() + 1) * 100 // bottle radius
  M = (Math.random() * S / 2) + 25  // width of the neck
  H = (Math.random() * 80) + 80  // height of the neck
  K = new Date()  // when was this created?
  Z = (Math.random() * 16777215 | 0).toString(16)  // color
  while (Z.length < 6) { Z = '0' + Z }

  // text rendering

  while (!container) { container = s(C) }

  while (!adjective && !property) {
    owner = s(O)
    adjective = s(A)
    property = s(P)
  }

  if (owner && !(adjective && property)) {
    result = owner + "'s "
  }

  if (adjective) {
    result += adjective + ' '
  }

  if (property) {
    result += property + ' '
  }

  t.innerHTML = result + container
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

  Q = Math.sin(time / 200) * (Math.max(0, (2 + (K - new Date()) / 1000) * 0.2))

  c.beginPath()
  c.arc(250, 500 - S, S * 0.88, Q, Math.PI + Q)
  c.fill()

  requestAnimationFrame(r)
}
requestAnimationFrame(r)
