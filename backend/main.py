from fastapi import FastAPI, Request, HTTPException
from .services.transaction_db import update_transaction_status  # Ensure this import is correct

# Assuming you have initialized FastAPI app
app = FastAPI()

@app.post("/payment/callback")
async def payment_callback(request: Request):
    try:
        # Extract data from the callback
        body = await request.json()
        print("Callback received:", body)

        # Extract transaction details from the callback data
        transaction_id = body.get("TransactionID")
        status = body.get("Status")
        amount = body.get("Amount")
        phone_number = body.get("PhoneNumber")

        # Validate the received data
        if not all([transaction_id, status, amount, phone_number]):
            raise HTTPException(status_code=400, detail="Missing required callback data")

        # Update the transaction status in your database
        update_transaction_status(transaction_id, status, amount, phone_number)

        # Return success message
        return {"message": "Transaction status updated"}
    
    except Exception as e:
        print(f"Error processing callback: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

