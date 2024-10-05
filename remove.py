import os

def delete_files_except_readme(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file!= "README.md":
                file_path = os.path.join(root, file)
                os.remove(file_path)

# 指定要处理的文件夹路径
folder_path = "/Users/nanbo/code/github.com/Lamborshea/type-challenges/questions"
delete_files_except_readme(folder_path)