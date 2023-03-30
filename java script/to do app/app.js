const form = document.querySelector('#form');
const newItem = document.querySelector('#newItem');
const list = document.querySelector('#list');

let items = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = newItem.value.trim();
  if (value !== '') {
    items.push(value);
    newItem.value = '';
    renderList();
  }
});

function renderList() {
  list.innerHTML = '';
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const li = document.createElement('li');
    li.innerHTML = item + '<button class="remove" data-index="' + i + '">Remove</button>';
    list.appendChild(li);
  }
  const buttons = document.querySelectorAll('.remove');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      items.splice(index, 1);
      renderList();
    });
  }
}
