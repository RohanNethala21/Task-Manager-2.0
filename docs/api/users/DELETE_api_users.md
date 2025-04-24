# DELETE `/api/users/<id>`

Deletes an existing user by their ID.

| Name   | Values     | Description              |
| ------ | ---------- | ------------------------ |
| `id`   | `Integer`  | Target user              |

---
## Responses

### `200 OK`
User successfully deleted.
```json
{
  "good": true
}
```

### `404 Not Found`
No user exists with the given ID.
```json
{
  "good": false,
  "error": "User with that ID does not exist"
}
```

### `500 Internal Server Error`
An unexpected server error occurred.
```json
{
  "good": false,
  "error": "internal server error"
}
```