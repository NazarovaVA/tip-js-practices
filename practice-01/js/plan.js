"use strict";

const totalTasks = 10;
const completedTasks = 7;
const dailyLimit = 3;

let hasError = false;

// Проверка totalTasks и completedTasks
if (typeof totalTasks === 'string' || typeof completedTasks === 'string') {
	console.error('Ошибка: вместо числа передана строка.');
	hasError = true;
}
else if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
	console.error('Ошибка: недопустимое числовое значение.');
	hasError = true;
}
else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
	console.error('Ошибка: дробное количество.');
	hasError = true;
}
else if (totalTasks < 0 || completedTasks < 0) {
	console.error('Ошибка: отрицательное количество.');
	hasError = true;
}
else if (totalTasks > 1000 || completedTasks > 1000) {
	console.error('Ошибка: превышена верхняя граница.');
	hasError = true;
}
else if (completedTasks > totalTasks) {
	console.error('Ошибка: некорректное число выполненных задач.');
	hasError = true;
}

// Проверка dailyLimit
else if (typeof dailyLimit === 'string') {
	console.error('Ошибка: дневная норма задана строкой.');
	hasError = true;
}
else if (!Number.isFinite(dailyLimit)) {
	console.error('Ошибка: недопустимое числовое значение.');
	hasError = true;
}
else if (!Number.isInteger(dailyLimit)) {
	console.error('Ошибка: дробной дневной нормы быть не должно.');
	hasError = true;
}
else if (dailyLimit < 1) {
	console.error('Ошибка: дневная норма должна быть не меньше 1.');
	hasError = true;
}
else if (dailyLimit > 1000) {
	console.error('Ошибка: превышена верхняя граница нормы.');
	hasError = true;
}

if (!hasError) {
	let remainingTasks = totalTasks - completedTasks;

	if (remainingTasks === 0) {
		console.log('Все задачи уже выполнены.');
		console.log('Потребуется дней: 0');
	} else {
		console.log(`Осталось задач: ${remainingTasks}`);
		let days = 0;

		while (remainingTasks > 0) {
			days++;
			let tasksToday = Math.min(dailyLimit, remainingTasks);
			remainingTasks -= tasksToday;
			console.log(`День ${days}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
		}

		console.log(`Потребуется дней: ${days}`);
	}
}