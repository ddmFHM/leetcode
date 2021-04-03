/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//  var reverseKGroup = function(head, k) {

// };



/*---------- ---------- ---------- 实现 ---------- ---------- ----------*/

function ListNode(val, next) {
  this.val = val
  this.next = next || null
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

/**
 * 思路
 * K个一组翻转，从head开始翻转前K个
 * 然后将K+1作为新的head递归翻转
 * base case 不满足k个即递归退出条件
 */




/**
 * 翻转链表前K项
 * @param {ListNode} head 头节点
 * @param {*} k 翻转个数
 * @returns 
 */
var tmpNode = null
var reverseN = function(head, k) {
  if(k == 1) {
    tmpNode = head.next
    return head
  }
  let newHead = reverseN(head.next, k - 1)
  head.next.next = head
  head.next = tmpNode
  return newHead
}


/**
 * k个一组翻转链表
 * @param {ListNode} head 头节点
 * @param {*} k 每组个数
 * @returns 
 */
var reverseKGroup = function(head, k) {
  // 将头结点存储起来
  let a = b = head
  // 查看当前起点链表长度是否小于K 小于K直接返回头结点 否则返回子问题的头结点
  for(let i = 0; i < k; i ++) {
    if (b == null) return a
    b = b.next
  }
  // 将当前头结点开始翻转k项，翻转完毕后得到新的头结点，此时a为前k项的最后一项，此时b保存的是子问题的头结点
  let newHead = reverseN(a, k)
  // 将a（当前这一组k项的最后一项的next指向 子问题的头结点）
  a.next = reverseKGroup(b, k)
  return newHead
}

print(reverseKGroup(N1, 3))