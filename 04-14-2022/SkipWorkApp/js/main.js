const availableCategories = ['Family', 'Office', 'Children', 'College', 'Party'];

// Add categories
const select = document.querySelector('#excuse-category');
availableCategories.forEach(cat => {
    select.innerHTML += `<option value="${cat.toLowerCase()}">${cat}</option>`;
});

document.querySelector('#submit-button').addEventListener('click', _ => {
    let url = 'https://excuser.herokuapp.com/v1/excuse';
    const select = document.querySelector('#excuse-category');
    const category = select.options[select.selectedIndex].value;
    
    if (category !== 'Pick a category') {
        url += `/${category}`;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.excuse-container').style.display = 'initial';
        document.querySelector('span.excuse').innerText = `"${data[0].excuse}"`;
    });
});