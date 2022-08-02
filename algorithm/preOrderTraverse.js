// 二叉树的前序遍历
// 先遍历跟节点， 再遍历左节点， 最后遍历右节点
const preOrderTraverse = (root) => {
  let arr = [];
  const preOrderTraverseNode = (node) => {
    if (node) {
      arr.push(node.val);

      // 左节点
      preOrderTraverseNode(node.left);
      preOrderTraverseNode(node.right);
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

  while(stack.length > 0) {
    // 跟节点出栈,   先进后出
    const curNode = stack.pop()
    list.push(curNode.val);
    
    if(curNode.right) {
        stack.push(curNode.right)
    }

    if(curNode.left) {
        stack.push(curNode.left)
    }
  }

  return list
};
