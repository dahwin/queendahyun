
import subprocess

command = [
    'aria2c',
    '--console-log-level=error',
    '-c',
    '-x', '16',
    '-s', '16',
    '-k', '1M',
    'https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sd15_lora.safetensors',
    '-o', '/mnt/c/models/dahyun.safetensors'
]

try:
    subprocess.run(command, check=True)
    print("Download completed successfully.")
except subprocess.CalledProcessError as e:
    print(f"Error running aria2c: {e}")