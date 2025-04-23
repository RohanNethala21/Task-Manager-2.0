# `GET /api/users`

Retrieves user(s) based on query parameters provided in the URL.

### Example Request
```
GET /api/users?user_id=123
```

### Query Parameters
- `user_id` (optional): Filter by a specific user ID  
- `email` (optional): Filter by user email  
- `username` (optional): Filter by username  

---

## Responses

### `200 OK`
Returned when one or more users are successfully retrieved.

#### Example Response
```json
{
  "data": [
    {
      "user_id": 123,
      "username": "example_user",
      "email": "user@example.com"
    }
  ]
}
```

---

### `404 Not Found`
Returned when no matching users are found.

#### Example Response
```json
{
  "error": "Querying error"
}
```

---

### `500 Internal Server Error`
Returned when the server encounters an unexpected condition.

#### Example Response
```json
{
  "error": "internal server error"
}
```