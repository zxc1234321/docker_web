import requests

def test_get():
    url = 'http://localhost:8080/task'
    res = requests.get(url)
    
    assert res.status_code == 200

def test_get_fail():
    url = 'http://localhost:8080/task/0'
    res = requests.get(url)
    
    assert res.status_code == 200

def test_completed():
    url = 'http://localhost:8080/task/1'
    res = requests.get(url)
    
    assert res.status_code == 200

    msg = res.json()
    assert msg['data']['completed'] == 0