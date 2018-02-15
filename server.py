<<<<<<< HEAD
#!C:\Users\Benjamin\AppData\Local\Programs\Python\Python36-32\python.exe
=======
#!/usr/bin/env python
>>>>>>> refs/remotes/origin/master

import asyncio
import websockets

async def echo(websocket, path):
    async for message in websocket:
        await websocket.send(message)

asyncio.get_event_loop().run_until_complete(
    websockets.serve(echo, 'localhost', 8765))
<<<<<<< HEAD
asyncio.get_event_loop().run_forever()
=======
asyncio.get_event_loop().run_forever()
>>>>>>> refs/remotes/origin/master
