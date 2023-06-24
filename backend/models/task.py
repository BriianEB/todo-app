from database import db


class Task(db.Model):
    __tablename__ = 'tasks'

    uuid = db.mapped_column(db.String, primary_key=True)
    name = db.mapped_column(db.String(128))
    completed = db.mapped_column(db.Boolean)

    def to_dict(self):
        return {
            'uuid': self.uuid,
            'name': self.name,
            'completed': self.completed
        }