import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

def test_ui_page(driver):
    driver.get('http://localhost:8080')
    driver.implicitly_wait(10)
    title_box = driver.find_element(By.CSS_SELECTOR, "input#title")
    owner_box = driver.find_element(By.CSS_SELECTOR, "input#owner")
    add_button = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-outline-secondary")
    
    assert title_box != None
    assert owner_box != None
    assert add_button != None