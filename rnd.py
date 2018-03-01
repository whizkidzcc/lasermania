#!/usr/bin/env

import random

num = random.randint(1, 100)

print('Content-type: text/html');
print('')

print('''\
	<!DOCTYPE html>
	<html>
	    <head>
	       <meta charset="UTF8">
	       <title>Random Number Generator</title>
	    </head>

	    <body>
	       <h1>Random Number Generator</h1>
	       <p> ''' + str(num) + '''</p>
	    </body>
</html>
''')
