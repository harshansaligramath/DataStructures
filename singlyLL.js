class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class llswt {
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
  addbefore(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      //cccccc
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  addAfter(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  insertPosition(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.head = node;
    } else {
      const node = new Node(value);
      let curr = this.head;
      console.log("fffffff",curr);
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      let rm = curr.next;
      node.next = rm;
      curr.next = node;
      // console.log("hjjjjj",curr.next);

    }
    this.size++;
  }
  removeFromFront(){
    if (this.isEmpty()) {
      return null
    }
    const value=this.head.value
    this.head=this.head.next
    this.size--
    return value
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}
const obj = new llswt();
console.log("is empty:", obj.isEmpty());
console.log(obj.getSize());
obj.addbefore(10);
obj.addbefore(5);
obj.addAfter(15);
obj.addAfter(25);
obj.addAfter(30);
obj.insertPosition(20, 3);
// obj.removeFromFront()
obj.print();
