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
 * @return {boolean}
 */
var isValidBST = function (root) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

/**
 * BST性质
 * 1. 左子树所有节点都比根节点小 右子树的所有节点都比根节点大
 * 2. 左右子树也为BST
 * 思路
 * 1. 看看自己左右子树是否满足性质1
 * 2. 递归左子树、右子树判断
 * 3. 加上限制条件，左右子树还要满足不大于或不小于根节点的值
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var N1 = new TreeNode(1)
var N3 = new TreeNode(3)
var N2 = new TreeNode(2, N1, N3)

var midPrint = function(root) {
  if(root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}


var isValidBST = function (root) {
  return helper(root, null, null)
};

var helper = function(root, min, max) {
  if(root == null) return true
  if(max != null && root.val >= max.val) {
    return false
  }
  if(min != null && root.val <= min.val) {
    return false
  }
  return helper(root.left, min, root) && helper(root.right, root, max)
}

console.log(isValidBST(N2))