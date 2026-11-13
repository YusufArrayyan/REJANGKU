import asyncio, json, edge_tts
S = json.load(open("C:/CODING PROJECT/REJANGKU/video/scenes.json", encoding="utf8"))
async def main():
    for s in S:
        await edge_tts.Communicate(s["say"], "id-ID-ArdiNeural", rate="-4%").save(f"C:/CODING PROJECT/REJANGKU/video/audio/{s['id']}.mp3")
asyncio.run(main())
