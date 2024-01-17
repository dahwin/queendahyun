from fastapi import FastAPI
import uvicorn
import nest_asyncio
import torch
from llama_cpp import Llama
nest_asyncio.apply()

dahwin = FastAPI()

@dahwin.get('/')
def index():
    return {'Dahwin Universe': 'Hello Everything!'}
def run_llm(name):
    global llm
    try:
        if llm:
            print(True)
            # llm = Llama(model_path=r"C:\Users\ALL USER\Desktop\dahyun\cpu_llm\llama.cpp\models\zephyr-7b-alpha.Q2_K.gguf", chat_format="llama-2")
            del llm
            
            llm = Llama(model_path=r"C:\Users\ALL USER\Desktop\dahyun\cpu_llm\llama.cpp\models\zephyr-7b-alpha.Q2_K.gguf", chat_format="llama-2")
    except:
        print(False)
        llm = Llama(model_path=r"C:\Users\ALL USER\Desktop\dahyun\cpu_llm\llama.cpp\models\zephyr-7b-alpha.Q2_K.gguf", chat_format="llama-2")

    print(llm)
    return True
def get_tensor(name):
    user_prompt =name
    print(f"user_prompt{user_prompt}")
    result = llm.create_chat_completion(
          messages = [
              {"role": "system", "content": "You are an assistant. for questioin & anser .QNA"},
              {
                  "role": "user",
                  "content": f"{user_prompt}"
              }
          ]
    )
    ai_response = result['choices'][0]['message']['content']
    return {'AI Response': ai_response}

@dahwin.post('/name')
def name(data: dict):
    name = data.get('dahwin')
    name = get_tensor(name)
    return name
@dahwin.post('/llm')
def name(data: dict):
    name = data.get('name')
    name = run_llm(name)
    return name
if __name__ == '__main__':
    uvicorn.run(dahwin, host='127.0.0.1', port=8000)