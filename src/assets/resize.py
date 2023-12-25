from PIL import Image

def resize_image(input_path, output_path, scale_factor):
    # Open the image file
    with Image.open(input_path) as img:
        # Calculate the new size
        new_width = int(img.width / scale_factor)
        new_height = int(img.height / scale_factor)
        
        # Resize the image while maintaining the aspect ratio
        resized_img = img.resize((new_width, new_height), Image.ANTIALIAS)
        
        # Save the resized image
        resized_img.save(output_path)

# Specify the input and output paths
input_image_path = r"C:\Users\ALL USER\Desktop\e\my_dahwin_web\project_hoobank\src\assets\dahyun.jpg"
output_image_path = 'dahyun.png'

# Specify the scale factor (e.g., 10 for 10 times smaller)
scale_factor = 5

# Resize the image
resize_image(input_image_path, output_image_path, scale_factor)

print(f"Image resized and saved to {output_image_path}")

