# DELETE `/api/Workspaces/<id>`

Deletes an existing Workspace by their ID.

| Name   | Values     | Description              |
| ------ | ---------- | ------------------------ |
| `id`   | `Integer`  | Target workspace         |

---
## Responses

### `200 OK`
Workspace successfully deleted.
```json
{
  "good": true
}
```

### `404 Not Found`
No workspace exists with the given ID.
```json
{
  "good": false,
  "error": "Workspace with that ID does not exist"
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