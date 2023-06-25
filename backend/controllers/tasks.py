from flask import Blueprint, request
from werkzeug.exceptions import NotFound

from database import db
from exceptions import ValidationError
from models import Task
from utils.validation import validate

tasks = Blueprint('tasks', __name__)

@tasks.route('/tasks')
def index():
    tasks = db.session.scalars(db.select(Task)).all()

    return [task.to_dict() for task in tasks]

@tasks.route('/tasks', methods=['POST'])
def create():
    data = request.get_json()

    errors = validate(Task.validations, data)
    if errors:
        raise ValidationError({'fields': errors})

    task = Task(
        name=data['name']
    )

    db.session.add(task)
    db.session.commit()

    return task.to_dict()

@tasks.route('/tasks/<uuid>')
def show(uuid):
    task = db.session.scalar(db.select(Task).filter_by(uuid=uuid))

    if task is None:
        raise NotFound()

    return task.to_dict()

@tasks.route('/tasks/<uuid>', methods=['PATCH'])
def update(uuid):
    data = request.get_json()
    task = db.session.scalar(db.select(Task).filter_by(uuid=uuid))

    if task is None:
        raise NotFound()

    errors = validate(Task.validations, data)
    if errors:
        raise ValidationError({'fields': errors})

    task.name = data.get('name', task.name)
    task.completed = data.get('completed', task.completed)

    db.session.add(task)
    db.session.commit()

    return task.to_dict()

@tasks.route('/tasks/<uuid>', methods=['DELETE'])
def destroy(uuid):
    task = db.session.scalar(db.select(Task).filter_by(uuid=uuid))

    if task is None:
        raise NotFound()

    db.session.delete(task)
    db.session.commit()

    return task.to_dict()