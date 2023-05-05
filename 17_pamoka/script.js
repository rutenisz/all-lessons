const person = (name, surname, age) => {
  const obj = { name: name, surname: surname, age: age };
  return obj;
};

console.log(person("Vardenis", "Pavardenis", "100"));

class Bank {
  constructor(name, number, balance) {
    this.name = name;
    this.number = number;
    this.balance = balance;
  }

  withdraw(money) {
    const amount = this.balance - money;
  }

  deposit(money) {
    const amount = this.balance + money;
  }

  getBalance() {
    return amount;
  }
}

const account = new Bank("Vardenis", "LT424242344", 1000);

class Person {
  constructor(name, age, lastName) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  setAge(newAge) {
    this.age = newAge;
  }

  getAge() {
    return this.age;
  }
}

const person1 = new Person("John", 25, "Stevenson");

const person2 = new Person("Steve", 35, "Stevenson");

console.log(person1.getAge());

person1.setAge(27);

console.log(person1.getAge());

//BankAccount -> name, number, balance, withdraw, deposit, getBalance;

// dvi clases - knyga ir biblioteka

// knyga tures pavadinimas, puslapiai, autorius
// biblioteka tures knygas, pavadinimas, knygu sarasas, paimti knyga, atiduoti knyga

class Book {
  constructor(title, author, page_length) {
    this.title = title;
    this.author = author;
    this.page_length = page_length;
  }
}

class Library {
  constructor(title, book_list) {
    this.title = title;
    this.book_list = book_list;
  }

  take() {
    

  }

  giveBack() {}
}

const book = new Book("Svetimas", "Alberas Kamiu", 129);
const book1 = new Book("Kopa", "J.Habert", 729);

const library = new Library("M.Mazvydo Biblioteka", 2);


