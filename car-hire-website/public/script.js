document.addEventListener('DOMContentLoaded', () => {
    const carListContainer = document.getElementById('car-list');

    // Function to fetch available cars from the API
    async function fetchCars() {
        try {
            const response = await fetch('/api/cars');
            const cars = await response.json();
            displayCars(cars);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    }

    // Function to display cars in the car list container
    function displayCars(cars) {
        carListContainer.innerHTML = '';
        cars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.className = 'car-item';
            carItem.innerHTML = `
                <h3>${car.model}</h3>
                <p>${car.description}</p>
                <p>Price: $${car.price} per day</p>
                <button class="rent-button" data-id="${car.id}">Rent Now</button>
            `;
            carListContainer.appendChild(carItem);
        });
        addRentButtonListeners();
    }

    // Function to add event listeners to rent buttons
    function addRentButtonListeners() {
        const rentButtons = document.querySelectorAll('.rent-button');
        rentButtons.forEach(button => {
            button.addEventListener('click', () => {
                const carId = button.getAttribute('data-id');
                rentCar(carId);
            });
        });
    }

    // Function to handle car rental
    async function rentCar(carId) {
        try {
            const response = await fetch(`/api/rent/${carId}`, {
                method: 'POST',
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error renting car:', error);
        }
    }

    // Initial fetch of cars
    fetchCars();
});