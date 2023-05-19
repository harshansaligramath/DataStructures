class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total+=key.charCodeAt(i);
    }
    return total%this.size
  }
  set(key,value)
  {
    const index=this.hash(key)
    this.table[index]=value
  }
  get(key)
  {
    const index=this.hash(key)
    return this.table[index]
  }
  remove(key)
  {
    const index=this.hash(key)
    this.table[index]=undefined
  }
  print()
  {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
            console.log(i,this.table[i]);
            
        }
        
    }
  }
}
const ht1 = new hashTable(101);
ht1.set("one","1")
ht1.set("two","2")
ht1.set("three","3")
ht1.set("four","4")
ht1.print()
console.log(ht1.get("three"));