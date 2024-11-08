const chart = new Chart(document.getElementById('myChart'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Состояние станка',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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

// Update the chart with parsed data
const parseData = (data) => {
    const states = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
    let currentState = null;

    data.forEach((line) => {
        if (line.includes('ПЛЦ message:СТАНОК ВКЛЮЧЕН')) {
            currentState = 'on';
        } else if (line.includes('ПЛЦ message:СТАНОК ВЫКЛЮЧЕН')) {
            currentState = 'off';
        }

        if (currentState !== null) {
            states.push(currentState);
        }
    });

    chart.data.labels = states.map((state, index) => `Time ${index + 1}`);
    chart.data.datasets[0].data = states.map((state) => state === 'on' ? 1 : 0);
    chart.update();
};

// Call the parseData function with the provided data
parseData([
    // Your data here, processed as needed
]);
