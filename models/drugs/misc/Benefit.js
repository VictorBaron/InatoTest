export default class Benefit {
  constructor(value) {
    this.value = value;
  }

  add(addedValue) {
    const newValue = this.value + addedValue;
    if (newValue > 50) {
      return 50;
    }
    if (newValue < 0) {
      return 0;
    }
    return newValue;
  }
}
