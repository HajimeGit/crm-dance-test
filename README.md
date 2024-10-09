
# Crm Dance Test Task
## Installation

Clone the repository:

```bash
  git clone git@github.com:HajimeGit/crm-dance-test.git
```

Go inside the repository:

```bash
  cd crm-dance-test
```

Run docker script

```bash
  docker-compose up --build
```

Go to frontend part

```bash
  http://localhost:5173/
```
## Frontend Structure

- **Marketplace ('/')**: The homepage displaying a list of products available for purchase.
- **Product ('/product/:id')**: The product detail page for a specific item in the marketplace.
- **Order ('/order/:productId)**: The order creation page where users can place an order for the selected product.
- **Success ('/success')**: The confirmation page shown after a successful order.
- **NotFound ('/not-found')**: A fallback page displayed when a user navigates to a route that does not exist on the website. 
- **RRweb Recordings ('/rrweb/recordings')**: A page for viewing rrweb recordings. 

## Backend Endpoints

- **Create Order ('/order/create')**: This endpoint is used to create a new order for a product.
Payload example:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone_number": "+1234567890",
  "address_line": "123 Main St",
  "city": "New York",
  "postal_code": "10001",
  "country": "USA",
  "product_id": 1
}

```
- **Create Recording ('/recording/create')**: This endpoint is used to create and save a new recording of user interactions (e.g., from rrweb). 

Payload example:
```json
{
  "uuid": "b1a5c6d9-e7a1-4f6b-bc92-0e30db2a4f2b",
  "events: [{}, {}]
}

```
- **Fetch Recordings Uuids ('/recording/fetchAllUuids')**: This endpoint retrieves all UUIDs associated with recorded sessions.
- **Fetch Recording Events by Uuid ('/recording/fetchEvents?uuid=uuid')**: This endpoint fetches all events associated with a specific recording session identified by the provided uuid parameter.

## Environment Variables
The following environment variables must be configured in the .env file:

Backend:

- **PORT**: The port on which the app runs.
- **DATABASE_URL**: The MongoDB connection URL.
- **FRONTEND_URL**: The frontend host url.
- **REQUEST_LIMIT**: The limit of the request payload in MB (e.g., '10mb').

Frontend:

- **VITE_BACKEND_HOST**: The backend host URL.
- **VITE_RRWEB_INTERVAL**: The interval time (in milliseconds) used for sending rrweb events to the backend.
