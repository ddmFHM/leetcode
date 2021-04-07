function TreeNode(val, left, right) {
  this.val = val || null
  this.left = left || null
  this.right = right || null
}

let N1 = new TreeNode(1)
let N2 = new TreeNode(2)
let N3 = new TreeNode(3)
let N4 = new TreeNode(4)
let N5 = new TreeNode(5)
let N6 = new TreeNode(6)

N1.left = N2
N1.right = N3
N2.left = N4
N2.right = N5
N3.right = N6

var midPrint = function(root) {
  if(root == null) return null
  midPrint(root.left)
  console.log(root.val)
  midPrint(root.right)
}

// midPrint(N1)

/**
 * 序列化二叉树
 * @param {TreeNode} root 二叉树根节点
 * @return {String}
 */
var serializeTree = function(root) {
  if(root == null) return '#'
  let leftStr = serializeTree(root.left)
  let rightStr = serializeTree(root.right)
  // 后序遍历位置
  let str = `${leftStr},${rightStr},${root.val}`
  return str
}

console.log(serializeTree(N1))