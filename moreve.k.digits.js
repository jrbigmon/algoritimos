function removeKDigits(num, k) {
  const indexK = num.indexOf(String(k));

  if (indexK === -1) {
    return "0";
  }

  const newArrayOfIndex = [indexK - 1, indexK, indexK + 1];

  const stringFiltered = num
    ?.split("")
    ?.filter((_, index) => !newArrayOfIndex.includes(index))
    ?.join("");

  const valueConvertedToNumber = Number(stringFiltered);

  return valueConvertedToNumber.toString();
}

console.log(removeKDigits("", 3));
console.log(removeKDigits("10200", 1));
console.log(removeKDigits("10", 2));
