// 后序遍历是左->右->跟

const preOrderTraverse = (root) => {
  let arr = [];
  const preOrderTraverseNode = (node) => {
    if (node) {
      preOrderTraverseNode(node.left);
      preOrderTraverseNode(node.right);
      arr.push(node.val);

      // 左节点
    }
  };
  preOrderTraverseNode(root);
  return arr;
};

const preOrderTraverse2 = (root) => {
  const list = [];
  const stack = [];

  if (root) {
    stack.push(root);
  }

  while (stack.length > 0) {
    // 跟节点出栈,   先进后出
    const curNode = stack.pop();
    list.push(curNode.val);

    if (curNode.right) {
      stack.push(curNode.right);
    }

    if (curNode.left) {
      stack.push(curNode.left);
    }
  }

  return list;
};
