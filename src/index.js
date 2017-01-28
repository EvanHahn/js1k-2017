/*
 * A = adjectives
 * C = container type
 * O = owner (proper name)
 * P = properties
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

b.innerHTML += '<h1 id=t></h1>'

a.style.margin = '0 auto'
b.style.cssText = 'background:#003;color:#fff;text-align:center'
t.style.cssText = 'user-select:none'

// sample from an array, or return undefined

s = (arr) => arr[Math.floor(Math.random() * (arr.length + 1))]

// define render function

r = (result = '', container, owner, adjective, property) => {
  // canvas drawing

  // TODO

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
