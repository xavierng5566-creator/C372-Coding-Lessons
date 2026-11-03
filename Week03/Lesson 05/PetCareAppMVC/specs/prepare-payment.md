# Feature: Prepare payment details

## 1. User goal
As a pet owner, I want to select a pet service and view its price so I can prepare for payment.

## 2. Scope
Will do: Accept a service ID, retrieve the service details and prepare a payment summary.
Will not do: Charge money, connect to a payment gateway, store payment details in new database tables or create new pages.
The feature only prepares payment information; no actual payment takes place.

## 3. Request
- HTTP method: GET
- URL: /payments/prepare/:serviceId
- Input: Service ID passed through the URL parameter.
- serviceId: String, required.
- Only one service can be selected per request.
- No login required for this classroom mock endpoint.

## 4. Service catalogue
Service ID - Service Name - Price (SGD)
S001 - Vaccination - $35
S002 - Pet Grooming	- $50
S003 - Boarding	- $80

## 5. Successful response
HTTP status: 200 OK
Format: JSON
Currency: SGD
Status: READY_FOR_PAYMENT

Example:
{
  "serviceId": "S001",
  "serviceName": "Vaccination",
  "amount": 35,
  "currency": "SGD",
  "status": "READY_FOR_PAYMENT"
}

## 6. Unsuccessful response
If the requested service does not exist:
- HTTP status: 404 Not Found {"error": "Service not found"}

If the service ID is missing or incorrectly formatted:
- HTTP status: 400 Bad Request {"error": "Invalid service ID"}

## 7. Acceptance criteria
- AC1: User can submit a service ID.
- AC2: System accepts service IDs listed in the mock catalogue.
- AC3: Server retrieves the correct service name and price.
- AC4: Successful requests return JSON containing the service details, SGD currency and READY_FOR_PAYMENT status.
- AC5: Unknown or invalid service IDs return the appropriate HTTP error status and JSON error message.

## 8. Open questions
- Should a pet ID be included to identify which pet the service is for?
- Should the service catalogue eventually be retrieved from a database instead of mock data?
- Should payment methods such as PayNow or credit card be displayed?
- Should the payment summary be displayed on an existing page or returned through JSON only?