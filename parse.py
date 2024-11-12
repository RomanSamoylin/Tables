import pyHook
import pywinhook
import win32gui
import win32con
import time
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import numpy as np
import pyautogui

# Функция для парсинга данных из окна
def parse_data():
    # Получаем список окон
    hwnds = win32gui.EnumWindows()
    
    # Ищем окно с именем "ARMDMonitor"
    for hwnd in hwnds:
        if win32gui.GetWindowText(hwnd) == "ARMDMonitor":
            # Получаем координаты окна
            left, top, right, bottom = win32gui.GetWindowRect(hwnd)
            
            # Получаем размеры окна
            width, height = right - left, bottom - top
            
            # Получаем изображение окна
            screenshot = pyautogui.screenshot(region=(left, top, width, height))
            
            # Обрабатываем изображение
            image = np.array(screenshot)
            
            # Поскольку изображение получается в формате BGR, а matplotlib ожидает RGB, нам нужно преобразовать его
            image = image[:, :, ::-1]
            
            # Поскольку мы получаем изображение в формате PIL Image, а matplotlib ожидает numpy массив, нам нужно преобразовать его
            image = np.array(image)
            
            # Возвращаем изображение
            return image

# Функция для парсинга данных из окна
def parse_text():
    # Получаем список окон
    hwnds = win32gui.EnumWindows()
    
    # Ищем окно с именем "ARMDMonitor"
    for hwnd in hwnds:
        if win32gui.GetWindowText(hwnd) == "ARMDMonitor":
            # Получаем текст из окна
            text = win32gui.GetWindowText(hwnd)
            
            # Возвращаем текст
            return text

# Функция для парсинга скорости вращения шпинделя
def parse_spindle_speed():
    # Получаем текст из окна
    text = parse_text()
    
    # Ищем строку с именем "SPINDLE SPEED"
    for line in text.splitlines():
        if line.startswith("SPINDLE SPEED"):
            # Возвращаем значение скорости вращения шпинделя
            return float(line.split(":")[1].strip())

# Функция для парсинга состояния станка
def parse_station_status():
    # Получаем текст из окна
    text = parse_text()
    
    # Ищем строку с именем "СТАНОК ВКЛЮЧЕН" или "СТАНОК ВЫКЛЮЧЕН"
    for line in text.splitlines():
        if line.startswith("СТАНОК ВКЛЮЧЕН"):
            # Возвращаем значение состояния станка
            return "ВКЛЮЧЕН"
        elif line.startswith("СТАНОК ВЫКЛЮЧЕН"):
            # Возвращаем значение состояния станка
            return "ВЫКЛЮЧЕН"

# Функция для построения графика
def plot_graph():
    # Получаем значения скорости вращения шпинделя
    spindle_speeds = []
    for i in range(10):
        spindle_speeds.append(parse_spindle_speed())
        time.sleep(1)
    
    # Построение графика
    plt.plot(spindle_speeds)
    plt.xlabel("Время")
    plt.ylabel("Скорость вращения шпинделя")
    plt.title("График скорости вращения шпинделя")
    plt.show()

# Основная функция
def main():
    while True:
        # Проверяем, открыто ли окно "ARMDMonitor"
        if win32gui.FindWindow(None, "ARMDMonitor") != 0:
            # Парсим данные из окна
            parse_text = parse_text()
            spindle_speed = parse_spindle_speed()
            station_status = parse_station_status()
            
            # Выводим данные в консоль
            print("Текст окна:", _text)
            print("Скорость вращения шпинделя:", spindle_speed)
            print("Состояние станка:", station_status)
            
            # Построение графика
            plot_graph()
        else:
            # Если окно не открыто, ждем 1 секунду и проверяем снова
            time.sleep(1)

# Запуск основной функции
if __name__ == "__main__":
    main()
