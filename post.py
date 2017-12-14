#!/usr/local/bin/python3

import json
import random
import sys

print('Content-type: text/plain')
print('Cache-Control: no-cache');
print()

text = sys.stdin.readline()

pos = json.loads(text)
name = list(pos) [0]
                
print (name, pos[name]['x'], pos[name]['y'])
