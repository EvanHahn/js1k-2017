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
  'sam',
  'the dark lord',
  'witch',
  'wizard'
]
C = [
  'beverage',
  'brew',
  'drink',
  'elixir',
  'potion',
  'tonic'
]
P = [
  'beetle',
  'blind',
  'death',
  'illness',
  'sleep',
  'speed'
]

// set up CSS and DOM

b.appendChild(t = document.createElement('h1'))

b.style.cssText = 'background:#003;color:#fff;text-align:center'
t.style.cssText = 'user-select:none'

// sample from an array, or return undefined

s = (arr) => arr[Math.floor(Math.random() * (arr.length + 1))]

// define render function

r = (result = '', container, owner, adjective, property) => {
  // canvas drawing

  S = (Math.random() * 100) + 100 // bottle radius
  M = (Math.random() * S / 2) + 25  // width of the neck
  H = (Math.random() * 80) + 50  // height of the next

  c.fillStyle = '#ffffff'

  c.beginPath()
  c.arc(250, 500 - S, S, 0, 7)
  c.fill()

  c.fillRect(250 - M / 2, 500 - S * 2 - H / 2, M, H)

  c.fillRect(250 - (M / 2) - 10, 500 - S * 2 - H / 2, M + 20, -20)

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

r()
b.onclick = () => r()
