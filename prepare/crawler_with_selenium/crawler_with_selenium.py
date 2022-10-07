from operator import mod
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import os
import wget

# 愛料理食譜網址
recipe_name = "奶油蜂蜜吐司條"
url = "https://icook.tw/recipes/404936"




driver_path = "D:/Coding/Coding develop/Python/Python web crawler/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(driver_path)

# driver.get("https://google.com")
driver.get(url)


# 創建資料夾，後續存放步驟描述與圖片
path = os.path.join(recipe_name)
os.mkdir(path)

# 使用class_name抓取步驟內容
steps = driver.find_elements(By.CLASS_NAME, "recipe-step-description-content")

# 使用with 創建或開啟檔案，離開with會自動關閉
with open(recipe_name+"/"+recipe_name+"步驟.txt", mode="a", encoding="utf-8") as file:
    file.write(recipe_name+"\n")
    file.write(url+"\n"+"\n")

    index = 0
    for content in steps:
        index += 1
        file.write("step_" + str(index)+"\n")
        file.write(content.text +"\n"+"\n")
        # print("step_" + str(index))
        # print(content.text)


# 使用class_name抓取步驟圖片
# imgs = driver.find_elements(By.CLASS_NAME, "recipe-step-cover")
imgs = driver.find_elements(By.CLASS_NAME, "glightbox")
index = 0
for img in imgs:
    # 指定儲存位置與檔名
    save_as = os.path.join(path, recipe_name + "_step_" + str(index) + ".jpg")
    # 下載圖片 (圖片網址, 儲存位置與檔名)
    wget.download(img.get_attribute("href"), save_as)
    index += 1
    # print(index)
    # print(img.get_attribute("href"))

# time.sleep(2)
driver.quit()