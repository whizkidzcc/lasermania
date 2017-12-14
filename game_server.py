#!/usr/local/bin/python3

import random

print('Content-type: text/event-stream')
print('Cache-Control: no-cache');
print()

print('retry: 1000')
print('data: ' + str(random.randint(1, 100)))
print()

