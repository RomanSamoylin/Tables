import struct
from datetime import datetime
import json
from canvasjs import CanvasJS

with open('ARMDMonitor.exe', 'rb') as file:
    data = file.read()

# Найдем в файле смещения байтов, соответствующие данным включения и выключения станка
offset_on = data.find(b'MachineOn')
offset_off = data.find(b'MachineOff')

# Извлечем даты включения и выключения станка
machine_on = datetime.fromtimestamp(struct.unpack('<I', data[offset_on+10:offset_on+14])[0])
machine_off = datetime.fromtimestamp(struct.unpack('<I', data[offset_off+10:offset_off+14])[0])

# Создадим данные для графика
data_points = [
    {"x": machine_on.strftime("%Y-%m-%d %H:%M:%S"), "y": 1},
    {"x": machine_off.strftime("%Y-%m-%d %H:%M:%S"), "y": 0}
]

canvas = CanvasJS()
canvas.add_data(data_points)

# Сохраняем данные для графика в JSON файл
with open('data.json', 'w') as json_file:
    json.dump(canvas.to_json(), json_file)

# Далее можно использовать данные из data.json для построения графика с помощью CanvasJS на веб-странице
