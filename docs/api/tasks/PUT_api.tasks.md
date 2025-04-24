# PUT `/api/tasks/<id>`

Edits an existing Task's information by its ID.

| Name   | Values    | Description             |
| ------ | --------- | ----------------------- |
| `id`   | `Integer` | Target task             |
| `body` | `String`  | The new task object     |

---
## Responses

### `201 Created`
Task successfully edited.
```json
{
  "good": true,
  "message": "Task edited successfully"
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
No task exists with the given ID.
```json
{
  "good": false,
  "error": "Task with that ID does not exist"
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