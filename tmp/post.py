#!C:/Python36/python

import json
import random
import sys

print('Content-type: text/plain')
print('Cache-Control: no-cache');
print()

text = sys.stdin.readline()
print(text)
pos = json.loads(text)

print(pos['x'], pos['y'], 'hello')
