import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

def test_ui_page(driver):
    driver.get('http://localhost:8080')
    driver.implicitly_wait(5)
    title_box = driver.find_element(By.CSS_SELECTOR, "input#title")
    owner_box = driver.find_element(By.CSS_SELECTOR, "input#owner")
    add_button = driver.find_element(By.CSS_SELECTOR, "button.btn.btn-outline-secondary")

    # title 입력창에 shower 입력    
    title_box.send_keys("shower")

    # owner 입력창에 admin 입력
    owner_box.send_keys("admin")

    # + 버튼 클릭
    add_button.click()

    time.sleep(5)

    # shower task가 입력되었는지 확인
    is_found = 0
    td_tags = driver.find_elements(By.CSS_SELECTOR, "td")
    for td_tag in td_tags:
        text = td_tag.text
        if "shower" in text:
            is_found = 1
    
    assert is_found == 1