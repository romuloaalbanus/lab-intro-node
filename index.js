class SortedList {
  constructor() {
    this.items = [];
    this.length = 0; //ou this.items.length
  }

  add(item) {
    this.items = [...this.items, item].sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items < pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if ((this.length = 0)) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.pop();
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.shift();
    }
  }

  sum() {
    let total = 0;
    if (this.length == 0) {
      return 0;
    } else {
      for (let i = 0; i < this.length; i++) {
        total += this.items[i];
      }
      return total;
    }
  }

  avg() {
    let total = 0;
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      for (let i = 0; i < this.length; i++) {
        total += this.items[i];
      }
      return total / this.length;
    }
  }
}

module.exports = SortedList;
