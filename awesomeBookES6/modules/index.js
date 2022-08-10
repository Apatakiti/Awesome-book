import { Nav } from './index2.js';

const booksContainer = document.getElementById('books');
const inpTitle = document.getElementById('inp-title');
const inpAuthor = document.getElementById('inp-author');

class ClassBooks {
  constructor() {
    return [];
  }
}

const bookDatas = new ClassBooks();

class Book {
        constructor(title, author) {
              this.title = title;
              this.author = author;
            }

     static generateBook(i) {
        booksContainer.innerHTML += `<div class="book">
        <div class="titleAndBooks">"${bookDatas[i].title}" by ${bookDatas[i].author}</div> 
        <button class="rem-btn">Remove</button>
        </div> `;

      const remBtn = document.querySelectorAll('.rem-btn');
       remBtn.forEach( (btn, i) => {
       btn.addEventListener('click', () => Book.remBook(i) )
     });
    }

 static remBook(i) {
   bookDatas.splice(i, 1);
   localStorage.setItem('bookD', JSON.stringify(bookDatas))
   Book.generateNewBook()           
 }

 static generateNewBook() {
   booksContainer.innerHTML = '';
     for (let i = 0; i < bookDatas.length; i++) {
       booksContainer.innerHTML += `<div class="book">
        <div class="titleAndBooks">"${bookDatas[i].title}" by ${bookDatas[i].author}</div>
      <button class="rem-btn"> Remove </button>
    </div>`;

    const remBtn = document.querySelectorAll('.rem-btn');
    remBtn.forEach( (btn, i) => { 
      btn.addEventListener('click', () => Book.remBook(i) )
    });
   }
  }
}


const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', () => {
  const newBook = new Book(inpTitle.value, inpAuthor.value);
  bookDatas.push(newBook);
  Book.generateBook(bookDatas.length - 1);
  localStorage.setItem('bookD', JSON.stringify(bookDatas));
});


window.addEventListener('load', () => {

 const bookData = JSON.parse(localStorage.getItem('bookD'));
  if (bookData) {
    bookDatas.push(...bookData);
    Book.generateNewBook();;
  }
});

function contTimeNDatUpdat() {

  const date = document.getElementsByClassName('date');
  const theDate = new Date(Date.now());
  date[0].innerHTML = theDate.toLocaleString(theDate.DATETIME_MED_WITH_SECONDS);
}

setInterval(() => {
  contTimeNDatUpdat();
}, 1000); 


Nav()