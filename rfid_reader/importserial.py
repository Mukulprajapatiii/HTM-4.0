import serial
ser = serial.Serial('COM3', 115200) 

# Open a file to save the data
file_path = r'C:\Users\karti\OneDrive\Desktop\data.txt'
file = open(file_path, 'w')

while True:

    if ser.in_waiting > 0:
        data = ser.readline().decode().rstrip()
        file.write(data + '\n')
        file.flush()
        print(data)     