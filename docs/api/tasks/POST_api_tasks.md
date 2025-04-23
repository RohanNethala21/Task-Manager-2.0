# `POST /api/tasks`

Creates a new task.

| Name | Values   | Description         |
| ---- | -------- | ------------------- |
| body | `String` | The new task object |

---
## Responses

### `201 Created`
Task successfully added.

```json
{
  "good": true,
  "message": "task added successfully"
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