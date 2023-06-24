from flask import Blueprint, request

from database import db
from models import Task

tasks = Blueprint('tasks', __name__)

@tasks.route('/tasks')
def index():
    tasks = db.session.scalars(db.select(Task)).all()

    return [task.to_dict() for task in tasks]

@tasks.route('/tasks', methods=['POST'])
def create():
    data = request.get_json()
