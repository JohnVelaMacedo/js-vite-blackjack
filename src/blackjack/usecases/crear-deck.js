import _ from 'underscore'

/**
 * Esta función devuelve un arreglo de deck
 * @param {string[]} tiposDeCarta Ejemplo ['C', 'D', 'H', 'S']
 * @param {string[]} tiposEspeciales Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {string[]} retorna un arreglo de deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0) {
    throw new Error(
      'tiposDeCarta es obligatorio como un arreglo de string'
    )
  }

  if (!tiposEspeciales || tiposEspeciales.length === 0) {
    throw new Error(
      'tiposEspeciales es obligatorio como un arreglo de string'
    )
  }

  let deck = []

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo)
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo)
    }
  }
  return _.shuffle(deck)
}
