import requests

def test_post():
    url = 'http://localhost:8080/task'
    data = {'title': 'reading books'}

    res = requests.post(url, json = data)
    
    assert res.status_code == 400