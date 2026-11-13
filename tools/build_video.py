import json, re, subprocess, imageio_ffmpeg, pathlib
FF = imageio_ffmpeg.get_ffmpeg_exe()
R = pathlib.Path("C:/CODING PROJECT/REJANGKU/video")
S = json.load(open(R / "scenes.json", encoding="utf8"))
tmp = R / "clips"; tmp.mkdir(exist_ok=True)

def dur(p):
    out = subprocess.run([FF, "-i", str(p)], capture_output=True, text=True).stderr
    h, m, s = re.search(r"Duration: (\d+):(\d+):([\d.]+)", out).groups()
    return int(h) * 3600 + int(m) * 60 + float(s)

lst = []
total = 0
for s in S:
    a = R / "audio" / f"{s['id']}.mp3"; img = R / "frames" / f"{s['id']}.png"
    d = dur(a) + 0.9  # 0.4 awal + 0.5 akhir
    total += d
    out = tmp / f"{s['id']}.mp4"
    frames = int(d * 25)
    vf = (f"zoompan=z='1+0.00008*on':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={frames}:s=1920x1080:fps=25,"
          f"fade=t=in:st=0:d=0.4,fade=t=out:st={d-0.4:.2f}:d=0.4,format=yuv420p")
    cmd = [FF, "-y", "-loop", "1", "-i", str(img), "-i", str(a),
           "-filter_complex", f"[0:v]{vf}[v];[1:a]adelay=400|400,apad=pad_dur=0.5[a]",
           "-map", "[v]", "-map", "[a]", "-t", f"{d:.2f}", "-c:v", "libx264", "-preset", "medium", "-crf", "20",
           "-c:a", "aac", "-b:a", "160k", "-r", "25", str(out)]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode: print(r.stderr[-1500:]); raise SystemExit(1)
    lst.append(f"file '{out.as_posix()}'")
    print(s["id"], round(d, 1))
(tmp / "list.txt").write_text("\n".join(lst), encoding="utf8")
final = R / "rejangku-alur-kerja.mp4"
r = subprocess.run([FF, "-y", "-f", "concat", "-safe", "0", "-i", str(tmp / "list.txt"), "-c", "copy", str(final)], capture_output=True, text=True)
print(r.returncode, "total", round(total), "s", final.stat().st_size // 1024, "KB")
