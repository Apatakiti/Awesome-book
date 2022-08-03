/* eslint-disable rule-you-want-to-disable */
const booksContainer = document.getElementById('books');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');

const bookDatas = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

function generateBook() {
  booksContainer.innerHTML = '';
  for (let i = 0; i < bookDatas.length; i += 1) {
    booksContainer.innerHTML += `<div class="book">
                     <div>${bookDatas[i].title}</div>
                     <div>${bookDatas[i].author}</div>
                     <button class="rem-btn" onclick="removeBook(${i})">Remove</button>
                     <hr><br></div>`;
  }
}

function removeBook(i) {
  bookDatas.splice(i, 1);
  generateBook();
}

function generateNewBook(i) {
  booksContainer.innerHTML += `<div class="book" id="book">
                     <div class="the-title">${bookDatas[i].title}</div>
                     <div class="the-author">${bookDatas[i].author}</div>
                     <button class="rem-btn" onclick="removeBook(${i})">Remove</button>
                     <hr><br></div>`;
}

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  const newBook = new Book(inpTitle.value, inpAuthor.value);
  bookDatas.push(newBook);
  generateNewBook(bookDatas.length - 1);
  localStorage.setItem('bookDatas', JSON.stringify(bookDatas));
});
removeBook();
