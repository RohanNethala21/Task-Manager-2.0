# `GET /api/tasks`

Retrieves workspace(s) based on query parameters provided in the URL.

### Example Request
```
GET /api/tasks?task_id=123
```

### Query Parameters
- `task_id` (optional): Filter by a specific task ID  
- `task_name` (optional): Filter by task name  
- `workspace_id` (optional): Filter by workspace ID 
- `task_date` (optional): Filter by task due date
- `task_status` (optional): Filter by task status
- `task_priority` (optional): Filter by task priority

---

## Responses

### `200 OK`
Returned when one or more tasks are successfully retrieved.

#### Example Response
```json
{
  "data": [
    {
      "task_details": "Initialize schema and seed test data for development.",
      "task_due_date": "Fri, 25 Apr 2025 00:00:00 GMT",
      "task_id": 2,
      "task_name": "Set Up Database",
      "task_points": 8,
      "task_priority": "medium",
      "task_status": "pending",
      "workspace_id": 2
    }
  ]
}
```

---

### `404 Not Found`
Returned when no matching tasks are found.

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