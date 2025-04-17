import psycopg2
from psycopg2.extras import RealDictCursor

def update_transaction_status(transaction_id, status, amount, phone_number):
    # your code here
    try:
        # Connect to your database (replace with your actual connection details)
        conn = psycopg2.connect(
            dbname="your_db", user="your_user", password="your_password", host="localhost", port="5432"
        )
        cursor = conn.cursor()

        # Execute the update query
        cursor.execute("""
            UPDATE transactions
            SET status = %s, amount = %s, phone_number = %s
            WHERE transaction_id = %s
        """, (status, amount, phone_number, transaction_id))

        # Commit the changes to the database
        conn.commit()

        # Check if the update was successful (i.e., the row was affected)
        if cursor.rowcount == 0:
            print(f"No transaction found with ID {transaction_id}")
        else:
            print(f"Transaction {transaction_id} updated successfully.")

    except Exception as e:
        # Handle any database connection or query errors
        print(f"Error updating transaction status: {e}")
    finally:
        # Ensure the cursor and connection are closed even if an error occurs
        try:
            cursor.close()
            conn.close()
        except:
            pass  # If closing the connection fails, don't raise an additional error

