/*
 * A = adjectives
 * P = potion types
 * T = properties
 * O = owner (proper name)
 *
 * a = <canvas>
 * b = <body>
 * c = canvas context
 * d = document
 * r = render function
 * s = sample from an array (which can return undefined)
 * t = <h1> for potion title
 */

/* eslint-disable no-undef */

// define constants

A = [
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
P = [
  'beverage',
  'cure',
  'drink',
  'elixir',
  'potion',
  'tonic'
]
T = [
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
t.style.textTransform = 'uppercase'

// sample from an array, or return undefined

s = (arr) => arr[Math.floor(Math.random() * (arr.length + 1))]

// define render function

r = () => {
  let result = ''

  let type, owner, adjective, property

  while (!type) { type = s(P) }

  while (!owner && !adjective && !property) {
    owner = s(O)
    adjective = s(A)
    property = s(T)
  }

  if (owner) {
    result = owner + "'s "
  }

  if (property) {
    if (adjective) {
      property = adjective + ' ' + property
    }

    if (Math.random() < 0.5) {
      result += type + ' of ' + property
    } else {
      result += property + ' ' + type
    }
  } else {
    if (adjective) {
      result += adjective + ' '
    }
    result += type
  }

  if (result === type) {
    throw new Error('uhg')
  }

  t.innerHTML = result
}
r()
