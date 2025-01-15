const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

// Конфигурация подключения к базе данных
const pool = mysql.createPool({
    host: 'l127.0.0.1',
    user: 'root',
    password: 'victoria123',
    database: 'CNC_Monitoring'
});

// Эндпоинт для получения данных о скорости шпинделя
app.get('/api/spindle-speed', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT timestamp, speed FROM SpindleData ORDER BY timestamp'
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Эндпоинт для получения данных о скорости подачи
app.get('/api/feed-rate', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT timestamp, feed_rate FROM FeedData ORDER BY timestamp'
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
// Этот код обеспечивает:
// Заполнение SQL базы данных
// Визуализацию данных с помощью Chart.js
// Backend API для получения данных
// Графики скорости шпинделя и подачи