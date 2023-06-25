import uuid

from database import db
from utils import validation


def generate_uuid():
    return str(uuid.uuid4())

class Task(db.Model):
    __tablename__ = 'tasks'

    uuid = db.mapped_column(db.String(36), primary_key=True, default=generate_uuid)
    name = db.mapped_column(db.Text)
    completed = db.mapped_column(db.Boolean, default=False)

    validations = {
        'name': [validation.required()]
    }

    def to_dict(self):
        return {
            'uuid': self.uuid,
            'name': self.name,
            'completed': self.completed
        }