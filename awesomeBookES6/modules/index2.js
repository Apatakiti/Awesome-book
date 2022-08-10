export class ClassBooks {
  constructor() {
    return [];
  }
}

export function Nav() {
  const list = document.getElementsByClassName('list');
  const page1 = document.getElementsByClassName('page1');
  const page3 = document.getElementsByClassName('page3');
  const contact = document.getElementsByClassName('contact');
  const addNew = document.getElementsByClassName('Add-new');
  const page2 = document.getElementsByClassName('page2');

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
  });

  addNew[0].addEventListener('click', () => {
    for (let i = 0; i < page2.length; i += 1) {
      page2[0].style.display = 'block';
      page1[0].style.display = 'none';
      page3[0].style.display = 'none';
    }
  });

  contact[0].addEventListener('click', () => {
    for (let i = 0; i < page3.length; i += 1) {
      page3[0].style.display = 'block';
      page1[0].style.display = 'none';
      page2[0].style.display = 'none';
    }
  });
}