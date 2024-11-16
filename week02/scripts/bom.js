const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter === '') {
        alert('Please enter a valid book and chapter!');
        return;
    }

  const listItem = document.createElement('li');
    listItem.textContent = chapter;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = '';
    input.focus();
});

