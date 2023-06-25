import os
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from pathlib import Path

from config import config
from database import db
from errors import register_errors_handlers

from controllers import tasks
from models import Task


BASE_DIR = Path(__file__).resolve(strict=True).parent

cors = CORS()
migrate = Migrate()

def create_app(config_name):
    """Crea una instancia de la aplicación."""
    
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    cors.init_app(app)
    migrate.init_app(app, db, directory=os.path.join(BASE_DIR, 'database/migrations'))

    app.register_blueprint(tasks)

    register_errors_handlers(app)

    return app

app = create_app(os.environ.get('APP_ENV'))

# Agrega los modelos al context del shell de flask
@app.shell_context_processor
def make_shell_context():
    return dict(db=db, Task=Task)

# Crea un comando para ejecutar las pruebas
@app.cli.command()
def test():
    import unittest

    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner(verbosity=2).run(tests)