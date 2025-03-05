let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelectorAll('.toggle_info_btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const wrapper = this.closest('.more_information_toggle')
                            .querySelector('.info_panel_wrapper');

        // Переключаем класс .active для анимации блока и SVG
        wrapper.classList.toggle('active');
        this.classList.toggle('active');
    });
});document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a"); // Находим все ссылки

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            // Пропускаем ссылки, связанные с загрузкой
            if (this.classList.contains("download-btn")) {
                return; // не выполняем анимацию и переход для кнопки скачивания
            }

            // Проверяем, если это кнопка тоггла — прерываем выполнение
            if (this.classList.contains("toggle_info_btn") || this.closest(".more_information_toggle")) {
                return;
            }

            if (this.getAttribute("target") === "_blank") return; // Игнорируем ссылки, открывающиеся в новом окне

            e.preventDefault(); // Отменяем стандартный переход
            const href = this.href; // Получаем ссылку

            document.body.classList.add("fade-out"); // Добавляем эффект исчезновения

            setTimeout(() => {
                window.location.href = href; // Через 500мс переходим на новую страницу
            }, 500);
        });
    });
});
