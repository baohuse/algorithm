// 单向链表

// 简单来说， 数组类似于快递柜（查找方便）， 而链表很像火车（删除，移动方便），
// 心中一直要有火车的概念

const logStyle = "background: red; color: #fff;";
// 单链表， 有一个next指向下一个节点
function List() {
  // 当前节点元素，有个指针，指向下个元素
  function Node(element) {
    this.element = element;
    this.next = null;
  }

  // 初始节点为null, 火车头
  let head = null;

  // 当前节点临时变量
  let current;
  // 链表长度
  let length = 0;

  /**==============新增元素================ */
  // 在链表末尾新增元素
  this.append = function (element) {
    // 边界判断
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      // 找到最后一个火车头，然后将其的next指向新的节点
      current = head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    length++;
  };

  // 在指定位置新增火车头， 新的火车头，要连接的那个火车头
  // 要找到这个火车头的位置，他的前一个车头的next指向新的，插入的这个的next跟后面的连上
  this.insert = function (position, element) {
    // 确定边界条件
    let node = new Node(element);
    let index = 0;

    // 要插入位置的前一个节点， 要插入位置节点（是插入元素的next）
    let prev, curr;

    if (position >= 0 && position <= length) {
      if (position === 0) {
        // 第0项没有前一个元素，插入节点的next指向第一个车头，并将自己置换为车头
        curr = head;
        head = node;
        head.next = curr;
      } else {
        //  找到目标位置
        curr = head;
        while (index < position) {
          prev = curr; // 当前位置的前一个
          curr = curr.next;
          index++;
        }

        prev.next = node;
        node.next = curr;
      }
      length++;
    }
  };

  /**==============新增元素================ */

  /**==============查找元素=============== */
  // 查找元素的下标
  // 要有一个变量去记录， 查找比较困难，都是从头查起
  this.indexOf = function (element) {
    let index = 0;
    // 边界条件
    current = head;

    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  };

  // 移除指定位置元素
  // 这个跟指定位置新增是一样的，都是先查找这个位置的元素，然后将它之前的元素之间指向它之后的元素
  this.removeAt = function (position) {
    if (position >= 0 && position <= length) {
      let index = 0;
      let previos;

      if (position === 0) {
        head = head.next;
      } else {
        current = head;
        while (index < position) {
          previos = current;
          current = current.next;
          index++;
        }
        previos.next = current.next;
      }

      length--;
    }
  };

  // 移除一个元素
  this.remove = function (element) {
    const position = this.indexOf(element);
    if (position !== -1) {
      this.removeAt(position);
    }
  };

  // 获取大小
  this.size = function () {
    return length;
  };

  // 获取最开头的链表
  this.getHead = function () {
    return head;
  };

  // 是否为空
  this.isEmpty = function () {
    return length === 0;
  };

  // 打印链表元素
  this.log = function () {
    console.log("节点信息", JSON.stringify(head, null, length), length);
    current = head;
    let str = current.element;
    while (current.next) {
      current = current.next;
      str = str + " " + current.element;
    }
    return str;
  };
}

const list = new List();

list.append(1);
list.append(2);
list.append(3);
list.insert(0, "第一个");
list.insert(4, "最后一个");

// list.removeAt(3);
// list.remove(1)
const log = list.log();
console.log("链表元素", log);
