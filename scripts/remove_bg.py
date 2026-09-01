from PIL import Image
import numpy as np
import os

def remove_white_background(input_path, output_path, tolerance=240):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Calculate brightness / distance from white (255, 255, 255)
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    
    # Check if pixel is near white
    # Using min of RGB channels
    min_val = np.minimum(np.minimum(r, g), b)
    
    # Create smooth alpha transition
    # > 248 -> fully transparent (0)
    # < 220 -> fully opaque (255)
    # between -> linear interpolation
    alpha = np.zeros_like(min_val, dtype=np.uint8)
    
    # Mask for non-white pixels
    opaque_mask = min_val < 225
    transparent_mask = min_val >= 250
    transition_mask = (~opaque_mask) & (~transparent_mask)
    
    alpha[opaque_mask] = 255
    alpha[transparent_mask] = 0
    
    # Transition zone
    scale = (250 - min_val[transition_mask]) / (250 - 225)
    alpha[transition_mask] = (scale * 255).astype(np.uint8)
    
    data[:, :, 3] = alpha
    
    # Trim transparent borders
    result = Image.fromarray(data)
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
        
    result.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

base_dir = "c:/Users/Asim/scorea-workshops-landing/public/images"
remove_white_background(os.path.join(base_dir, "3d-cards-fan.jpg"), os.path.join(base_dir, "3d-cards-fan.png"))
remove_white_background(os.path.join(base_dir, "3d-brain-lightbulb.jpg"), os.path.join(base_dir, "3d-brain-lightbulb.png"))
remove_white_background(os.path.join(base_dir, "3d-study-elements.jpg"), os.path.join(base_dir, "3d-study-elements.png"))
