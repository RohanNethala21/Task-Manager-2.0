# DELETE `/api/tasks/<id>`

Deletes an existing Task by their ID.

| Name   | Values     | Description              |
| ------ | ---------- | ------------------------ |
| `id`   | `Integer`  | Target task              |

---
## Responses

### `200 OK`
Task successfully deleted.
```json
{
  "good": true
}
```

### `404 Not Found`
No Task exists with the given ID.
```json
{
  "good": false,
  "error": "Task with that ID does not exist"
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