"use strict";

const totalTasksInput = "10";
const completedTasksInput = "7";

function parseCount(value, fieldName) {
	// Сначала убеждаемся, что передана именно строка
	if (typeof value !== 'string') {
		console.error(`Ошибка: ${fieldName} должен быть строкой.`);
		return null;
	}

	// Удаляем пробелы по краям
	const trimmed = value.trim();

	// Отклоняем пустой ввод и строку из пробелов
	if (trimmed === '') {
		console.error(`Ошибка: ${fieldName} не может быть пустым.`);
		return null;
	}

	// Преобразуем через Number()
	const numberValue = Number(trimmed);

	// Проверяем, что получилось конечное число
	if (!Number.isFinite(numberValue)) {
		console.error(`Ошибка: ${fieldName} содержит недопустимое числовое значение.`);
		return null;
	}

	// Проверяем целое число
	if (!Number.isInteger(numberValue)) {
		console.error(`Ошибка: ${fieldName} должен быть целым числом.`);
		return null;
	}

	return numberValue;
}

const totalTasks = parseCount(totalTasksInput, 'totalTasks');
const completedTasks = parseCount(completedTasksInput, 'completedTasks');

if (totalTasks === null || completedTasks === null) {
	// Ошибка уже выведена в parseCount
} else {
	// Ограничения задания 3
	if (totalTasks < 0 || completedTasks < 0) {
		console.error('Ошибка: отрицательное количество.');
	} else if (totalTasks > 1000 || completedTasks > 1000) {
		console.error('Ошибка: превышена верхняя граница.');
	} else if (completedTasks > totalTasks) {
		console.error('Ошибка: выполнено больше, чем существует.');
	} else if (totalTasks === 0 && completedTasks === 0) {
		console.log('Задач пока нет.');
	} else {
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
}