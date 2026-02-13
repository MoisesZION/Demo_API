from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app= FastAPI()

# CORS: Cross Origin Resource Sharing , Se utiliza para habilitar peticiones desde clientes que no estan en mi dominio, tiene que hacerse de manera explicita porque se deben considerar cuales son las reglas para aceptar esos números. 
#CORSMiddleware → Lo que se interpone entre mi programa y el medio 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    all_credentials= True, 
    allow_methods=["*"],
    allow_headers =["*"],
)

@app.get("./sumar")
def sumar_numeros(a:float, b:float):
    return a+b