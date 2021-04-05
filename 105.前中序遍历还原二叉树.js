/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

};

var preorder = [3, 9, 20, 15, 7] // 前序遍历
var inorder = [9, 3, 15, 20, 7] // 中序遍历

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

/**
 * 思路
 * 1. 找出前序遍历第一个为根节点
 * 2. 中序遍历根节点 左边的数组为左节点 右边的数组为右节点
 * 3. 递归
 * 4. base case: 传入数组长度为空
 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var midPrint = function(root) {
  if(root == null) return
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}

var buildTree = function (preorder, inorder) {
  if(preorder.length == 0 || inorder.length == 0) return null
  let rootVal = preorder[0]
  let rootIndex = 0
  for (let i = 0; i < inorder.length; i++) {
    if(inorder[i] == rootVal) {
      rootIndex = i
    }
  }
  var root = new TreeNode(rootVal)
  root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
  root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))
  return root
};

midPrint(buildTree(preorder, inorder))