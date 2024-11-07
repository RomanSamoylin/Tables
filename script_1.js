let spindleSpeeds = [2225.399902, 2224.800049, 2223.000000, 2226.120117, 2224.800049, 2223.719971];
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line', // Тип графика: линия
    data: {
        labels: ['Точка 1', 'Точка 2', 'Точка 3', 'Точка 4', 'Точка 5', 'Точка 6'], // Имя для каждой точки на оси x
        datasets: [{
            label: 'Скорость вращения шпинделя', // Имя для графика
            data: spindleSpeeds, // Данные для графика
            borderColor: 'rgba(75, 192, 192, 1)', // Цвет границы линии
            fill: false // Разрешить заливку между точками
        }]
    },
    options: {
        responsive: true, // Отвечать на изменения размера окна браузера
        scales: {
            x: { // Настройки оси x
                display: true, // Показать ось x
                scaleLabel: { // Показать метки для оси x
                    display: true,
                    labelString: 'Время (сек.)'
                }
            },
            y: { // Настройки оси y
                display: true, // Показать ось y
                scaleLabel: { // Показать метки для оси y
                    display: true,
                    labelString: 'Скорость вращения шпинделя (rpm)'
                }
            }
        }
    }
});
