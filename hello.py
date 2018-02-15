<<<<<<< HEAD
#!C:\Users\Benjamin\AppData\Local\Programs\Python\Python36-32\python.exe

import random

num = random.randint(1, 100)

print('Content-type: text/html')
print()

print('''\
<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>Hello!</title>
	</head>
	<body>
		<h1>Hi</h1>
		<h2>Want to see a random number?</h2>
		<p>''' + str(num) + '''</p>
	</body>
</html>
''')

=======
#!/usr/local/bin/python3

print('Content-type: text/plain');
print()

print('Hello world!');
>>>>>>> refs/remotes/origin/master
