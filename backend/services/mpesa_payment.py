import requests
from datetime import datetime
from backend.services.mpesa_auth import get_access_token  # Use the token from the auth function

def initiate_payment(phone_number, amount, account_reference):
    access_token = get_access_token()  # Fetch the token
    
    headers = {
        'Authorization': f'Bearer {access_token}'
    }

    payload = {
        "BusinessShortcode": "174379",  # Replace with your shortcode
        "LipaNaMpesaOnlineShortcode": "174379",  # your shortcode
        "PhoneNumber": phone_number,  # Customer phone number
        "Amount": amount,  # Amount to be paid
        "AccountReference": account_reference,  # Your business reference
        "TransactionType": "Payment",
        "Shortcode": "174379",  # Your shortcode
        "LipaNaMpesaOnlineShortcode": "174379",  # Your shortcode
        "PhoneNumber": "254701234567",  # Your customer's phone number
        "TransactionType": "Payment",
    }

    url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        return response.json()  # Return the response from MPesa (transaction details)
    else:
        raise Exception(f"Failed to initiate payment: {response.text}")
