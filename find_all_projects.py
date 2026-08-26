import os

parent_dir = r'C:\Users\Jacob\.gemini\antigravity\scratch'
print("Listing projects in:", parent_dir)
if os.path.exists(parent_dir):
    for item in os.listdir(parent_dir):
        item_path = os.path.join(parent_dir, item)
        if os.path.isdir(item_path):
            print(" - Directory:", item)
