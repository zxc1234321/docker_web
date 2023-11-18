import requests
import pytest

@pytest.mark.parametrize('id', list(range(10)))
def test_get(id):
    url = f'http://localhost:8080/task/{id}'
    res = requests.get(url)

    assert res.status_code == 200