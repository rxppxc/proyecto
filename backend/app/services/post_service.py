from sqlalchemy.orm import Session
from app.models.post import Post
from app.schemas.post import PostCreate

class PostService:

    @staticmethod
    def obtener_todos(db: Session):
        return db.query(Post).order_by(Post.fecha_creacion.desc()).all()

    @staticmethod
    def obtener_por_id(db: Session, post_id: int):
        return db.query(Post).filter(Post.id == post_id).first()

    @staticmethod
    def crear(db: Session, post_data: PostCreate):
        nuevo = Post(**post_data.model_dump())
        db.add(nuevo)
        db.commit()
        db.refresh(nuevo)
        return nuevo

    @staticmethod
    def eliminar(db: Session, post_id: int):
        post = db.query(Post).filter(Post.id == post_id).first()
        if post:
            db.delete(post)
            db.commit()
