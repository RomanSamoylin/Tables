const fs = require('fs');
const readline = require('readline');

const filePath = '20241108140817.mon';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const lines = data.split('\n');

    let график = [];

    lines.forEach((line) => {
        if (line.includes('TIME SYNCH')) {
            // пропускаем строку TIME SYNCH
            return;
        }

        const parts = line.split('|');
        if (parts.length !== 8) {
            // пропускаем строки с нестандартной структурой
            return;
        }

        const time = parts[0].trim();
        const включениеСтанка = parts[1].trim() === 'MUSP ENABLED';
        const выключениеСтанка = parts[1].trim() === 'MUSP DISABLED';

        график.push({time, включениеСтанка, выключениеСтанка});
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: график.map(item => item.time),
            datasets: [{
                label: 'Включение станка',
                data: график.map(item => item.включениеСтанка ? 1 : 0),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }, {
                label: 'Выключение станка',
                data: график.map(item => item.выключениеСтанка ? 1 : 0),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    chart.update();
});
