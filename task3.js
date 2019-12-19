console.log(
  "============================================TASK3============================================"
);
class Storage {
  constructor(array) {
    this.array = array;
  }

  getItems() {
    return this.array;
  }
  addItem(item) {
    return this.array.push(item);
  }
  removeItem(item) {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === item) {
        this.array.splice(i, 1);
      }
    }
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);
const items = storage.getItems();
console.table(items);
storage.addItem("Дроид");
console.table(items);
storage.removeItem("Пролонгер");
console.table(items);
