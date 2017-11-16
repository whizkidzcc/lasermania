#!C:\Users\Mihir\AppData\Local\Programs\Python\Python36-32\python

import random

num = random.randint(1, 1000)

print('Content-type: text/html')
print()

print('''\
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Random Number Generator</title>
    <head>

    <body>
        <h1>Random Number Generator</h1>
        <p>''' + str(num) + '''</p>
    </body>
''')
