/** 
 Você tem nmoedas e quer construir uma escada com elas. A escada consiste em kfileiras onde a fileira contém exatamente moedas. A última fila da escada pode estar incompleta.ithi

Dado o número inteiro n, retorne o número de linhas completas da escada que você construirá .
Entrada: n = 5
Saída: 2
Explicação: Como a 3ª linha está incompleta, retornamos 2.

Entrada: n = 8
Saída: 3
Explicação: Como a 4ª linha está incompleta, retornamos 3.
*/

/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n) {
  let restCoins = n;
  let lastFloor = 0;
  let rows = 0;
  for (let i = 0; i < n; i++) {
    restCoins -= i + 1;

    if (restCoins < 0) break;

    const nextFloor = lastFloor++;

    if (nextFloor > restCoins) break;

    lastFloor = nextFloor;

    rows++;
  }

  return rows;
}

arrangeCoins(8);
