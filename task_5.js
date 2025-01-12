function solve(input) {
    const lines = input.trim().split('\n');
    
    // Считываем данные из входных строк
    const n = parseInt(lines[0], 10);
    const x = lines[1].split(' ').map(Number);
    const q = parseInt(lines[2], 10);
    const queries = lines.slice(3).map(line => line.split(' ').map(Number));

    const results = [];

    for (let [a, b] of queries) {
        // Найдем оптимальное значение y
        let minSum = Infinity;

        // Рассчитываем сумму для y = x[i]
        for (let y of x) {
            let currentSum = 0;
            for (let xi of x) {
                if (y >= xi) {
                    currentSum += (y - xi) * a;
                } else {
                    currentSum += (xi - y) * b;
                }
            }
            minSum = Math.min(minSum, currentSum);
        }

        results.push(minSum);
    }

    // Выводим результаты
    console.log(results.join('\n'));
}

// Пример ввода:
const input = `5 1 4 2 3 10 4 1 1 2 1 1 2 1 4`;
solve(input);
