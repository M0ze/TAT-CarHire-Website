const header = require('./components/header');
const footer = require('./components/footer');
const carList = require('./components/car-list');

function init() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    app.appendChild(header());
    app.appendChild(carList());
    app.appendChild(footer());
}

document.addEventListener('DOMContentLoaded', init);