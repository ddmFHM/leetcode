/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var N2 = new TreeNode(2)
var N4 = new TreeNode(4)
var N3 = new TreeNode(3, N2, N4)

var N7 = new TreeNode(7)
var N6 = new TreeNode(6, null, N7)

var N5 = new TreeNode(5, N3, N6)


var midPrint = function(root) {
  if(root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}


var deleteNode = function (root, key) {
  if(root == null) return null
  if(root.val == key) {
    if(root.left == null) return root.right
    if(root.right == null) return root.left
    let min = findMinNode(root.right)
    root.val = min.val
    root.right = deleteNode(root.right, min.val)
  }
  if(root.val > key) {
    root.left = deleteNode(root.left, key)
  } else {
    root.right = deleteNode(root.right, key)
  }
  return root
};

var findMinNode = function(root) {
  while(root.left !== null) {
    root = root.left
  }
  return root
}



console.log(deleteNode(N5, 3))