#!C:\Users\Benjamin\AppData\Local\Programs\Python\Python36-32\python.exe

import random

#num = random.randint(1, 100)

print('Content-type: text/event-stream')
print('Cache-Control: no-cache');
print()

print('retry: 17')
print('data: ' + str(random.randint(1, 100)))
print()

