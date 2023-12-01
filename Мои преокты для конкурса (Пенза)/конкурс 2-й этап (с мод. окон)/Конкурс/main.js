document.addEventListener('DOMContentLoaded', function() {
    var images = [
        'https://proprikol.ru/wp-content/uploads/2019/11/krasivye-novogodnie-fotografii-63.jpg',
        'https://new-year-party.ru/wp-content/uploads/2016/07/present-07.jpg',
        'https://cojo.ru/wp-content/uploads/2022/12/novogodnie-oboi-7-1.webp',
        'https://w-dog.ru/wallpapers/8/17/509839894487437/novyj-god-prazdnik-s-novym-godom-novogodnie-igrushki-svechi-svechka-ogon.jpg',
        'https://ferma-biz.ru/wp-content/uploads/2022/08/Cats_Christmas_Kittens_457495.jpg'
    ];
    
    var currentIndex = 0;
    var imageElement = document.querySelector('header');
    
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.style.animation = 'none';
        setTimeout(function() {
            imageElement.style.animation = '';
            imageElement.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        }, 10);
    }, 5000);
});


//Вызов Функции загрузки
function showSnowfall(event) {
    event.preventDefault(); // предотвращаем отправку формы
    var locationInput = document.querySelector('input[name="location"]');
    var peopleInput = document.querySelector('input[type="number"]');
    var dateInput = document.querySelector('input[type="date"]');
    var timeInput = document.querySelector('input[type="time"]');

    // Проверяем, заполнены ли все поля формы
    if (locationInput.value !== "" && peopleInput.value !== "" && dateInput.value !== "" && timeInput.value !== "") {
        // Отображаем анимацию загрузки
        var loadingGif = document.getElementById('loading-gif');
        loadingGif.style.display = 'block';

        // Задержка перед переходом на другую страницу
        setTimeout(function() {
            window.location.href = 'seat.html';
        }, 3000);
    }
}

//Модальные окна входа и регистрации
var currentModal = null;

function openSignUpModal() {
    closeModal(currentModal);
    var modal = document.getElementById("signupModal");
    modal.classList.add("show");
    modal.style.display = "block";
    currentModal = "signupModal";
}

function openLoginModal() {
    closeModal(currentModal);
    var modal = document.getElementById("loginModal");
    modal.classList.add("show");
    modal.style.display = "block";
    currentModal = "loginModal";
}

function closeModal(modalId) {
    if (modalId) {
        var modal = document.getElementById(modalId);
        modal.classList.remove("show");
        modal.style.display = "none";
    }
}

