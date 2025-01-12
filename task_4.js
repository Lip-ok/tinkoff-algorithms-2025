// РЕШЕНО С ОШИБКОЙ

function maxBalancedSize(input) {
    // Парсим входные данные
    const lines = input.trim().split("\n");
    const [n, k, m] = lines[0].split(" ").map(Number);

    // Собираем массив количества каждого элемента
    const counts = [];
    for (let i = 1; i <= n; i++) {
        const [, count] = lines[i].split(" ").map(Number);
        counts.push(count);
    }

    // Функция для проверки, возможно ли создать `k` последовательностей длины `length`
    function canFormSequences(length) {
        let totalSequences = 0;
        for (const count of counts) {
            totalSequences += Math.min(Math.floor(count / length), m); // Учитываем ограничение на m элементов
        }
        return totalSequences >= k; // Можно ли сформировать хотя бы k последовательностей
    }

    // Бинарный поиск по длине возможной последовательности
    let left = 1; // Минимальная длина последовательности
    let right = Math.max(...counts); // Максимальная длина последовательности
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canFormSequences(mid)) {
            result = mid * k; // Обновляем результат
            left = mid + 1;   // Ищем более длинную последовательность
        } else {
            right = mid - 1;  // Ищем более короткую последовательность
        }
    }

    return result;
}

// Пример использования:
const input = `3 5 3
5 5 
7 6
9 4`;
console.log(maxBalancedSize(input)); // Вывод: 10 а не 14
