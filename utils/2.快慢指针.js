/**
 * 链表节点
 * @param {*} val 
 * @param {ListNode} next 后续节点
 */
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
var N3 = new ListNode('3');
var N4 = new ListNode('4');
var N5 = new ListNode('5');
var N6 = new ListNode('6');
var N7 = new ListNode('7');

N1.next = N2
N2.next = N3
N3.next = N4
N4.next = N5
N5.next = N6
N6.next = N7

/**
 * 得到链表中心节点 - 快慢指针
 * @param {ListNode} head 链表头结点
 * @return {ListNode}
 */
var getLinkListCenter = function(head) {
  let fastNode = slowNode = head
  while(fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next
    fastNode = fastNode.next.next
  }
  return slowNode
}

// N7.next = N1
/**
 * 判断链表是否有环 - 快慢指针
 * @param {ListNode} head 链表的入口
 * @return {Boolean}
 */
var isCircularList = function(head) {
  let fastNode = slowNode = head
  while(fastNode.next !== null && fastNode.next !== null) {
    slowNode = slowNode.next
    fastNode = fastNode.next.next
    if(fastNode.val == slowNode.val) {
      return true
    }
  }
  return false
}


/**
 * 找到链表倒数第n个结点
 * @param {ListNode} head 链表头结点
 * @param {Number} n 需要被找到的倒数第n个结点
 */
var getLastNthNode = function(head, n) {
  let fastNode = slowNode = head
  // 将快指针指向比慢指针快n - 1个结点的位置
  for(let i = 0; i < n - 1; i++) {
    // 若n长度超出链表返回null
    if(fastNode.next == null) return null
    fastNode = fastNode.next
  }
  while (fastNode.next !== null) {
    fastNode = fastNode.next
    slowNode = slowNode.next
  }
  return slowNode
}
