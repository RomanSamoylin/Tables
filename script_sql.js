const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const chart = new CanvasJS.Chart('chart', {
    theme: 'light2',
    data: [
        {
            type: 'line',
            xValueType: 'dateTime',
            xValueFormatString: 'MM/dd/yyyy HH:mm:ss',
            color: 'blue',
            dataPoints: [
                { x: new Date('2023-03-01 13:49:56.0265'), y: 4000 },
                { x: new Date('2023-03-01 13:49:56.0349'), y: 4000 },
                { x: new Date('2023-03-01 13:50:15.0047'), y: 4006 },
                { x: new Date('2023-03-01 13:50:15.0048'), y: 4003 },
                { x: new Date('2023-03-01 13:50:16.0354'), y: 2035.8 },
                { x: new Date('2023-03-01 13:50:16.0364'), y: 50 },
                { x: new Date('2023-03-01 13:50:16.0423'), y: 4002.9 },
                { x: new Date('2023-03-01 13:50:16.0500'), y: 4000 },
                { x: new Date('2023-03-01 13:50:16.0554'), y: 40 },
                { x: new Date('2023-03-01 13:50:16.0740'), y: 3 },
                { x: new Date('2023-03-01 13:50:16.0764'), y: 30 },
                { x: new Date('2023-03-01 13:50:16.0864'), y: 1 },
                { x: new Date('2023-03-01 13:50:16.0865'), y: 4004.7 },
                { x: new Date('2023-03-01 13:50:16.0866'), y: 4003.6 },
                { x: new Date('2023-03-01 13:50:17.0047'), y: 4000 },
                { x: new Date('2023-03-01 13:50:17.0048'), y: 40 },
                { x: new Date('2023-03-01 13:50:17.0131'), y: 40 },
                { x: new Date('2023-03-01 13:50:17.0132'), y: 50 },
                { x: new Date('2023-03-01 13:50:17.0344'), y: 60 },
                { x: new Date('2023-03-01 13:50:17.0354'), y: 0 },
                { x: new Date('2023-03-01 13:50:18.0044'), y: 70 },
                { x: new Date('2023-03-01 13:50:18.0354'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0090'), y: 8 },
                { x: new Date('2023-03-01 13:50:19.0113'), y: 2 },
                { x: '2023-03-01 13:50:19.0160', y: 0 },
                { x: new Date('2023-03-01 13:50:19.0163'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0165'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0193'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0213'), y: 0 },
                { x: new Date('2023-03-01 13:50:37.0598'), y: 0 },
            ]
        },
        {
            type: 'line',
            xValueType: 'dateTime',
            xValueFormatString: 'MM/dd/yyyy HH:mm:ss',
            color: 'red',
            dataPoints: [
                { x: new Date('2023-03-01 13:49:56.0339'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0413'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0415'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0417'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0419'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0421'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0423'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0425'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0427'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0429'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0431'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0433'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0435'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0437'), y: 1666.9 },
                { x: new Date('2023-03-01 13:49:56.0439'), y: 1666.9 },
                { x: new Date('2023-03-01 13:50:14.0425'), y: 5318.7 },
                { x: new Date('2023-03-01 13:50:14.0427'), y: 5618.6 },
                { x: new Date('2023-03-01 13:50:14.0429'), y: 5331.6 },
                { x: new Date('2023-03-01 13:50:14.0431'), y: 2270.3 },
                { x: new Date('2023-03-01 13:50:14.0433'), y: 2539.3 },
                { x: new Date('2023-03-01 13:50:14.0435'), y: 2497.4 },
                { x: new Date('2023-03-01 13:50:14.0437'), y: 3315.7 },
                { x: new Date('2023-03-01 13:50:14.0439'), y: 3182.4 },
                { x: new Date('2023-03-01 13:50:14.0441'), y: 140.0 },
                { x: new Date('2023-03-01 13:50:14.0443'), y: 3549.5 },
                { x: new Date('2023-03-01 13:50:14.0445'), y: 3341.4 },
                { x: new Date('2023-03-01 13:50:14.0447'), y: 2864.0 },
                { x: new Date('2023-03-01 13:50:14.0449'), y: 2669.7 },
                { x: new Date('2023-03-01 13:50:14.0451'), y: 4539.9 },
                { x: new Date('2023-03-01 13:50:14.0453'), y: 2661.1 },
                { x: new Date('2023-03-01 13:50:14.0455'), y: 4969.2 },
                { x: new Date('2023-03-01 13:50:14.0457'), y: 5161.8 },
                { x: new Date('2023-03-01 13:50:14.0459'), y: 5512.9 },
                { x: new Date('2023-03-01 13:50:14.0461'), y: 5602.9 },
                { x: new Date('2023-03-01 13:50:14.0463'), y: 5327.4 },
                { x: new Date('2023-03-01 13:50:14.0465'), y: 5007.1 },
                { x: new Date('2023-03-01 13:50:14.0467'), y: 4802.5 },
                { x: new Date('2023-03-01 13:50:14.0469'), y: 4651.6 },
                // ...
                { x: new Date('2023-03-01 13:50:14.0473'), y: 4548.2 },
                { x: new Date('2023-03-01 13:50:14.0475'), y: 2634.4 },
                { x: new Date('2023-03-01 13:50:14.0477'), y: 2446.2 },
                { x: new Date('2023-03-01 13:50:14.0479'), y: 130.0 },
                { x: new Date('2023-03-01 13:50:14.0481'), y: 2886.8 },
                { x: new Date('2023-03-01 13:50:14.0483'), y: 3506.7 },
                { x: new Date('2023-03-01 13:50:14.0485'), y: 3643.3 },
                { x: new Date('2023-03-01 13:50:14.0487'), y: 3363.0 },
                { x: new Date('2023-03-01 13:50:14.0489'), y: 120.0 },
                { x: new Date('2023-03-01 13:50:14.0491'), y: 3850.0 },
                { x: new Date('2023-03-01 13:50:14.0493'), y: 2035.2 },
                { x: new Date('2023-03-01 13:50:14.0495'), y: 4000.0 },
                { x: new Date('2023-03-01 13:50:14.0497'), y: 110.0 },
                { x: new Date('2023-03-01 13:50:14.0499'), y: 100.0 },
                { x: new Date('2023-03-01 13:50:14.0501'), y: 4006.4 },
                { x: new Date('2023-03-01 13:50:14.0503'), y: 3 },
                { x: new Date('2023-03-01 13:50:14.0505'), y: 4000.0 },
                { x: new Date('2023-03-01 13:50:16.0354'), y: 2035.8 },
                { x: new Date('2023-03-01 13:50:16.0364'), y: 50 },
                { x: new Date('2023-03-01 13:50:16.0423'), y: 4002.9 },
                { x: new Date('2023-03-01 13:50:16.0500'), y: 4000 },
                { x: new Date('2023-03-01 13:50:16.0554'), y: 40 },
                { x: new Date('2023-03-01 13:50:16.0740'), y: 3 },
                { x: new Date('2023-03-01 13:50:16.0764'), y: 30 },
                { x: new Date('2023-03-01 13:50:16.0864'), y: 1 },
                { x: new Date('2023-03-01 13:50:16.0865'), y: 4004.7 },
                { x: new Date('2023-03-01 13:50:16.0866'), y: 4003.6 },
                { x: new Date('2023-03-01 13:50:17.0047'), y: 4000 },
                { x: new Date('2023-03-01 13:50:17.0048'), y: 40 },
                { x: new Date('2023-03-01 13:50:17.0131'), y: 40 },
                { x: new Date('2023-03-01 13:50:17.0132'), y: 50 },
                { x: new Date('2023-03-01 13:50:17.0344'), y: 60 },
                { x: new Date('2023-03-01 13:50:17.0354'), y: 0 },
                { x: new Date('2023-03-01 13:50:18.0044'), y: 70 },
                { x: new Date('2023-03-01 13:50:18.0354'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0090'), y: 8 },
                { x: new Date('2023-03-01 13:50:19.0113'), y: 2 },
                { x: new Date('2023-03-01 13:50:19.0160'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0163'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0165'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0193'), y: 0 },
                { x: new Date('2023-03-01 13:50:19.0213'), y: 0 },
                { x: new Date('2023-03-01 13:50:37.0598'), y: 0 },
            ]
        }
    ]
});

var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
        text: "График скорости шпинделя"
    },
    axisX: {
        valueFormatString: "MM/dd/yyyy HH:mm:ss"
    },
    axisY: {
        title: "Скорость шпинделя"
    },
    data: dataPoints
});

chart.render();



             
