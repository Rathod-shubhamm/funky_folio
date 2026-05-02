import cv2
import numpy as np

img = cv2.imread('public/avatar.png', cv2.IMREAD_UNCHANGED)
h, w = img.shape[:2]

if img.shape[2] == 4:
    alpha = img[:,:,3]
    rgb = img[:,:,:3]
else:
    rgb = img

# Simple brightness threshold
gray = cv2.cvtColor(rgb, cv2.COLOR_BGR2GRAY)
_, mask = cv2.threshold(gray, 220, 255, cv2.THRESH_BINARY)

if img.shape[2] == 4:
    mask = cv2.bitwise_and(mask, alpha)

contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

eyes = []
for cnt in contours:
    area = cv2.contourArea(cnt)
    if area < 500:
        continue
    x, y, cw, ch = cv2.boundingRect(cnt)
    cx = x + cw/2
    cy = y + ch/2
    
    eyes.append({
        'area': area,
        'bbox': (x, y, cw, ch),
        'center': (cx, cy),
        'contour': cnt
    })

eyes.sort(key=lambda e: e['area'], reverse=True)

for i, eye in enumerate(eyes[:5]):
    x, y, cw, ch = eye['bbox']
    cnt = eye['contour']
    cx, cy = eye['center']
    
    left_pct = (x / w) * 100
    top_pct = (y / h) * 100
    width_pct = (cw / w) * 100
    height_pct = (ch / h) * 100
    
    print(f"\nBlob {i+1} (Area: {eye['area']}):")
    print(f"Center: cx={cx/w*100:.1f}%, cy={cy/h*100:.1f}%")
    print(f"left: {left_pct:.2f}%; top: {top_pct:.2f}%; width: {width_pct:.2f}%; height: {height_pct:.2f}%;")
    
    epsilon = 0.005 * cv2.arcLength(cnt, True)
    approx = cv2.approxPolyDP(cnt, epsilon, True)
    
    points = []
    for pt in approx:
        px, py = pt[0]
        nx = (px - x) / cw * 100
        ny = (py - y) / ch * 100
        points.append(f"{nx:.1f}% {ny:.1f}%")
        
    clip_path = "clip-path: polygon(" + ", ".join(points) + ");"
    print(clip_path)
