import os
from pathlib import Path


BASE_DIR = Path(__file__).resolve(strict=True).parent

class Config:    
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'database/data.db')