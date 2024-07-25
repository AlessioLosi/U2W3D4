const pexelsFetch = function () {
    fetch('https://api.pexels.com/v1/search?query=london', {
        headers: {
            Authorization: 'FuaUwJLjJJIJxtV4KtgoxdwQN0DgkjpZF5L7MMANzNWKeiqpNHGVZqbZ'
        }
    })
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('ERRORE');
            }
        })
        .then((data) => {
            console.log('data', data);
            changephoto(data.photos);
        })
        .catch((err) => {
            console.log(err);
        });
}

const imgSelect = document.getElementsByClassName('card-img-top');

const changephoto = function (photos) {
    const loadImages = document.getElementById('loadImages');
    loadImages.addEventListener('click', () => {
        Array.from(imgSelect).forEach((img, index) => {
            if (photos[0]) {
                img.src = photos[0].src.medium;
            }
        });
    });
}
const pexelsFetch1 = function () {
    fetch('https://api.pexels.com/v1/search?query=paris', {
        headers: {
            Authorization: 'FuaUwJLjJJIJxtV4KtgoxdwQN0DgkjpZF5L7MMANzNWKeiqpNHGVZqbZ'
        }
    })
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('ERRORE');
            }
        })
        .then((data) => {
            console.log('data', data);
            changephoto2(data.photos);
        })
        .catch((err) => {
            console.log(err);
        });
}


const changephoto2 = function (photos) {
    const loadImages2 = document.getElementById('loadImages2');
    loadImages2.addEventListener('click', () => {
        Array.from(imgSelect).forEach((img, index) => {
            if (photos[4]) {
                img.src = photos[4].src.medium;
            }
        });
    });
}


const deleteButton = function () {

    const arrayOfButtons = document.querySelectorAll('#hide');
    arrayOfButtons.forEach((button) => {
        button.innerHTML = 'hide';
        button.addEventListener('click', () => {
        const card = button.closest('.col-md-4');
        if (card) {
            card.remove();
        }
        });
    })
    
}


deleteButton();
pexelsFetch();
pexelsFetch1();
