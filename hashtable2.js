class hashTable {
  constructor(size) {
    this.table = new Array(size);
    // console.log(this.table);
    this.size = size;
    // console.log(this.size);
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    //   console.log(total);
    }
    // console.log(total%this.size);
    return total%this.size
  }
  set(key,value)
  {
    const index=this.hash(key)
    console.log(index);
    this.table[index]=value
    console.log(this.table[index]);
}
  get(key)
  {
    const index=this.hash(key)
    return this.table[index]
  }
  print()
  {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
  }
}

const ht = new hashTable(50);
ht.set("hai")
ht.set("hai","hello")
ht.set("hai","hello111")
console.log(ht.get("hai"));
