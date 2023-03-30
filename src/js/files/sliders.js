/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper с node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Autoplay, Parallax, Thumbs } from 'swiper';
import { isMobile } from './functions.js';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей с node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	let subSlider;
	// Список слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.main-page__slider')) { // Указываем класс нужного слайдера
		// Створюємо слайдер
		const mainSlider = new Swiper('.main-page__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.slidermain__bullets',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + ('<i></i>') + '</span>';
				}
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		const sliderFractionAll = document.querySelector('.slidermain__all');
		const sliderFractionCurrent = document.querySelector('.slidermain__current');
		sliderFractionAll.innerHTML = mainSlider.slides.length;
		sliderFractionCurrent.innerHTML = mainSlider.activeIndex > 9 ? (mainSlider.activeIndex + 1) : `0${mainSlider.activeIndex + 1}`
		mainSlider.on('slideChange', function () {
			sliderFractionCurrent.innerHTML = mainSlider.activeIndex > 9 ? (mainSlider.activeIndex + 1) : `0${mainSlider.activeIndex + 1}`;
			document.querySelectorAll('.slidermain__bullets .swiper-pagination-bullet i')[mainSlider.previousIndex].style.animationPlayState = 'running'
		});
		document.querySelectorAll('.slidermain__bullets .swiper-pagination-bullet i').forEach(item => {
			item.addEventListener('animationend', () => {
				if (mainSlider.isEnd) {
					mainSlider.slideTo(0);
				} else {
					document.querySelector('.slidermain__bullets .swiper-pagination-bullet i').style.autoplay = 'none'
					mainSlider.slideNext();
				}
			});
		})
		initAutoPlay('main-page__slider', 'slidermain__bullets');
	};
	if (document.querySelector('.product-slider__slider')) { // Указываем класс нужного слайдера
		// Створюємо слайдер
		new Swiper('.product-slider__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация

			pagination: {
				el: '.product-slider__bullets',
				clickable: true,
				dynamicBullets: true,
				dynamicMainBullets: 3,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + ('<i></i>') + '</span>';
				}
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
					autoHeight: true
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.product-news__slider')) { // Указываем класс нужного слайдера
		// Створюємо слайдер
		new Swiper('.product-news__slider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация

			pagination: {
				el: '.product-news__bullets',
				clickable: true,
				dynamicBullets: true,
				dynamicMainBullets: 3,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + ('<i></i>') + '</span>';
				}
			},


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
					autoHeight: true
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.image-product__subslide')) { // Указываем класс нужного слайдера
		// Створюємо слайдер
		subSlider = new Swiper('.image-product__subslide', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 15,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.image-product__mainslider')) { // Указываем класс нужного слайдера
		// Створюємо слайдер
		new Swiper('.image-product__mainslider', { // Указываем класс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			thumbs: {
				swiper: subSlider
			},

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			*/
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация




			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/*
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/
			/*
				// Брейкпоінти
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
						autoHeight: true
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					1280: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
				},
	*/
			// События
			on: {

			}
		});
	}
};

function initAutoPlay(slider, progressBar) {
	if (isMobile.any()) {
		document.querySelector(`.${slider}`).addEventListener('touchstart', (e) => {
			const activeBullet = document.querySelector(`.${progressBar} .swiper-pagination-bullet-active i`);
			activeBullet.style.animationPlayState = 'paused';
		});

		document.querySelector(`.${slider}`).addEventListener('touchend', (e) => {
			const activeBullet = document.querySelector(`.${progressBar} .swiper-pagination-bullet-active i`);
			activeBullet.style.animationPlayState = 'running';
		})

	} else {
		document.querySelector(`.${slider}`).addEventListener('mouseover', () => {
			const activeBullet = document.querySelector(`.${progressBar} .swiper-pagination-bullet-active i`);
			activeBullet.style.animationPlayState = 'paused';
		});

		document.querySelector(`.${slider}`).addEventListener('mouseout', () => {
			const activeBullet = document.querySelector(`.${progressBar} .swiper-pagination-bullet-active i`);
			activeBullet.style.animationPlayState = 'running';
		})
	}
}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролл на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});