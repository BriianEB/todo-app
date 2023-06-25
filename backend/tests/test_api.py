import unittest

from app import create_app
from database import db

class APITestCase(unittest.TestCase):
    def setUp(self):
        # Se crea una instancia de la aplicación en modo de pruebas.
        self.app = create_app('testing')
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.create_all()
        self.client = self.app.test_client()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_404(self):
        response = self.client.get('/helo')

        self.assertEqual(response.status_code, 404)

    
if __name__ == '__main__':
    unittest.main()