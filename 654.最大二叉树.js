/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {

};

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

var nums = [3, 2, 1, 6, 0, 5]

var midPrint = function(root) {
  if(root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}

/**
 * 实现思路
 * 1. 找出最大值
 * 2. 最大值为根节点
 * 3. 左子树递归调用，参数为最大值左边的数组
 * 4. 右子树递归调用，参数为最大值右边的数组
 * 5. base case: 当数组长度为0即结束
 */

/**
 * 给定一个不含重复元素的整数数组 nums一个以此数组直接递归构建的 最大二叉树
 * @param {Array} nums 
 * @returns {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if(nums.length == 0) return
  let index = 0, max = 0
  for (let i = 0; i < nums.length; i++) {
    if(max < nums[i]) {
      index = i
      max = nums[i]
    }
  }
  let root = new TreeNode(max)
  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index + 1, nums.length))
  return root
}

midPrint(constructMaximumBinaryTree(nums))