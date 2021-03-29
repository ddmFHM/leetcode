/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {

};


/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/


function ListNode(val, next) {
  this.val = val
  this.next = next
}

/**
 * 打印链表
 * @param {ListNode} head 头节点
 * @returns 
 */
function print(head) {
  if(head == null) return null
  console.log(head.val)
  print(head.next)
}

var N1 = new ListNode('N1');
var N2 = new ListNode('N2');
var N3 = new ListNode('N3');
var N4 = new ListNode('N4');
var N5 = new ListNode('N5');
var N6 = new ListNode('N6');
N1.next = N2
N2.next = N3
N3.next = N4
N4.next = N5
N5.next = N6

// print(N1)

/**
 * 思路
 * 1. 实现反转链表
 * 2. 实现反转列表前N项
 * 3. 实现反转链表[n, m]项  （将前n项组合成一项，即可使用反转前N项）
 */



/**
 * step1: 反转链表 
 * @param {ListNode} head 头节点
 * @return {ListNode} 返回新的头节点
 */
var reverse = function(head) {
  if(head.next == null) return head
  var newHead = reverse(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
// print(reverse(N1))



/**
 * step2: 反转链表前n项
 * @param {ListNode} head 头节点
 * @param {*} n 反转个数
 * 思路：
 * base case: 当前已经到反转最后一项
 * 每次递归，次数减一
 */
var tmpNode = null
var reverseN = function(head, n) {
  if ( n == 1 ) {
    tmpNode = head.next
    return head
  }
  var newHead = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = tmpNode
  return newHead
}
// print(reverseN(N1, 3))



/**
 * step3: 反转链表left至right项
 * @param {ListNode} head 头节点
 * @param {*} left 反转起始
 * @param {*} right 反转终止
 * 思路：
 * 形如 1 2 3 4 5 6
 * 反转 3到5项 得 1 2 4 5 3 6
 * 可将head.next.next 视为第一项进行 链表前N项反转
 * (123) 4 5 6 其中 123作为第一项 原本的第五项5则变为第三项，所以只需反转前3项即可拿到反转前N项得节点5
 * 将head得next指向得到得节点5即可
 */
var reverseBetween = function (head, left, right) {
  if (left == 1) {
    return reverseN(head, right)
  }
  var newHead = reverseBetween(head.next, left - 1, right - 1)
  head.next = newHead
  return head
}
// print(reverseBetween(N1, 3, 5))