// // [8,3,10,1,6,null,14,null,null,4,7,13];

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// function maxAncestorDiff(root: TreeNode) {
//   if (!root) return 0;

//   function runNode(root: TreeNode | null, arrayToReduce: number[]) {
//     if (root) {
//       if (root.val !== undefined && root.val !== null) {
//         arrayToReduce.push(root.val);
//       }

//       const left = root.left;
//       const right = root.right;

//       if (left) {
//         runNode(left, arrayToReduce);
//       }

//       if (right) {
//         runNode(right, arrayToReduce);
//       }
//     }
//   }

//   function getMaxAncestor(arrayToReduce: number[]) {
//     let total = 0;
//     arrayToReduce.forEach((value) => {
//       arrayToReduce.forEach((secondValue) => {
//         const diff = Math.abs(value - secondValue);
//         if (total < diff) total = diff;
//       });
//     });

//     return total;
//   }

//   const leftArray = [];
//   const rightArray = [];

//   runNode(root.left, leftArray);
//   runNode(root.right, rightArray);

//   let maxAncestorLeft = getMaxAncestor(leftArray);
//   let maxAncestorRight = getMaxAncestor(rightArray);

//   return maxAncestorLeft > maxAncestorRight
//     ? maxAncestorLeft
//     : maxAncestorRight;
// }

// const result = maxAncestorDiff(
//   new TreeNode(
//     0,
//     new TreeNode(1, new TreeNode(0, new TreeNode(0)), new TreeNode(0)),
//     new TreeNode(12, new TreeNode(31, new TreeNode(21)), new TreeNode(150))
//   )
// );

// console.log(result);
