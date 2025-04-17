import json

file_path = r"C:\Users\Evans\Documents\BulkPayX\backend\services\firebase-key.json"

try:
    with open(file_path, "r") as file:
        data = json.load(file)
        print("✅ Firebase Key JSON is valid!")
except json.JSONDecodeError:
    print("❌ Error: Invalid JSON format. Re-download the file.")
except FileNotFoundError:
    print("❌ Error: File not found. Ensure it's in the correct path.")
