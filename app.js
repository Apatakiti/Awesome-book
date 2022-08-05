// import { Datetime } from './luxon.js';

const booksContainer = document.getElementById('books');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');


class Book {
 static bookDatas = []

 constructor(title, author) {
   this.title = title;
   this.author = author;
 }

   // adding
  static addBook(Dbook) {
   this.bookDatas.push(Dbook);
 }

 // removing
 static remBook(i) {
   this.bookDatas.splice(i, 1);
 }
}

function generateBook() {
  booksContainer.innerHTML = '';
  for (let i = 0; i < Book.bookDatas.length; i += 1) {
    booksContainer.innerHTML += `<div class="book">
    <div class="titleAndBooks">"${Book.bookDatas[i].title}" by ${Book.bookDatas[i].author}</div> <button class="rem-btn" onclick="removeBook(${i})">Remove</button>
    </div> `;
                 
  }
}

// remove book
function removeBook(i) {
  Book.remBook(i);
  generateBook();
}

function generateNewBook(i) {
  booksContainer.innerHTML += `<div class="book">
  <div class="titleAndBooks">"${Book.bookDatas[i].title}" by ${Book.bookDatas[i].author}</div> <button class="rem-btn" onclick="removeBook(${i})">Remove</button>
  </div>`;
}

// adding book
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  const newBook = new Book(inpTitle.value, inpAuthor.value);
  Book.addBook(newBook);
  generateNewBook(Book.bookDatas.length - 1);

  localStorage.setItem('bookD', JSON.stringify(Book.bookDatas));
});
removeBook();

window.addEventListener('load', () => {
  Book.bookDatas = JSON.parse(localStorage.getItem('bookD'));
  if (Book.bookDatas) {
    generateBook();
  } else {
    Book.bookDatas = [];
  }
});

const list = document.getElementsByClassName('list')
const page1 = document.getElementsByClassName('page1')

list[0].addEventListener('click', () => {
  for (let i = 0; i < page1.length; i += 1) {
    page1[0].style.display = 'block';

    for (let i = 0; i < page2.length; i += 1) {
      page2[0].style.display = 'none';
    }
    for (let i = 0; i < page3.length; i += 1) {
      page3[0].style.display = 'none';
    }
  }
})

const addNew = document.getElementsByClassName('Add-new')
const page2 = document.getElementsByClassName('page2')

addNew[0].addEventListener('click', () => {
  for (let i = 0; i < page2.length; i += 1) {
    page2[0].style.display = 'block';

    for (let i = 0; i < page1.length; i += 1) {
      page1[0].style.display = 'none';
    }
    for (let i = 0; i < page3.length; i += 1) {
      page3[0].style.display = 'none';
    }
  }
})

const page3 = document.getElementsByClassName('page3')
const contact = document.getElementsByClassName('contact')

contact[0].addEventListener('click', () => {
  for (let i = 0; i < page3.length; i += 1) {
    page3[0].style.display = 'block';

    for (let i = 0; i < page1.length; i += 1) {
      page1[0].style.display = 'none';
    }

    for (let i = 0; i < page2.length; i += 1) {
      page2[0].style.display = 'none';
    }
  }
})
