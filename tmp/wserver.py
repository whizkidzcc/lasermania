#!C:/Users/Benjamin/AppData/Local/Programs/Python/Python36-32/python.exe

import asyncio
import datetime
import random
import websockets

print('Running')
connected = set()

async def handle_player(websocket, path):
    connected.add(websocket)
    print('connected to ws: ' + str(len(connected)) + ' connections')

    try:
        while True:
            data = await websocket.recv()

            for ws in connected:
                await ws.send(data)
    except:
        connected.remove(websocket)
        print('disconnected from ws: ' + str(len(connected)) + ' connections')

start_server = websockets.serve(handle_player, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
