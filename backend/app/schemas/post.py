from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class PostBase(BaseModel):
    titulo: str
    contenido: str
    imagen_url: Optional[str] = None
    autor: str
    categoria_id: Optional[int] = None

class PostCreate(PostBase):
    pass

class PostResponse(PostBase):
    id: int
    fecha_creacion: datetime

    class Config:
        from_attributes = True
