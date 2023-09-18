
// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   form.reset();
// }

// Task 1 //

// const User = function ({name, age, post}) {
//     this.userName = name;
//     this.age = age;
//     this.numberOfPost = post;
// };
// User.prototype.getInfo = function () {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numberOfPost} публікацій`
// }
// const user = new User({ name: 'Poly', age: '28', post: '5' });
// console.log(user.getInfo());

// Task 2 //

// const Storage = function (items) {
//     this.items = items;
// }

// Storage.prototype.getItems = function() {
//     return this.items;
// }

// Storage.prototype.removeItem = function (item) {
//     if (!this.items.includes(item)) {
//          return `Такого товару немає на складі`
//     }
//     this.items = this.items.filter(value => value != item)
// }

// Storage.prototype.addItems = function (item) {
//     this.items.push(item);
// }

// const storage = new Storage(['apple', 'mango']);
// console.log(storage.getItems());
// storage.addItems('banana');
// storage.removeItem('apple');
// console.log(storage.getItems());

// Task 3 //

// const worker1 = {
//     name: 'Mark',
//     salary: 1300,
// };

// const worker2 = {
//     name: 'Jack',
//     salary: 2500,
// };

// function changeSalary(value) {
//     this.salary += value;
// }

// changeSalary.bind(worker1, 100)();
// changeSalary.bind(worker2, -200)();
// console.log(worker1);
// console.log(worker2);

// Task 4 //

// function MyString() {

// };

// MyString.prototype.reverse = function (str) {
//     // return str.split('').reverse().join('');
//     return [...str].reverse().join('');
// };

// MyString.prototype.ucFirst = function (str) {
//     return str[0].toUpperCase() + str.slice(1);
// };

// MyString.prototype.ucWords = function (str) {
//     const words = str.split(' ');
//     const result = [];
//     words.forEach(word => {
//          result.push(this.ucFirst(word));
//     });
//     return result.join(' ');
// };
    
// const str = new MyString();

// console.log(str.reverse("abcde"));
// console.log(str.ucFirst("abcde"));
// console.log(str.ucWords("abcde abcde abcde"));

// Task 5 //

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;

//     return {
//         firstName: this.firstName,
//         lastName: this.lastName,
//         name: this.firstName + " " + this.lastName,
//     };
// }


// var n = new NameMe("John", "Doe");
// console.log(n.firstName);
// console.log(n.lastName);
// console.log(n.name);

// Task 6 //


// class Worker {
//     constructor (name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary() {
//         return this.rate * this.days;
//     }

//     get getFullName() {
//         return `${this.name} ${this.surname}`;
//     }
// }

// const worker = new Worker("Іван", "Іванов", 10, 31);

// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.getFullName);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

// Task 7 //

class Client {
    #email;
    constructor(login, email) {
        this.login = login;
        this.#email = email;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        if (this.#isValid(newEmail)) {
            this.#email = newEmail;
        } else {
            console.log("Email is not valid");
        }
    }

    #isValid(email) {
        return email.includes("@") 
            
    }
}

const client = new Client("valery", "email@gmail.com");
console.log(client.email);
client.email = "valerygmail.com";
client.email = "alex@gmail.com";
console.log(client.email);

