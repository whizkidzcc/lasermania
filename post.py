<<<<<<< HEAD
#!C:/Users/Benjamin/AppData/Local/Programs/Python/Python36-32/python.exe
=======
#!/usr/local/bin/python3
>>>>>>> refs/remotes/origin/master

import json
import random
import sys

print('Content-type: text/plain')
print('Cache-Control: no-cache');
print()

text = sys.stdin.readline()
<<<<<<< HEAD
print(text)
pos = json.loads(text)

print(pos['x'], pos['y'], 'hello')
=======

pos = json.loads(text)
name = list(pos) [0]
                
print (name, pos[name]['x'], pos[name]['y'])
>>>>>>> refs/remotes/origin/master
