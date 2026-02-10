from PIL import Image
import binascii

def get_bg_color(image_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        # Get top-left pixel functionality
        bg_color = img.getpixel((0, 0))
        # Convert to hex
        hex_color = '#{:02x}{:02x}{:02x}'.format(bg_color[0], bg_color[1], bg_color[2])
        print(f"Background Color: {hex_color}")
    except Exception as e:
        print(f"Error: {e}")

get_bg_color("images/logo.png")
