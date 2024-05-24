from PIL import Image
import os

# GIF文件列表
gif_files = ['logo_1.gif', 'logo_2.gif', 'logo_3.gif', 'logo_4.gif', 'logo_5.gif', 'logo_6.gif', 'logo_7.gif']

# 处理每一个GIF文件
for gif_file in gif_files:
    # 打开GIF文件
    with Image.open(gif_file) as img:
        # 创建目标文件夹，以GIF文件名命名
        folder_name = gif_file.split('.')[0]
        if not os.path.exists(folder_name):
            os.makedirs(folder_name)

        # 提取每帧并保存
        frame_number = 0
        while True:
            try:
                img.seek(frame_number)
                frame = img.copy()
                frame.save(os.path.join(folder_name, f'frame_{frame_number}.png'))
                frame_number += 1
            except EOFError:
                break  # 没有更多帧时退出循环

print("处理完成！")
