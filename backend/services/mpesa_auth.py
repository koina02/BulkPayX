import requests
import base64

consumer_key = "FIxCftZ50im6pIyGHSVFLCt4KFohfCobtSiWxkyVBpejARPG"
consumer_secret = "EcmVidBWvmWjxQAsccO8BfQoHNALGgXWGAPTEWwg0tpb53vENbYsKfprtD6e1oyH"

# Encode the credentials
credentials = f"{consumer_key}:{consumer_secret}"
encoded_credentials = base64.b64encode(credentials.encode()).decode()

# Request access token
url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
headers = {"Authorization": f"Basic {encoded_credentials}"}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    access_token = response.json().get("access_token")
    print(f"✅ Access Token: {access_token}")
else:
    print(f"❌ Error fetching access token: {response.text}")

