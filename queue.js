class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class queue {
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
  enqueue(value) {
    const node = new Node(value);
    // console.log(node);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail=node
    }
    this.size++
  }
  dequeue()
  {
    if (this.isEmpty()) {
        return null        
    }
    else
    {
        this.head=this.head.next
    }
    this.size--
  }
  display() {
    if (this.isEmpty()) {
        return null        
    }
    else
    {
        let curr=this.head
        let list=""
        while (curr) {
            list+=`${curr.value}->`
            curr=curr.next
        }
        console.log(list);
    }
  }
}

const q1 = new queue();
console.log(q1.isEmpty());
console.log(q1.getSize());
q1.enqueue(5)
q1.enqueue(15)
q1.enqueue(25)
q1.dequeue()
q1.display()