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
 var convertBST = function(root) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var N0 = new TreeNode(0)
var N3 = new TreeNode(3)
var N2 = new TreeNode(2, null, N3)
var N1 = new TreeNode(1, N0, N2)
var N5 = new TreeNode(5)
var N8 = new TreeNode(8)
var N7 = new TreeNode(7, null, N8)
var N6 = new TreeNode(6, N5, N7)
var N4 = new TreeNode(4, N1, N6)

var midPrint = function(root) {
  if(root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}

/*

思路：
1. BST
2. BST 中序遍历先递归右节点再递归左节点可得倒序排序的二叉树值
3. 累加树的 原节点值 等于 >= 该节点的所有值的和
4. 倒序的话每个节点值加上前一个节点即可

*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var convertBST = function(root) {
  var res = 0
  var descTreeVal = function(root) {
    if(root == null) return null
    descTreeVal(root.right, res)
    root.val += res
    res = root.val
    descTreeVal(root.left, res)
    return root
  }
  return descTreeVal(root)
};

console.log(convertBST(N4))