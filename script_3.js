let spindleSpeeds = [2225.399902, 2224.800049, 2223.000000, 2226.120117, 2224.800049, 2223.719971];
let maxRpm = 5000; // Максимальная скорость вращения шпинделя (rpm)
let rpmStep = 10; // Шаг изменения скорости вращения шпинделя (rpm)
let timeInterval = 1000; // Интервал между изменением скорости вращения шпинделя (мс)
let timer;

function startSpindle() {
    for (let rpm = 0; ; rpm += rpmStep) {
        if (rpm > maxRpm) {
            rpm = 0;
        }
        spindleSpeeds.push(rpm);
        myChart.data.labels.push(`Точка ${spindleSpeeds.length}`);
        myChart.update();
        timer = setTimeout(startSpindle, timeInterval);
    }
}

startSpindle();
