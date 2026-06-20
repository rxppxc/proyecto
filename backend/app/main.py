from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routes import posts, categorias

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Blog de Tecnología", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(posts.router, prefix="/api/posts", tags=["posts"])
app.include_router(categorias.router, prefix="/api/categorias", tags=["categorias"])

@app.get("/")
def root():
    return {"mensaje": "Blog de Tecnología API"}
