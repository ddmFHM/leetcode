/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {

};

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

var N1 = new ListNode('1');
var N2 = new ListNode('2');
var N3 = new ListNode('2');
var N4 = new ListNode('1');
N1.next = N2
N2.next = N3
N3.next = N4


/**
 * 实现思路1：
 * 模拟双指针判断
 * 保存左指针，右指针先到达链表末端
 * 右指针后序遍历，从链表末端往前
 * 两端指针 依次往中间逼近 过程中比较左右指针的节点值是否相同即可
 */

/**
 * 后序遍历输出(右指针)
 * @param {ListNode}} head 头节点
 * @returns 
 */
let left;
var backPrint = function(right) {
  // 如果右指针递归到最后了 返回true表示左指针可以开始移动了
  if (right == null) return true
  let res = backPrint(right.next)
  res = res && right.val == left.val
  left = left.next
  return res
}

var isPalindrome = function(head) {
  let right = head
  left = head
  let res = backPrint(right)
  console.log(res)
};

// isPalindrome(N1)




/**
 * 实现思路2
 * 1.使用快慢指针找到中点
 * 2.奇偶情况处理
 * 3.从中点反转后序链表
 * 4.两个链表进行比较
 */

var isPalindrome = function(head) {
  let fastNode = slowNode = head
  while(fastNode!== null && fastNode.next!== null) {
    fastNode = fastNode.next.next
    slowNode = slowNode.next
  }
  slowNode = reverse(slowNode)
  while(slowNode !== null && head!== null) {
    if(slowNode.val !== head.val) return false
    slowNode = slowNode.next
    head = head.next
  }
  return true
}

/**
 * 反转链表
 * @param {ListNode} head 
 * @returns 
 */
var reverse = function(head) {
  if(head.next == null) return head
  let newHead = reverse(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

console.log(isPalindrome(N1))