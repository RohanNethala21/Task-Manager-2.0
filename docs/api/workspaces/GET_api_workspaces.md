# `GET /api/workspaces`

Retrieves workspace(s) based on query parameters provided in the URL.

### Example Request
```
GET /api/workspaces?workspace_id=123
```

### Query Parameters
- `workspace_id` (optional): Filter by a specific workspace ID  
- `workspace_name` (optional): Filter by workspace name  
- `user_id` (optional): Filter by user ID 

---

## Responses

### `200 OK`
Returned when one or more workspaces are successfully retrieved.

#### Example Response
```json
{
  "data": [
    {
      "user_id": 1,
      "workspace_id": 1,
      "workspace_name": "Test Workspace 1"
    }
  ]
}
```

---

### `404 Not Found`
Returned when no matching workspaces are found.

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