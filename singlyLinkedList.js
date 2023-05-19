class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
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
  
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
    // add a value to the end of the node
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
      }
      this.size++;
    }
    // insert a specific position
    
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        console.log("sssssssssssss",prev);
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
    // remove value by entering index value
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        console.log("hhhhh",removedNode);
        prev.next = removedNode.next;
      }
      this.size--;
      return removedNode.value;
    }
     
  //  reverse order
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  
    //for display the nodes
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
  const list = new LinkedList();
  console.log("is empty",list.isEmpty());
  console.log(list.getSize());
  list.print();
  // list.prepend(10);
  // list.print();
  // list.prepend(20);
  // list.prepend(30);
  // list.append(50)
  // list.removeFrom(1)
  // list.print();
  // list.reverse()
  // list.print();
  
  // list.prepend(15)
  list.prepend(10)
  list.prepend(5)
  list.append(15)
  list.append(25)
  // list.append(30)
  list.insert(20,3)
  list.removeFrom(1)

  
  list.print()