import requests

def test_get():
    url = 'http://localhost:8080/task'
    res = requests.get(url)
    
    assert res.status_code == 204