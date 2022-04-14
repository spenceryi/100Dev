function toggleDOMVisibility(node) {
    node.classList.toggle('hidden');
    node.classList.toggle('visible');
}

function replaceText(query, text) {
    document.querySelectorAll(query).forEach(node => {
        node.innerText = text;
    });
}

document.querySelector('#guess-button').addEventListener('click', _ => {
    fetch('https://ip-fast.com/api/ip/?format=json&location=True')
    .then(response => response.json())
    .then(data => {
        toggleDOMVisibility(document.querySelector('#content-before'));
        replaceText('#ip-address', data.ip);
        replaceText('#city', data.city);
        replaceText('#country', data.country);
        toggleDOMVisibility(document.querySelector('#content-after'));
    });
});