class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class ll{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    beforeAdd(value){
        const node=new Node(value)
        if (this.isEmpty()) {
            this.head=node
            this.tail=node
            
        } else {
            node.next=this.head
            this.head=node       
        }
        this.size++
    }
    afterAdd(value){
        const node=new Node(value)
        if (this.isEmpty()) {
            this.head=node
            this.tail=node  
        } else {
            this.tail.next=node
            this.tail=node
        }
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

const l1=new ll()
console.log("size:",l1.isEmpty());
console.log("size:",l1.getSize());
l1.beforeAdd(5)
l1.beforeAdd(15)
l1.beforeAdd(25)
l1.afterAdd(30)
l1.afterAdd(35)

l1.print();