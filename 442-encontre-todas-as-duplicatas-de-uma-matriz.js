/*
Dado um array inteiro numsde comprimento nonde todos os inteiros numsestão no intervalo [1, n]e cada inteiro aparece uma ou duas vezes , retorne um array de todos os inteiros que aparecem duas vezes .

Você deve escrever um algoritmo que seja executado no  O(n) tempo e use apenas espaço extra constante.

Exemplo 1:

Entrada: nums = [4,3,2,7,8,2,3,1]
 Saída: [2,3]
Exemplo 2:

Entrada: nums = [1,1,2]
 Saída: [1]
Exemplo 3:

Entrada: nums = [1]
 Saída: []
 

Restrições:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Cada elemento numsaparece uma ou duas vezes .
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
  let duplicates = new Map();
  let numsMap = new Map();

  nums.forEach((num) => {
    if (numsMap.get(num)) duplicates.set(num, num);
    else numsMap.set(num, num);
  });

  return Array.from(duplicates.values());
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
