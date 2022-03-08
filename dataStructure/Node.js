// 链表节点展示

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

// 插入一个节点到链表的末尾

function insertNode(head, node) {
  if (!head) return node;
  if (!head.next) {
    head.next = node;
    return head;
  }

  // 找到最后一个
  let current = head;

  while (current.next) {
    current = current.next;
  }

  current.next = node;
  return node;
}


insertNode(node1, node2);
insertNode(node2, node3);
console.log(node1)