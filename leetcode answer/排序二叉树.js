var BinaryTree = function () {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null
    };

    var root = null;

    var insertNode = function (node, newNode) {
        if (node.key > newNode.key) {  //先判断值，如果小于参考点，就放左侧
            if (node.left == null) {  //左孩子是空，就直接做它做孩子
                node.left = newNode;
            } else {// 左孩非空，就要跟左孩子再比较，还用这个方法
                insertNode(node.left, newNode);
            }
        } else { //大于参考点，放在右侧
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    this.insert = function (key) {
        var node = new Node(key);
        if (root === null) {
            root = node;
        }
        else {
            insertNode(root, node)
        }
    }
}
