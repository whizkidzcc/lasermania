#!/usr/bin/env python

import asyncio
import datetime
import random
import websockets

async def handle_player(websocket, path):
    data = await websocket.recv();
    await websocket.send(data);

start_server = websockets.serve(handle_player, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()