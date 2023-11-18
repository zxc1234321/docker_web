import requests
import pytest


@pytest.mark.parametrize('title, owner',
[('Task1', 'oralcoder'),
('Task2', 'guest'),
('Task3', 'oralcoder'),
('Task4', 'admin'),
])

def test_add(title, owner):
    url = 'http://localhost:8080/task'
    data = {'title': title, 'owner': owner}
    
    res = requests.post(url, json = data)
    
    assert res.status_code == 200