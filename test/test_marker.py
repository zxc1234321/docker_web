import requests
import pytest

@pytest.mark.basic
def test_add_returns_valid_id():
    post_url = 'http://localhost:8080/task'
    data = {'title': 'conference', 'owner': 'oralcoder'}

    post_res = requests.post(post_url, json = data)
    
    post_msg = post_res.json()
    post_id = post_msg['data']
    get_url = f'http://localhost:8080/task/{post_id}'
    get_res = requests.get(get_url)
    get_msg = get_res.json()
    get_id = get_msg['data']['id']

    assert post_id == get_id

@pytest.mark.smoke
def test_get():
    url = 'http://localhost:8080/task'
    res = requests.get(url)
    
    assert res.status_code == 200