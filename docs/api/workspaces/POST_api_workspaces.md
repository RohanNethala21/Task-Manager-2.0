# `POST /api/workspaces`

Creates a new workspace.

| Name | Values   | Description              |
| ---- | -------- | ------------------------ |
| body | `String` | The new workspace object |

---
## Responses

### `201 Created`
Workspace successfully added.

```json
{
  "good": true,
  "message": "workspace added successfully"
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