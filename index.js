class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    let maxNumber = 0;
    if (this.length !== 0) {
      this.items.forEach(number => {
        if (number > maxNumber) {
          maxNumber = number;
        }
      });
      return maxNumber;
    } else throw new Error('EmptySortedList');
  }

  min() {
    let minNumber = this.items[0];
    if (this.length !== 0) {
      this.items.forEach(number => {
        if (number < minNumber) {
          minNumber = number;
        }
      });
      return minNumber;
    } else throw new Error('EmptySortedList');
  }

  sum() {
    let sum = 0;
    this.items.forEach(number => {
      sum += number;
    });
    return sum;
  }

  avg() {
    if (this.length !== 0) {
      let result = this.sum() / this.length;
      return result;
    } else throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
