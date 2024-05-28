// [8,3,10,1,6,null,14,null,null,4,7,13];

class TreeNode {
  val;
  left;
  right;

  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function makeTreeNodes() {
  const treeNodes = [];

  let lastIndexFromNode = 1;
  root.forEach((val) => {
    if (val) {
      const node = new TreeNode(
        val,
        root[lastIndexFromNode++],
        root[lastIndexFromNode++]
      );

      treeNodes.push(node);
    }
  });
}

function maxAncestorDiff(root) {
  if (!root) return 0;

  function runNode(root, arrayToReduce) {
    if (root) {
      if (root.val !== undefined && root.val !== null) {
        arrayToReduce.push(root.val);
      }

      const leftArray = [];
      const rightArray = [];

      const left = root.left;
      const right = root.right;

      if (left) {
        runNode(left, leftArray);
      }

      if (right) {
        runNode(right, rightArray);
      }

      arrayToReduce.push(leftArray, rightArray);
    }
  }

  function getMaxAncestor(arrayToReduce) {
    let total = 0;
    arrayToReduce.forEach((value) => {
      arrayToReduce.forEach((secondValue) => {
        const diff = Number.parseInt(value - secondValue);
        if (total < diff) total = diff;
      });
    });

    return total;
  }

  const leftArray = [root.val];
  const rightArray = [root.val];

  runNode(root.left, leftArray);
  runNode(root.right, rightArray);

  console.log(leftArray);
  console.log(rightArray);

  // const maxAncestorLeft = getMaxAncestor(leftArray);
  // const maxAncestorRight = getMaxAncestor(rightArray);

  // console.log(maxAncestorLeft);
  // console.log(maxAncestorRight);

  // return maxAncestorLeft > maxAncestorRight
  //   ? maxAncestorLeft
  //   : maxAncestorRight;
}

const case1 = new TreeNode(
  8,
  new TreeNode(
    3,
    new TreeNode(1),
    new TreeNode(6, new TreeNode(4), new TreeNode(7))
  ),

  new TreeNode(10, null, new TreeNode(14, new TreeNode(13)))
);

const case2 = new TreeNode(
  2,
  new TreeNode(4, new TreeNode(1, new TreeNode(6))),

  new TreeNode(3, new TreeNode(0), new TreeNode(5, null, new TreeNode(7)))
);

const result = maxAncestorDiff(case2);

// console.log(result);
