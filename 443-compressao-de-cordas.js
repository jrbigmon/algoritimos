/*
Dado um array de caracteres chars, compacte-o usando o seguinte algoritmo:

Comece com uma string vazia s. Para cada grupo de caracteres repetidos consecutivos em chars:

Se o comprimento do grupo for 1, anexe o caractere a s.
Caso contrário, acrescente o caractere seguido do comprimento do grupo.
A string compactada s não deve ser retornada separadamente , mas sim armazenada na matriz de caracteres de entradachars . Observe que comprimentos de grupo maiores 10ou maiores serão divididos em vários caracteres em chars.

Depois de modificar a matriz de entrada, retorne o novo comprimento da matriz .

Você deve escrever um algoritmo que use apenas espaço extra constante.

 

Exemplo 1:

Entrada: chars = ["a","a","b","b","c","c","c"]
 Saída: Retorna 6, e os primeiros 6 caracteres da matriz de entrada devem ser: ["a","2","b","2","c","3"]
 Explicação: Os grupos são "aa", "bb" e "ccc". Isso é compactado para "a2b2c3".
Exemplo 2:

Entrada: chars = ["a"]
 Saída: Retorna 1, e o primeiro caractere do array de entrada deve ser: ["a"]
 Explicação: O único grupo é "a", que permanece descompactado por ser um único caractere.
Exemplo 3:

Entrada: caracteres = ["a","b","b","b","b","b","b","b","b","b","b"," b","b"]
 Saída: Retorna 4, e os primeiros 4 caracteres da matriz de entrada devem ser: ["a","b","1","2"].
 Explicação: Os grupos são "a" e "bbbbbbbbbbbb". Isso é compactado para "ab12".
 

Restrições:

1 <= chars.length <= 2000
chars[i]é uma letra inglesa minúscula, uma letra maiúscula, um dígito ou um símbolo inglês.
*/

/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
  if (chars.length > 2000)
    throw new Error("Chars Length must be less than 2000");

  const charsDuplicated = new Map();

  chars?.forEach((char) => {
    char = char.trim();

    const charsFound = chars?.filter(
      (charToFound) => charToFound?.trim() === char
    );

    const charFoundedCount =
      charsFound?.length > 1
        ? [char, ...String(charsFound?.length).split("")]
        : [char];

    charsDuplicated.set(char, charFoundedCount);
  });

  return Array.from(charsDuplicated.values()).flat();
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", " b", "b"])
);
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
