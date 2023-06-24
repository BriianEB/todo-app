import os
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from pathlib import Path

from config import Config
from database import db

BASE_DIR = Path(__file__).resolve(strict=True).parent

cors = CORS()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    cors.init_app(app)
    migrate.init_app(app, db, directory=os.path.join(BASE_DIR, 'database/migrations'))

    return app