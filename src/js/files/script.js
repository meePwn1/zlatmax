// Подключение функционала "Чертоги Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";


document.addEventListener('click', menuAction);

function menuAction(e) {
	let targetElement = e.target;

	if (targetElement.classList.contains('catalog-header__link') && targetElement.closest('.catalog-header__item').querySelector('.submenu-header')) {
		let menuItem = targetElement.closest('.catalog-header__item');
		if (!menuItem.classList.contains('_active')) {
			document.querySelectorAll('.catalog-header__item').forEach(item => item.classList.remove('_active'))
			menuItem.classList.add('_active');
		} else {
			menuItem.classList.remove('_active');
		}
	} else {
		if (!targetElement.closest('.catalog-header__item')) {
			document.querySelectorAll('.catalog-header__item').forEach(item => item.classList.remove('_active'))
		}
	}

	if (targetElement.closest('.menu__link') && targetElement.closest('.menu__item_catalog')) {
		document.documentElement.classList.add('submenu-open');
		e.preventDefault();
	}

	if (targetElement.closest('.catalog-header__back')) {
		document.documentElement.classList.remove('submenu-open')
	}

	if (targetElement.closest('.submenu-header__back')) {
		document.querySelectorAll('.catalog-header__item').forEach(item => item.classList.remove('_active'))
	}

	if (targetElement.closest('.submenu-header__category')) {
		targetElement.closest('.submenu-header__column').classList.add('_active');
		e.stopPropagation();
	}

	if (targetElement.closest('.submenu-header__back-list')) {
		document.querySelectorAll('.submenu-header__column').forEach(item => item.classList.remove('_active'));
	}
}

document.addEventListener("selectCallback", function (e) {
	// Селект 
	const currentSelect = e.detail.select;
	const subSelect = document.querySelector('.product-mail__value_subvalue');
	const subSelectTitle = subSelect.querySelector('.select__content');
	const selectOptions = subSelect.querySelector('.select__options');
	const select = subSelect.querySelector('select')
	switch (currentSelect.options[currentSelect.selectedIndex].innerHTML) {
		case 'Узбекистан':
			if (subSelectTitle) {
				subSelectTitle.innerHTML = '';
			}
			selectOptions.innerHTML = '';
			selectOptions.insertAdjacentHTML('beforeend', `
			<button class="select__option" data-value="1" type="button">Ташкент</button>
			<button class="select__option" data-value="2" type="button">Наваи</button>
			<button class="select__option" data-value="3" type="button">Джиззах</button>
			<button class="select__option" data-value="4" type="button">Наманган</button>
			`)

			select.innerHTML = '';
			[...selectOptions.children].forEach((item, index) => {
				const option = document.createElement('option');
				option.text = item.innerHTML;
				option.value = index + 1;
				select.add(option);
			})
			break;
		case 'Россия':
			if (subSelectTitle) {
				subSelectTitle.innerHTML = '';
			}
			selectOptions.innerHTML = '';
			selectOptions.insertAdjacentHTML('beforeend', `
			<button class="select__option" data-value="1" type="button">Москва</button>
			<button class="select__option" data-value="2" type="button">Санкт-Петербург</button>
			<button class="select__option" data-value="3" type="button">Екатеринбург</button>
			<button class="select__option" data-value="4" type="button">Казань</button>
			`)

			select.innerHTML = '';
			[...selectOptions.children].forEach((item, index) => {
				const option = document.createElement('option');
				option.text = item.innerHTML;
				option.value = index + 1;
				select.add(option);
			})
			break;

		case 'Казахстан':
			if (subSelectTitle) {
				subSelectTitle.innerHTML = '';
			}
			selectOptions.innerHTML = '';
			selectOptions.insertAdjacentHTML('beforeend', `
			<button class="select__option" data-value="1" type="button">Астана</button>
			<button class="select__option" data-value="2" type="button">Алматы</button>
			<button class="select__option" data-value="3" type="button">Семей</button>
			<button class="select__option" data-value="4" type="button">Актобе</button>
			`)

			select.innerHTML = '';
			[...selectOptions.children].forEach((item, index) => {
				const option = document.createElement('option');
				option.text = item.innerHTML;
				option.value = index + 1;
				select.add(option);
			})
			break;
		case 'Таджикистан':
			if (subSelectTitle) {
				subSelectTitle.innerHTML = '';
			}
			selectOptions.innerHTML = '';
			selectOptions.insertAdjacentHTML('beforeend', `
			<button class="select__option" data-value="1" type="button">Душанбе</button>
			<button class="select__option" data-value="2" type="button">Педжикент</button>
			<button class="select__option" data-value="3" type="button">Ура-Тюбе</button>
			<button class="select__option" data-value="4" type="button">Худжанд</button>
			`)

			select.innerHTML = '';
			[...selectOptions.children].forEach((item, index) => {
				const option = document.createElement('option');
				option.text = item.innerHTML;
				option.value = index + 1;
				select.add(option);
			})
			break;
		default:
			break;
	}
});


