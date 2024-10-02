/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

import {
  crearCartaHTML,
  crearDeck,
  pedirCarta,
  turnoComputadora,
  valorCarta
} from './usecases'

let deck = []
const tipos = ['C', 'D', 'H', 'S'],
  especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0,
  puntosComputadora = 0

// Referencias del HTML
const btnNuevo = document.querySelector('#btnNuevo'),
  btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener')

const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector(
  '#computadora-cartas'
)
const puntosHTML = document.querySelectorAll('small')

deck = crearDeck(tipos, especiales)

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck)
  puntosJugador += valorCarta(carta)
  puntosHTML[0].innerText = puntosJugador

  const imgCarta = crearCartaHTML(carta)
  divCartasJugador.append(imgCarta)

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste')
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora(
      puntosJugador,
      puntosHTML[1],
      divCartasComputadora,
      deck
    )
  } else if (puntosJugador === 21) {
    console.warn('21, Genial')
    btnPedir.disabled = true
    btnDetener.disabled = true
    turnoComputadora(
      puntosJugador,
      puntosHTML[1],
      divCartasComputadora,
      deck
    )
  }
})

btnDetener.addEventListener('click', () => {
  btnDetener.disabled = true
  btnPedir.disabled = true

  turnoComputadora(
    puntosJugador,
    puntosHTML[1],
    divCartasComputadora,
    deck
  )
})

btnNuevo.addEventListener('click', () => {
  console.clear()
  deck = []
  deck = crearDeck(tipos, especiales)

  puntosJugador = 0
  puntosComputadora = 0

  puntosHTML[0].innerText = 0
  puntosHTML[1].innerText = 0

  divCartasComputadora.innerHTML = ''
  divCartasJugador.innerHTML = ''

  btnDetener.disabled = false
  btnPedir.disabled = false
})
