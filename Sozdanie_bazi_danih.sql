-- Создание базы данных для мониторинга ЧПУ станка
CREATE DATABASE cnc_monitoring;
USE cnc_monitoring;

-- Таблица для хранения основных параметров станка
CREATE TABLE machine_status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    timestamp DATETIME,
    spindle_speed INT,
    feed_rate FLOAT,
    temperature FLOAT,
    vibration FLOAT,
    current_program VARCHAR(100),
    status ENUM('running', 'idle', 'error') 
);

-- Таблица для хранения данных о режущем инструменте
CREATE TABLE tool_monitoring (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tool_number INT,
    wear_level FLOAT,
    total_cutting_time INT,
    last_replacement_date DATETIME
);

-- Таблица для логирования ошибок
CREATE TABLE error_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    timestamp DATETIME,
    error_code VARCHAR(50),
    error_description TEXT,
    severity ENUM('low', 'medium', 'high')
);

-- Представление для быстрого анализа текущего состояния
CREATE VIEW current_machine_performance AS
SELECT 
    spindle_speed,
    feed_rate,
    temperature,
    status,
    timestamp
FROM machine_status
ORDER BY timestamp DESC
LIMIT 1;

-- Процедура для вставки данных мониторинга
DELIMITER //
CREATE PROCEDURE insert_machine_data(
    IN p_spindle_speed INT,
    IN p_feed_rate FLOAT, 
    IN p_temperature FLOAT,
    IN p_vibration FLOAT,
    IN p_current_program VARCHAR(100),
    IN p_status ENUM('running', 'idle', 'error')
)
BEGIN
    INSERT INTO machine_status (
        timestamp, 
        spindle_speed, 
        feed_rate, 
        temperature, 
        vibration, 
        current_program, 
        status
    ) VALUES (
        NOW(), 
        p_spindle_speed, 
        p_feed_rate, 
        p_temperature, 
        p_vibration, 
        p_current_program, 
        p_status
    );
END //
DELIMITER ;

-- Python скрипт для визуализации данных
import matplotlib.pyplot as plt
import pandas as pd
import mysql.connector

def plot_cnc_monitoring():
    # Подключение к базе данных
    connection = mysql.connector.connect(
        host='localhost',
        user='your_username',
        password='your_password',
        database='cnc_monitoring'
    )

    # Загрузка данных
    query = "SELECT timestamp, spindle_speed, feed_rate, temperature FROM machine_status"
    df = pd.read_sql(query, connection)

    # Создание мультиграфика
    fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(10, 12))
    
    # График скорости шпинделя
    ax1.plot(df['timestamp'], df['spindle_speed'], label='Скорость шпинделя')
    ax1.set_title('Скорость шпинделя')
    ax1.set_xlabel('Время')
    ax1.set_ylabel('Обороты')
    
    # График подачи
    ax2.plot(df['timestamp'], df['feed_rate'], label='Подача', color='green')
    ax2.set_title('Скорость подачи')
    ax2.set_xlabel('Время')
    ax2.set_ylabel('Мм/мин')
    
    # График температуры
    ax3.plot(df['timestamp'], df['temperature'], label='Температура', color='red')
    ax3.set_title('Температура станка')
    ax3.set_xlabel('Время')
    ax3.set_ylabel('Градусы')

    plt.tight_layout()
    plt.show()

# Вызов функции визуализации
plot_cnc_monitoring()
