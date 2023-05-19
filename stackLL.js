class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  push(value) {
    const node = new Node(value);
    // console.log(node);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }
  display() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list += `${curr.value}->`;
      curr = curr.next;
    }
    console.log(list);
  }
}
const s1 = new linkedlist();
console.log(s1.isEmpty());
console.log(s1.getSize());
s1.push(5);
s1.push(15);
s1.push(25);
s1.push(35);
s1.pop();
s1.display();
