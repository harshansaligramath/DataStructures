class quadratic {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key,value)
  {
    let index=this.hash(key)
    while () {
        
    }
  }
}
const f1 = new quadratic(500);
