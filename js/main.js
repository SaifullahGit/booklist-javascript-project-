const tittle = document.querySelector('#tittle')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const booklist = document.querySelector('#book-list')
btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (tittle.value == '' && author.value == '' && year.value == '') {
        alert(' Enter some value');
    } else {
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerHTML = tittle.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        booklist.appendChild(newRow);
    }
});