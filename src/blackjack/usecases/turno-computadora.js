import { crearCartaHTML, pedirCarta, valorCarta } from './'

/**
 * Turno de la computadora
 * @param {number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {string[]} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios')
  if (!puntosHTML) throw new Error('puntosHTML es necesario')
  if (!deck) throw new Error('El deck es necesario')

  let puntosComputadora = 0
  do {
    const carta = pedirCarta(deck)
    puntosComputadora += puntosComputadora + valorCarta(carta)
    puntosHTML.innerHTML = puntosComputadora

    const imgCarta = crearCartaHTML(carta)
    divCartasComputadora.append(imgCarta)

    if (puntosMinimos > 21) break
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21)

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana ☹️')
    } else if (puntosMinimos > 21) {
      alert('Computadora gana 😁')
    } else if (puntosComputadora > 21) {
      alert('Jugador gana 🥳')
    } else {
      alert('Computadora gana 😁')
    }
  }, 100)
}
