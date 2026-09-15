"use strict";

const totalTasks = 10;
const completedTasks = 7;

// Проверка на строки
if (typeof totalTasks === 'string' || typeof completedTasks === 'string') {
	console.error('Ошибка: вместо числа передана строка.');
}
// Проверка на NaN и Infinity
else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
	console.error('Ошибка: недопустимое числовое значение.');
}
// Проверка на дробные числа
else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
	console.error('Ошибка: дробное количество.');
}
// Проверка на отрицательные числа
else if (totalTasks < 0 || completedTasks < 0) {
	console.error('Ошибка: отрицательное количество.');
}
// Проверка верхней границы
else if (totalTasks > 1000 || completedTasks > 1000) {
	console.error('Ошибка: превышена верхняя граница.');
}
// Проверка на превышение выполненных задач
else if (completedTasks > totalTasks) {
	console.error('Ошибка: выполнено больше, чем существует.');
}
// Проверка на отсутствие задач
else if (totalTasks === 0 && completedTasks === 0) {
	console.log('Задач пока нет.');
}
// Основной расчёт
else {
	const remaining = totalTasks - completedTasks;
	const progress = ((completedTasks / totalTasks) * 100).toFixed(1);
	let status = 'В работе';

	if (completedTasks === 0) {
		status = 'Не начато';
	} else if (completedTasks === totalTasks) {
		status = 'Завершено';
	}

	console.log(`Всего задач: ${totalTasks}
Выполнено: ${completedTasks}
Осталось: ${remaining}
Прогресс: ${progress}%
Статус: ${status}`);
}