/**
 * Permite tomar una carta
 * @param {string[]} deck es un arreglo de string
 * @returns {string} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) throw new Error('No hay cartas en el deck')
  return deck.pop()
}