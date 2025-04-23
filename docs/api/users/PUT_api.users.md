# PUT `/api/users/<id>`

Edits an existing user's information by their ID.

| Name   | Values    | Description         |
| ------ | --------- | ------------------- |
| `id`   | `Integer` | Target user         |
| `body` | `String`  | The new user object |

---
## Responses

### `201 Created`
User successfully edited.
```json
{
  "good": true,
  "message": "User edited successfully"
}
```

---
### `400 Bad Request`
One or more required fields are missing.
```Json
{
  "good": false,
  "error": "Missing required fields"
}
```

---
### `404 Not Found`
No user exists with the given ID.
```json
{
  "good": false,
  "error": "User with that ID does not exist"
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