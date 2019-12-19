console.log(
  "============================================TASK4============================================"
);
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  append(str) {
    return (this._value = `${this._value}${str}`);
  }
  prepend(str) {
    return (this._value = `${str}${this._value}`);
  }
  pad(str) {
    return (this._value = `${str}${this._value}${str}`);
  }

  get value() {
    return this._value;
  }
}

const builder = new StringBuilder(".");
builder.append("^");
console.log(builder.value);
builder.prepend("^");
console.log(builder.value);
builder.pad("=");
console.log(builder.value);
