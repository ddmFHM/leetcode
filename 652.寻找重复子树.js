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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {

};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/


let N5 = new TreeNode(4)
let N2 = new TreeNode(2, N5)

let N6 = new TreeNode(4)
let N7 = new TreeNode(4)
let N3 = new TreeNode(2, N7)
let N4 = new TreeNode(3, N3, N6)

let N1 = new TreeNode(1, N2, N4)

var midPrint = function (root) {
  if (root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}

var findDuplicateSubtrees = function (root) {
  let map = {}
  let res = []
  createRepeatTreeHashMap(root, map, res)
  return res
};

var createRepeatTreeHashMap = function (root, map, res) {
  if (root == null) return '#'
  let left = createRepeatTreeHashMap(root.left, map, res)
  let right = createRepeatTreeHashMap(root.right, map, res)
  // 后序遍历
  var str = left + ',' + right + ',' + root.val
  if (!map[str]) {
    map[str] = 1
  } else {
    if (map[str] == 1) {
      res.push(root)
    }
    map[str] += 1
  }
  return str
}

/**
 * 思路
 * 1.
 * 要知道是否有重复子树，就需要知道自己的子树长什么样子
 * 要知道自己子树长啥样，就要先知道左子树，右子树的样子，（后序遍历，先左后右再根）
 * 所以要在后序遍历的地方知道左右子树的样子
 * 2.
 * 要记录左右子树的样子，可以借助序列化二叉树
 * 没有的子树用一个符号代替如#，用另一个符号拼接左右子树，最后拼接上自己即可得到以自己为根节点的二叉树的形状
 * 3.
 * 判断重复次数（此题只需要重复）
 * 使用hash表记录，以序列化的字符串为键，若出现重复的则hash表对应的键加1
 * 使用一个res数组记录结果，存入hash表示，判断若存在则存入res，若不存在则hash表内该键初始化为1
 */
