import pyodbc

def get_data_from_ARMDMonitor():
    connection_string = 'DRIVER={MySQL ODBC 8.0 Unicode Driver};SERVER=127.0.0.1;DATABASE=cnc_monitoring;UID=root;PWD=victoria123;PORT=3306'
    conn = pyodbc.connect(connection_string)
    cursor = conn.cursor()
    query = "SELECT * FROM feeparsed_log_table"
    cursor.execute(query)
    data = cursor.fetchall()
    conn.close()
    return data

if __name__ == "__main__":
    data = get_data_from_ARMDMonitor()
    for row in data:
        print(row)
