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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = left || null
  this.right = right || null
}

var N3 = new TreeNode(3)
var N4 = new TreeNode(4)
var N2 = new TreeNode(2, N3, N4)
var N6 = new TreeNode(6)
var N5 = new TreeNode(5, null, N6)
var N1 = new TreeNode(1, N2, N5)

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


var flatten = function(root) {
  if(root == null) return null
  var left = flatten(root.left)
  var right = flatten(root.right)
  root.right = left
  root.left = null
  var node = root
  while(node.right != null) {
    node = node.right
  }
  node.right = right
  return root
};

flatten(N1)

midPrint(N1)