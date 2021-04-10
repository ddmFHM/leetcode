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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var N1 = new TreeNode(1)
var N3 = new TreeNode(3)
var N2 = new TreeNode(2, N1, N3)

var N7 = new TreeNode(7)

var N4 = new TreeNode(4, N2, N7)

var midPrint = function(root) {
  if(root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}

/**
 * 递归解法
 * @param {TreeNode} root 
 * @param {Number} val 
 * @returns 
 */
var searchBST = function (root, val) {
  if(root == null) return null
  if(root.val == val) return root
  if(root.val > val) {
    return searchBST(root.left, val)
  }
  if(root.val < val) {
    return searchBST(root.right, val)
  }
};

console.log(searchBST(N4, 2))


/**
 * 迭代解法
 * @param {*} root 
 * @param {*} val 
 */
var searchBST = function(root, val) {
  while(root !== null && root.val !== val) {
    if(root.val > val) root = root.left
    else if(root.val < val) root = root.right
  }
  return root
}

console.log(searchBST(N4, 2))