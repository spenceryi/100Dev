fetch('https://techy-api.vercel.app/api/json')
.then(response => response.json())
.then(data => {
    document.querySelector('#smart-phrase').innerText = data.message;
});