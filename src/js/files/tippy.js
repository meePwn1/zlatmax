// Подключение функционала "Чертоги Фрилансера"
import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Подключение с node_modules
import tippy from 'tippy.js';

// Подключение стилей с src/scss/libs
import "../../scss/libs/tippy.scss";
import 'tippy.js/animations/scale.css';
// Подключение стилей с node_modules
// import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('[data-tippy-content]', {
	content: "Вам будут начислены баллы в размере 5% 	от стоимости покупки.Их можно будет использовать 	на оплату последующих заказов.",
	animation: 'scale'

});