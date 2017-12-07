#!/usr/local/bin/python3

import random
import sys

print('Content-type: text/event-stream')
print('Cache-Control: no-cache');
print()

text = sys.stdin.readline()

print(text)
