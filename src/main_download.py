import requests
import os

url = 'https://huggingface.co/h94/IP-Adapter-FaceID/resolve/main/ip-adapter-faceid-plusv2_sd15_lora.safetensors'
output_path = '/mnt/c/models/dahyun.safetensors'

# Set the stream parameter to True for chunked downloading
with requests.get(url, stream=True) as response:
    response.raise_for_status()
    
    with open(output_path, 'wb') as file:
        for chunk in response.iter_content(chunk_size=8192):  # Adjust chunk size as needed
            if chunk:
                file.write(chunk)

print("Download completed successfully.")
