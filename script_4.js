const data = [
    {label: 'Включение станка', data: [true, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false]},
    {label: 'Выключение станка', data: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true]}
];

const options = {
    type: 'line',
    data: {
        labels: [
            '09:40:39.0681',
            '09:41:31.0088',
            '09:42:31.0079',
            '09:43:31.0070',
            '09:43:48.0102',
            '09:44:31.0060',
            '09:44:38.0675',
            '09:44:40.0067',
            '09:44:41.0083',
            '09:44:42.0475',
            '09:45:01.0800',
            '09:45:01.0801',
            '09:45:02.0044',
            '09:45:02.0045',
            '09:45:02.0644',
            '10:01:19.0663',
            '10:01:22.0009',
            '10:01:22.0106',
            '10:01:23.0008',
            '10:01:23.0061',
            '10:01:23.0126',
            '10:01:23.0296',
            '10:01:24.0057',
            '10:01:24.0092',
            '10:01:24.0647',
            '10:01:25.0647'
        ],
        datasets: data
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Время'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Режим станка'
                }
            }
        }
    }
};

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, options);
