// Defining a Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//create linked list class
class LinkedList {
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
  //add new node at the begining

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //add new node at the end

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  //remove  node at the begining

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  //remove  node at the end

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }
  //reverse order

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
  //print method for display all the contents
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
  // Convert the linked list to an array
  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }
}
const list = new LinkedList();
//   list.append(1);
//   list.append(2);
list.prepend(30);
list.append(40);
list.prepend(20);
list.toArray();

list.print();
console.log(list.getSize());
//   list.removeFromFront();
//   list.print();
//   list.removeFromEnd();
//   list.print();
