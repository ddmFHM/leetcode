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
var insertIntoBST = function (root, val) {

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
 * 思路
 * 1. 题干：新增节点值与原节点不重复
 * 2. 新节点小于根节点，则新节点应该增加在根节点的左子树上，反之加在右子树上
 * 3. base case：根节点为空时即找到要插入的位置
 *    - 找不到比它更小的值时，就插入在当前根节点左子树上
 *    - 找不到比它更大的值时，就插入在当前根节点右子树上
 */

var insertIntoBST = function (root, val) {
  if(root == null) {
    return new TreeNode(val)
  }
  if(root.val > val) {
    root.left = insertIntoBST(root.left, val)
  }
  if(root.val < val) {
    root.right = insertIntoBST(root.right, val)
  }
  return root
};


console.log(insertIntoBST(N4, 5))

