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
 * @return {TreeNode}
 */
var invertTree = function(root) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = left || null
  this.right = right || null
}

var N1 = new TreeNode(1)
var N3 = new TreeNode(3)
var N2 = new TreeNode(2, N1, N3)
var N6 = new TreeNode(6)
var N9 = new TreeNode(9)
var N7 = new TreeNode(7, N6, N9)
var N4 = new TreeNode(4, N2, N7)

/**
 * 中序遍历打印二叉树
 * @param {TreeNode}} root 二叉树根节点
 * @returns 
 */
var midPrint = function(root) {
  if(root == null) return root
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}


/**
 * 实现思路：
 * 1. 翻转根节点左右节点，递归翻转左子树左右节点，递归翻转右子树左右节点
 * 2. 即前序遍历处交换左右节点（后序遍历也可，中序遍历不可）
 */

/**
 * 翻转二叉树
 * @param {TreeNode}} root 
 */
var invertTree = function(root) {
  if(root == null) return root
  // 前序遍历代码处
  var tmp = root.left
  root.left = root.right
  root.right = tmp
  invertTree(root.left)
  // 中序遍历代码处
  invertTree(root.right)
  // 后序遍历代码处
  return root
}

midPrint(invertTree(N4))