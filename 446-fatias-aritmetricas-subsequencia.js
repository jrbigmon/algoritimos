/**
 * @param {number[]} nums
 * @return {number}
 */
function numberOfArithmeticSlices(nums) {
  if (nums?.length < 3) return 0;

  if (nums?.length === 3) return 1;

  let count = 1;

  nums?.forEach((num, index) => {
    const hasLeft = index > 0;
    const hasRight = nums.findLastIndex((num) => num) !== index;
  });

  return count;
}
