/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {

};
var inorder = [9,3,15,20,7] // 中序遍历
var postorder = [9,15,7,20,3] // 后序遍历

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/


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

var buildTree = function(inorder, postorder) {
  if(inorder.length == 0 || postorder.length == 0) return null
  let rootVal = postorder[postorder.length - 1]
  let rootIndex = 0
  for (let i = 0; i < inorder.length; i++) {
    if(inorder[i] == rootVal) {
      rootIndex = i
    }
  }
  let root = new TreeNode(rootVal)
  root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex, postorder.length - 1))
  return root
}

midPrint(buildTree(inorder, postorder))