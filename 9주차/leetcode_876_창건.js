var middleNode = function (head) {
  // console.log(head) [1, 2, 3, 4, 5]
  // console.log(head.val) 1
  // console.log(head.next) [2, 3, 4, 5]

  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
