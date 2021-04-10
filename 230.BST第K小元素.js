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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// var N2 = new TreeNode(2)
// var N1 = new TreeNode(1, null, N2)
// var N4 = new TreeNode(4)
// var N3 = new TreeNode(3, N1, N4)

var N1 = new TreeNode(1)
var N2 = new TreeNode(2, N1)
var N4 = new TreeNode(4)
var N3 = new TreeNode(3, N2, N4)
var N6 = new TreeNode(6)
var N5 = new TreeNode(5, N3, N6)

var midPrint = function(root) {
  if(root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}

//midPrint(N3)

/**
 * 思路：
 * BST是二叉搜索树
 * BST的中序遍历就是二叉树的投影
 * 刚好为该二叉树的升序
 * 如果想要二叉树的倒序
 * 就可以先递归右节点，再递归左节点
 */


/**
 * 得到BST第K小的元素值
 * @param {TreeNode} root BST根节点
 * @param {Number} k 
 * @return {Number} 元素值 
 */
var kthSmallest = function (root, k) {
  var arr = []
  TreeToArray(root, arr)
  return arr[k - 1]
};

var TreeToArray = function(root, arr) {
  if(root == null) return null
  TreeToArray(root.left, arr)
  arr.push(root)
  TreeToArray(root.right, arr)
}

// console.log(kthSmallest(N1, 3))

