/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {

};


/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/


function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

var N4 = new Node(4)
var N5 = new Node(5)
var N2 = new Node(2, N4, N5)

var N6 = new Node(6)
var N7 = new Node(7)
var N3 = new Node(3, N6, N7)

var N1 = new Node(1, N2, N3)

var breathPrint = function(root) {
  var res = []
  var tmp = []
  var node = null
  tmp.push(root)
  while(tmp.length) {
    node = tmp.shift()
    res.push(node)
    if(node.left) {
      tmp.push(node.left)
    }
    if(node.right) {
      tmp.push(node.right)
    }
  }
  return res
}

var connectTwoNode = function(node1, node2) {
  if(node1 == null || node2 == null) return null
  node1.next = node2
  connectTwoNode(node1.left, node1.right)
  connectTwoNode(node2.left, node2.right)
  connectTwoNode(node1.right, node2.left)
}

var connect = function(root) {
  if(root == null) return null
  connectTwoNode(root.left, root.right)
  return root
}

console.log(connect(N1))
