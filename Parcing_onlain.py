import pyodbc
import time
import win32com.client
from datetime import datetime

# ODBC connection settings
conn_str = (
    "DRIVER={MySQL ODBC 8.0 Unicode Driver};"
    "SERVER=127.0.0.1;"
    "PORT=3306;"
    "DATABASE=cnc_monitoring;"
    "UID=root;"
    "PWD=victoria123"
)

# Connect to ARMDMonitor
try:
    armd = win32com.client.Dispatch("ARMDMonitor.Application")
except:
    print("Error connecting to ARMDMonitor")
    exit()

# Connect to database
try:
    conn = pyodbc.connect(conn_str)
    cursor = conn.cursor()
except:
    print("Error connecting to database")
    exit()

# Main loop
while True:
    try:
        # Get data from ARMDMonitor
        machine_state = armd.GetMachineState()
        program_name = armd.GetActiveProgramName() 
        spindle_speed = armd.GetSpindleSpeed()
        feed_rate = armd.GetFeedRate()
        x_pos = armd.GetAxisPosition('X')
        y_pos = armd.GetAxisPosition('Y')
        z_pos = armd.GetAxisPosition('Z')
        
        # Current timestamp
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        # Insert data into database
        sql = """INSERT INTO machine_data 
                (timestamp, machine_state, program_name, spindle_speed, 
                feed_rate, x_position, y_position, z_position)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)"""
                
        cursor.execute(sql, (timestamp, machine_state, program_name, 
                           spindle_speed, feed_rate, x_pos, y_pos, z_pos))
        conn.commit()

        # Wait 1 second before next read
        time.sleep(1)

    except Exception as e:
        print(f"Error: {str(e)}")
        time.sleep(5)
        continue

    except KeyboardInterrupt:
        print("Program terminated by user")
        break

# Close connections
cursor.close()
conn.close()

