# PUT `/api/workspaces/<id>`

Edits an existing Workspace's information by its ID.

| Name   | Values    | Description              |
| ------ | --------- | ------------------------ |
| `id`   | `Integer` | Target workspace         |
| `body` | `String`  | The new Workspace object |

---
## Responses

### `201 Created`
Workspace successfully edited.
```json
{
  "good": true,
  "message": "Workspace edited successfully"
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
No workspace exists with the given ID.
```json
{
  "good": false,
  "error": "Workspace with that ID does not exist"
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