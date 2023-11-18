import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

def test_main_page(driver):
    driver.get('http://localhost:8080')
    driver.implicitly_wait(10)
    title = driver.title
    time.sleep(5)
    assert "main" in title