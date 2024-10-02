/**
 * Obtener el valor de la carta
 * @param {string} carta 
 * @returns {number} valor de la carta
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1)
  if (isNaN(valor)) {
    return valor === 'A' ? 11 : 10
  }
  return +valor
}