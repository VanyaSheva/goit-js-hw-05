console.log(
  "============================================TASK1============================================"
);
const Account = function({ login, email }) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}  Email: ${this.email}`);
};
const mango = new Account({ login: "Mangozedog", email: "mango@dog.woof" });
const poly = new Account({ login: "Poly", email: "poly@mail.com" });
mango.getInfo();
poly.getInfo();
