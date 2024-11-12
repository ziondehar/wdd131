console.log("JavaScript is linked and working!");
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

const li = document.createElement('li')
li.textContent= "new list item";

const deleteButton = document.createElement("deletebutton");
deleteButton.textContent = "❌"
li.append(deleteButton);
list.append(li)

button.addEventListener('click', function(){
    
});
