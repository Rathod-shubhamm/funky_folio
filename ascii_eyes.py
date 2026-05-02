import cv2
import numpy as np

img = cv2.imread('public/avatar.png', cv2.IMREAD_UNCHANGED)
if img.shape[2] == 4:
    alpha = img[:,:,3]
    rgb = img[:,:,:3]
else:
    rgb = img
    alpha = np.ones(img.shape[:2], dtype=np.uint8) * 255

# Crop to the face area roughly (top 20% to 60%, left 30% to 80%)
h, w = img.shape[:2]
crop_y1 = int(h * 0.25)
crop_y2 = int(h * 0.55)
crop_x1 = int(w * 0.35)
crop_x2 = int(w * 0.85)

cropped = rgb[crop_y1:crop_y2, crop_x1:crop_x2]
cropped_alpha = alpha[crop_y1:crop_y2, crop_x1:crop_x2]

# Resize for ASCII (e.g., width 100 chars, height preserves aspect ratio ~0.5 for console chars)
target_w = 120
target_h = int((crop_y2 - crop_y1) / (crop_x2 - crop_x1) * target_w * 0.5)

resized = cv2.resize(cropped, (target_w, target_h))
resized_alpha = cv2.resize(cropped_alpha, (target_w, target_h))

gray = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)

chars = " .:-=+*#%@"
ascii_str = ""

for y in range(target_h):
    for x in range(target_w):
        if resized_alpha[y, x] < 128:
            ascii_str += " "
        else:
            intensity = gray[y, x]
            # White areas will be '@', dark areas '.'
            char_idx = int((intensity / 255) * (len(chars) - 1))
            ascii_str += chars[char_idx]
    ascii_str += "\n"

print(f"ASCII representation of face area (x: 35%-85%, y: 25%-55%):")
print(ascii_str)
