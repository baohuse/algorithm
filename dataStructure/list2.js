// 双向链表

// 在上面的单链表中， 有个问题，查找只能通过head来开始，然后向后找到current， 删除，指定位置插入都是这样
// 双向链表当前节点即保存了下一个车厢的指针，又包含了上一个车厢的指针

function DbLinkedList() {
  function Node(element) {
    this.element = element;
    this.next = null;
    // 指向前一个节点
    this.prev = null;
  }

  let head = null;
  // 尾部节点
  let tail = null;
  let length = 0;
  let current, previous;

  //   在任意位置插入元素
  // 指定任意位置插入元素
  this.insert = function (position, element) {
    let index = 0;
    const node = new Node(element);
    if (position > -1 && position < length + 1) {
      if (position === 0) {
        // ① 在开头插入元素
        if (head === null) {
          // 链表内元素为空
          head = node;
          tail = node;
        } else {
          // 链表内存在元素
          current = head;
          head = node;
          head.next = current;
          current.prev = head;
        }
      } else if (position === length) {
        // ② 在末尾插入元素
        current = tail;
        tail = node;
        current.next = tail;
        tail.prev = current;
      } else {
        // ③ 在链表中插入元素
        current = head;
        while (index < position) {
          // 找到需插入节点的位置
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.next = current;

        current.prev = node;
        node.prev = previous;
      }
      length++;
    }
  };

  // 删除指定位置的元素
  this.removeAt = function (position) {
    let index = 0;
    if (position > -1 && position < length) {
      if (position === 0) {
        // 删除链表最开头的元素
        if (length === 1) {
          head = null;
          tail = null;
        } else {
          current = head;
          head = current.next;
          head.prev = current.prev;
        }
      } else if (position === length - 1) {
        // 删除链表最末尾的元素
        current = tail;
        tail = current.prev;
        tail.next = current.next;
      } else {
        // 删除链表中的元素
        current = head;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
    }
  };

  this.log = function () {
    console.info("节点信息", head, JSON.stringify({}, null, length), length);
    current = head;
    let str = current.element;
    while (current.next) {
      current = current.next;
      str = str + " " + current.element;
    }
    return str;
  };
}

var dbLinkedList = new DbLinkedList();
dbLinkedList.insert(0, 5);
dbLinkedList.insert(1, 10);
dbLinkedList.insert(2, 15);
dbLinkedList.insert(3, 20);
dbLinkedList.insert(4, 25);
const log = dbLinkedList.log(); // "5 10 15 20 25"

console.log("log 值", log);
dbLinkedList.removeAt(4);
dbLinkedList.removeAt(0);
dbLinkedList.removeAt(1);
const log2 = dbLinkedList.log(); // "10 20"
console.log("log2 值", log2);