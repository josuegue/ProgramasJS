const arrprint = [1,'hola', 2,'mundo', 3,'!']

const ul = document.createElement('ul');

const listarContainer = document.getElementById('list-container');

arrprint.forEach((element)=>{
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
});

listarContainer.appendChild(ul);