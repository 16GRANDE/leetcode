class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = new Node(null, null);
  }

  find(index) {
    let current = this.head;
    for (let i = 0; i < index; ++i) {
      current = current.next;
    }
    return current;
  }

  insert(value, index) {
    const prev = this.find(index);
    const next = new Node(value, prev.next);
    prev.next = next;
  }
}

function printFromTailToHead(node){
    if(node.next){
        printFromTailToHead(node.next)
    }

    node.value&&console.log(node.value)
}


