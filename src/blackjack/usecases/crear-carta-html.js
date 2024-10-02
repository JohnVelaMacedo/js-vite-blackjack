/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement} Imagen de retorno
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("La carta es obligatorio")
  
  const imgCarta = document.createElement('img')
  imgCarta.className = 'carta'
  imgCarta.src = `assets/cartas/${carta}.png`
  return imgCarta
}
