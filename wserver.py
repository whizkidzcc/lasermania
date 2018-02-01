#!C:/Users/Benjamin/AppData/Local/Programs/Python/Python36-32/python.exe
print('test')

import asyncio
import datetime
import random
import websockets
#data structure to keep track(people who are connected)
# |
# V
print('Running')
connected = set()
async def handle_player(websocket, path):
	connected.add(websocket)
	print('Connected to ws: ' + str(len(connected)) + ' connections')
	
	try:
		while True:
			data = await websocket.recv()
			await websocket.send(data)
			
			for ws in connected:
				await ws.send(data)
	except:
		connected.remove(websocket)
		print('Some exception thrown so it disconnects')

start_server = websockets.serve(handle_player, '127.0.0.1', 5678)
print('Running')

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
