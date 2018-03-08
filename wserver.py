#!C:/Python36/python

import asyncio
import datetime
import random
import websockets

# Keep track of users
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
        print('Disconnected to ws: ' + str(len(connected)) + ' connections')

start_server = websockets.serve(handle_player, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
