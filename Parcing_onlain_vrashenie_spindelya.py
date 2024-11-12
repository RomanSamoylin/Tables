import struct

with open('ARMDMonitor.exe', 'rb') as file:
    data = file.read()

# Найдем в файле смещение байтов, соответствующих скорости вращения шпинделя
offset = data.find(b'SpindleSpeed') + 12

# Извлекаем скорость вращения шпинделя из файла
spindle_speed = struct.unpack('<f', data[offset:offset+4])[0]

print(f"Скорость вращения шпинделя: {spindle_speed}")

# Допустим, есть другие данные, которые также нужно извлечь
# Найдем их смещения и извлечем их значения
offset_other_data = data.find(b'OtherData') + 8
other_data = struct.unpack('<I', data[offset_other_data:offset_other_data+4])[0]

print(f"Другие данные: {other_data}")
