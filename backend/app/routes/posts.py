# Jhony: endpoints CRUD de posts
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.schemas.post import PostCreate, PostResponse
from app.services.post_service import PostService

router = APIRouter()

@router.get("/", response_model=List[PostResponse])
def listar_posts(db: Session = Depends(get_db)):
    return PostService.obtener_todos(db)

@router.get("/{post_id}", response_model=PostResponse)
def obtener_post(post_id: int, db: Session = Depends(get_db)):
    post = PostService.obtener_por_id(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post no encontrado")
    return post

@router.post("/", response_model=PostResponse, status_code=201)
def crear_post(post: PostCreate, db: Session = Depends(get_db)):
    return PostService.crear(db, post)

@router.delete("/{post_id}", status_code=204)
def eliminar_post(post_id: int, db: Session = Depends(get_db)):
    PostService.eliminar(db, post_id)
