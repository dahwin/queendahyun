import argparse
import requests
import os

def download_model(name):
    url_dict = {
        'queendahyun': "https://huggingface.co/TheBloke/Starling-LM-7B-alpha-GGUF/resolve/main/starling-lm-7b-alpha.Q8_0.gguf",
        'tiny_cute_dahyun_1b':"https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q8_0.gguf",
        'solar_instruct_10B': "https://huggingface.co/TheBloke/SOLAR-10.7B-Instruct-v1.0-GGUF/resolve/main/solar-10.7b-instruct-v1.0.Q8_0.gguf",
        "dolphin-2.5_8x_7b": "https://huggingface.co/TheBloke/dolphin-2.5-mixtral-8x7b-GGUF/resolve/main/dolphin-2.5-mixtral-8x7b.Q6_K.gguf"
    }

    if name not in url_dict:
        print(f"Error: Model '{name}' not found.")
        return

    url = url_dict[name]
    output_path = f'/mnt/c/models/{name}.gguf'
    print(url)
    print(output_path)

    with requests.get(url, stream=True) as response:
        response.raise_for_status()

        with open(output_path, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    file.write(chunk)

    print(f"Download of {name} completed successfully.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Download pre-trained models from Hugging Face.")
    parser.add_argument("--name", type=str, help="Name of the model to download", required=True)
    args = parser.parse_args()

    download_model(args.name)
