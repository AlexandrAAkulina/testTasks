
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

// class Client {
//     #email;
//     constructor(login, email) {
//         this.login = login;
//         this.#email = email;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         if (this.#isValid(newEmail)) {
//             this.#email = newEmail;
//         } else {
//             console.log("Email is not valid");
//         }
//     }

//     #isValid(email) {
//         return email.includes("@")
            
//     }
// }

// const client = new Client("valery", "email@gmail.com");
// console.log(client.email);
// client.email = "valerygmail.com";
// client.email = "alex@gmail.com";
// console.log(client.email);

/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
   </div>
*/
// const buttonEl = document.querySelector('#alertButton');
// const inputEl = document.querySelector('[value="Hello world!"]');

// buttonEl.addEventListener('click', handlerClick);

// function handlerClick() {
//     const inputValue = inputEl.value.trim();
//     alert(inputValue);
// }

/*
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

   <div>
        <button id="swapButton">SWAP ME</button>
        <input id="leftSwapInput" type="text" value="???" />
        <input id="rightSwapInput" type="text" value="!!!" />
   </div>
*/
// const buttonEl = document.querySelector('#swapButton');
// const inputLeftEl = document.querySelector('#leftSwapInput');
// const inputRightEl = document.querySelector('#rightSwapInput');

// buttonEl.addEventListener('click', handlerClick);

// function handlerClick(e) {
//     const rightInputVal = inputRightEl.value;
//     const leftInputVal = inputLeftEl.value;
//     inputRightEl.value = leftInputVal;
//     inputLeftEl.value = rightInputVal;
// }
// function handlerClick() {
//     [inputRightEl.value, inputLeftEl.value] = [inputLeftEl.value, inputRightEl.value];
// }

//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
  /* <div class="item"> 
<h3>Заголовок</h3>
<p>текст текст текст</p>
</div> */
}
{
  /* <button class="add-btn">add</button>
  <div class="container"></div> */
}

// const buttonEl = document.querySelector('.add-btn');
// const containerEl = document.querySelector('.item');

// buttonEl.addEventListener('click', handlerClick);

// function handlerClick() {
//     const div = document.createElement('div');
//     const h3 = document.createElement('h3');
//     const p = document.createElement('p');
//     h3.textContent = 'Заголовок';
//     div.classList.add('item');
//     p.textContent = 'текст текст текст';
//     div.append(h3, p);
//     containerEl.append(div);
// }

// function handlerClick(evt) {
//     const content = `<div class="item">
// <h3>Заголовок</h3>
// <p>текст текст текст</p>
// </div>`;
//     containerEl.insertAdjacentHTML('beforeend', content);
// }


//При натисканні на кнопку міняти фоновий колір елемента з класом .play на прозорий.
//Примітка: використовуйте CSS-властивість opacity.

{
  /* <button class="add-btn">add</button>
    <div class="play"></div> */
}
{
  /* <style>
  .play {
    background: pink;
    width: 100px;
    height: 100px;
  }
</style> */
}

// const buttonEl = document.querySelector('.add-btn');
// const containerEl = document.querySelector('.play');

// buttonEl.addEventListener('click', handlerClick);

// let opacity = 1;
// let toggle = 'decremente';

// function handlerClick() {
//     if (toggle === 'decremente') opacity -= 0.1;
//     else opacity += 0.1;
//     if (opacity >= 1) toggle === 'decremente';
//     else if (opacity <= 0) toggle === 'incremente';
//         containerEl.style.opacity = opacity;
// }

// const btnEl = document.querySelector('.add-btn');
// const playEl = document.querySelector('.play');

// btnEl.addEventListener('click', onClick);

// let opacity = 1;
// let toggle = 'decremente';

// function onClick() {
//    if (toggle === "decremente") opacity -= 0.1;
//    else opacity += 0.1;
//    if (opacity >= 1) toggle = 'decremente';
//    else if (opacity <= 0) toggle = 'incremente';
//    playEl.style.opacity = opacity;
// }

/*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>

*/

// const passwordButton = document.querySelector('#passwordButton');
// const passwordInput = document.querySelector('#passwordInput');

// passwordButton.addEventListener('click', onClick);

// function onClick() {
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         passwordButton.textContent = 'Приховати!';
//     }
//     else {
//         passwordInput.type = 'password';
//         passwordButton.textContent = 'Розкрити!';
//     }
// }
// console.dir(passwordInput);

// function onClick() {
//     const flag = passwordInput.type === 'password';
//    passwordInput.type = (flag) ? 'text' : 'password';
//    passwordButton.textContent = (flag) ? "Приховати" : "Розкрити";
// }

//Вивести 4 червоні квадрати, при кліку на будь-який, він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще хоч 100 квадратів, при цьому скрипт не
//треба міняти).

{
  /* 
  
  .square {
  width: 150px;
  height: 150px;
  background: red;
  margin: 10px;
}

.square.green {
  background: green;
}
<div class="wrapper">
  <div class="square"></div> 
<div class="square"></div> 
<div class="square"></div> 
<div class="square"></div>  

</div>*/
}
// const elements = document.querySelectorAll('.square');

// elements.forEach((element) => {
//     element.addEventListener('click', changeColor);

// })
// function changeColor(evt) {

//     elements.forEach((element) => {
//         if (element.classList.contains('green')) {
//             element.classList.remove('green');
//         }
//     })
//     evt.target.classList.add('green');
    
// }
// const wrapper = document.querySelector('.wrapper');

// wrapper.addEventListener('click', changeColor);

// function changeColor(evt) {
//     if (!evt.target.classList.contains('square')) {
//         return;
//     }
//     // const children = [...evt.currentTarget.children];
//     const children = evt.currentTarget.children;
//     children.__proto__.forEach = [].forEach;
//     children.forEach((element) => {
//         if (element.classList.contains('green')) {
//             element.classList.remove('green');
//         }
//     })
//     evt.target.classList.add('green');
// }

// Напишіть інтерфейс створення списку.
//Для кожного пункту:

// Запитуйте вміст пункту користувача за допомогою prompt.
// Створюйте елемент <li> і додайте його до <ul>.
// Процес переривається, коли користувач натискає вводить порожній рядок.
// Усі елементи мають створюватися динамічно.

{
  /* <ul class="list"></ul> */
}

const listEl = document.querySelector('.list');
let message = null;
const arr = [];
do {
    message = prompt('введіть текст!');
    if(message) arr.push(`<li>${message}</li>`);
} while (message);

listEl.insertAdjacentHTML('beforeend', arr.join(''));




