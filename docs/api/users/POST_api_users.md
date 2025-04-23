# `POST /api/users`

Creates a new user.

| Name | Values   | Description         |
| ---- | -------- | ------------------- |
| body | `String` | The new user object |

---
## Responses

### `201 Created`
User successfully added.

```json
{
  "good": true,
  "message": "User added successfully"
}
```

---
### `400 Bad Request`
One or more required fields are missing.
```json
{
  "good": false,
  "error": "Missing required fields"
}
```

---
### `500 Internal Server Error`
An unexpected server error occurred.
```json
{
  "good": false,
  "error": "internal server error"
}
```