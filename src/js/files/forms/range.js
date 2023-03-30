// Подключение с node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей с scss/base/forms/range.scss
// в файле scss/forms/forms.scss


// Подключение стилей с node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const sliderItems = document.querySelectorAll('[data-range]');
	if (sliderItems.length) {
		console.log(sliderItems.length);
		sliderItems.forEach((sliderItem, index) => {

			const fromValue = sliderItem.querySelector('[data-range-from]')
			const toValue = sliderItem.querySelector('[data-range-to]')
			const item = sliderItem.querySelector('[data-range-item]');
			noUiSlider.create(item, {
				start: [fromValue.placeholder, toValue.placeholder],
				connect: true,
				tooltips: [true, false],
				range: {
					'min': [+fromValue.dataset.rangeFrom],
					'max': [+toValue.dataset.rangeTo],
				},
				format: {
					to: function (value) {
						return value.toFixed(0) + ' руб.';
					},
					from: function (value) {
						return Number(value);
					}
				}
			});
			if (index > 0) {
				item.noUiSlider.options.format.to = function (value) {
					return value.toFixed(0) + ' мм'
				}
			}

			fromValue.addEventListener('input', setPriceValues);
			toValue.addEventListener('input', setPriceValues);

			function setPriceValues() {
				let priceStartValue;
				let priceEndValue;
				if (fromValue.value != '') {
					priceStartValue = fromValue.value;
				}
				if (toValue.value != '') {
					priceEndValue = toValue.value;
				}
				item.noUiSlider.set([priceStartValue, priceEndValue]);
			}
			item.noUiSlider.on('update', (values, handle) => {
				fromValue.placeholder = values[0];
				toValue.placeholder = values[1];
			})
		})
	}
}

rangeInit();
