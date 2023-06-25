import unittest
import json

from app import create_app
from database import db
from models import Task

class APITestCase(unittest.TestCase):
    def setUp(self):
        # Crea una instancia de la aplicación en modo de pruebas.
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()
        self.client = self.app.test_client()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()
    
    def get_headers(self):
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

    def test_tasks(self):
        # Crear una tarea
        task_name = 'Tarea 1'
        
        response = self.client.post(
            '/tasks',
            headers=self.get_headers(),
            data=json.dumps({'name': task_name})
        )

        task_url = response.headers.get('location')
        self.assertEqual(response.status_code, 201)        
        self.assertIsNotNone(task_url)

        # Obtener la tarea creada
        response = self.client.get(
            task_url,
            headers=self.get_headers(),
        )

        task_data = response.get_json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(task_data['name'], task_name)        

        # Modificar la tarea
        response = self.client.patch(
            task_url,
            headers=self.get_headers(),
            data=json.dumps({
                'name': task_data['name'],
                'completed': True
            })
        )

        old_task_data = task_data
        task_data = response.get_json()
        self.assertEqual(response.status_code, 200)
        self.assertNotEqual(task_data['completed'], old_task_data['completed'])

        # Eliminar la tarea
        response = self.client.delete(
            task_url,
            headers=self.get_headers()
        )

        self.assertEqual(response.status_code, 204)
        self.assertEqual(response.headers.get('Content-Length'), None)

        response = self.client.get(
            task_url,
            headers=self.get_headers(),
        )

        self.assertEqual(response.status_code, 404)