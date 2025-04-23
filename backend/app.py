from os import getenv
from flask import Flask, jsonify, request
import psycopg2 as psql

app = Flask(__name__)
def get_db_connection():
  return psql.connect(
    dbname=getenv("DATABASE_NAME"),
    user=getenv("DATABASE_USER"),
    password=getenv("DATABASE_PASSWORD"),
    host=getenv("DATABASE_HOST"),
    port=int(getenv("DATABASE_PORT", -1)),
  )

connection = get_db_connection()
#---------------------------------------------------------------------------------------------------
#GET FUNCTIONS
@app.route('/api/users', methods=['GET'])
def get_users():
  cursor = connection.cursor()
  try:
    query_params = request.args
    if not query_params:
      return jsonify(good=False, error="At least one query parameter is required"), 400
    conditions = []
    params = []
    for querytype, queryvalue in query_params.items():
      conditions.append(f"{querytype} = %s")
      params.append(queryvalue)
    query_string = f"SELECT * FROM users WHERE {' AND '.join(conditions)}"
    cursor.execute(query_string, tuple(params))
    data = cursor.fetchall()
    if not data:
        cursor.close()
        return jsonify(good=False, error=("Query error")), 404
    column_names = [desc[0] for desc in cursor.description]
    dictionary = [dict(zip(column_names, row)) for row in data]
    cursor.close()
    return jsonify(good=True, data=dictionary), 200
  except Exception as e:
    connection.commit()
    app.logger.error("%s", e)
    return jsonify(good=False, error="internal server error"), 500
  
@app.route('/api/workspaces', methods=['GET'])
def get_workspaces():
    cursor = connection.cursor()
    try:
        query_params = request.args
        if not query_params:
            return jsonify(good=False, error="At least one query parameter is required"), 400
        
        conditions = []
        params = []
        for querytype, queryvalue in query_params.items():
            
            conditions.append(f"{querytype} = %s")
            params.append(queryvalue)
        
        query_string = f"SELECT * FROM workspaces WHERE {' AND '.join(conditions)}"
        
        
        cursor.execute(query_string, tuple(params))
        
        data = cursor.fetchall()
        if not data:
            return jsonify(good=False, error="Query error"), 404
        
        column_names = [desc[0] for desc in cursor.description]
        dictionary = [dict(zip(column_names, row)) for row in data]
        
        cursor.close()  
        return jsonify(good=True, data=dictionary), 200

    except Exception as e:
        app.logger.error("%s", e)
        return jsonify(good=False, error="Internal server error"), 500
  
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    cursor = connection.cursor()
    try:
        query_params = request.args
        if not query_params:
            return jsonify(good=False, error="At least one query parameter is required"), 400
        
        conditions = []
        params = []
        for querytype, queryvalue in query_params.items():
            conditions.append(f"{querytype} = %s")
            params.append(queryvalue)
        
        query_string = f"SELECT * FROM tasks WHERE {' AND '.join(conditions)}"
        
        
        cursor.execute(query_string, tuple(params))
        
        data = cursor.fetchall()
        if not data:
            return jsonify(good=False, error="Query error"), 404
        
        column_names = [desc[0] for desc in cursor.description]
        dictionary = [dict(zip(column_names, row)) for row in data]
        
        cursor.close()
        
        return jsonify(good=True, data=dictionary), 200

    except Exception as e:
        app.logger.error("%s", e)
        return jsonify(good=False, error="Internal server error"), 500


#---------------------------------------------------------------------------------------------------
#ADD FUNCTIONS
@app.route('/api/users', methods=['POST'])
def add_users():
  cursor = connection.cursor()
  try:
    data = request.get_json()
    
    user_email = data.get("user_email")
    user_password = data.get("user_password")
    
    required_fields = [
      user_email,
      user_password
    ]
    
    if any(field is None for field in required_fields):
      return jsonify(good=False, error="Missing required fields"), 400
    cursor.execute(
      "INSERT INTO users (\
        user_email,user_password\
        )  VALUES (%s, %s)",
      (
        user_email, user_password
      ),
      )
    connection.commit()
    return jsonify(good=True, message="User added successfully"), 201
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500

@app.route('/api/workspaces', methods=['POST'])
def add_workspaces():
  cursor = connection.cursor()
  try:
    data = request.get_json()
    
    user_id = data.get("user_id")
    workspace_name = data.get("workspace_name")
    
    required_fields = [
      user_id,
      workspace_name
    ]
    
    if any(field is None for field in required_fields):
      return jsonify(good=False, error="Missing required fields"), 400
    cursor.execute(
      "INSERT INTO workspaces (\
        user_id,workspace_name\
        )  VALUES (%s, %s)",
      (
        user_id, workspace_name
      ),
      )
    connection.commit()
    return jsonify(good=True, message="Workspace added successfully"), 201
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500
  
@app.route('/api/tasks', methods=['POST'])
def add_tasks():
  cursor = connection.cursor()
  try:
    data = request.get_json()
    
    workspace_id = data.get("workspace_id")
    task_name = data.get("task_name")
    task_details  = data.get("task_details")
    task_due_date = data.get("task_due_date")
    task_status = data.get("task_status")
    task_points = data.get("task_points")
    task_priority = data.get("task_priority")
    
    required_fields = [
      workspace_id,
      task_name,
      task_details,
      task_due_date,
      task_status,
      task_points,
      task_priority
    ]
    
    if any(field is None for field in required_fields):
      return jsonify(good=False, error="Missing required fields"), 400
    cursor.execute(
      "INSERT INTO tasks (\
        workspace_id,task_name,task_details,task_due_date,task_status,task_points,task_priority\
        )  VALUES (%s, %s, %s, %s, %s, %s, %s)",
      (
        workspace_id,task_name,task_details,task_due_date,task_status,task_points,task_priority
      ),
      )
    connection.commit()
    return jsonify(good=True, message="Task added successfully"), 201
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500

#---------------------------------------------------------------------------------------------------
#EDIT FUNCTIONS
@app.route('/api/users/<id>', methods=['PUT'])
def edit_users(id):
  cursor = connection.cursor()
  try:
    data = request.get_json()
    
    user_email = data.get("user_email")
    user_password = data.get("user_password")
    
    required_fields = [
      user_email,
      user_password
    ]
    
    if any(field is None for field in required_fields):
      return jsonify(good=False, error="Missing required fields"), 400
    cursor.execute(
      "UPDATE users SET\
        user_email=%s, user_password=%s WHERE user_id=%s",
      (
        user_email, user_password, id
      ),
      )
    connection.commit()
    if cursor.rowcount == 0:
            return (
                jsonify(good=False, error=("User with that ID does not exist")),
                404,
            )
    return jsonify(good=True, message="User edited successfully"), 201
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500
  
@app.route('/api/workspaces/<id>', methods=['PUT'])
def edit_workspaces(id):
  cursor = connection.cursor()
  try:
    data = request.get_json()
    
    user_id = data.get("user_id")
    workspace_name = data.get("workspace_name")
    
    required_fields = [
      user_id,
      workspace_name
    ]
    
    if any(field is None for field in required_fields):
      return jsonify(good=False, error="Missing required fields"), 400
    cursor.execute(
      "UPDATE workspaces SET\
        user_id=%s, workspace_name=%s WHERE workspace_id=%s",
      (
        user_id, workspace_name, id
      ),
      )
    connection.commit()
    if cursor.rowcount == 0:
            return (
                jsonify(good=False, error=("Workspace with that ID does not exist")),
                404,
            )
    return jsonify(good=True, message="Workspace edited successfully"), 201
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500
  
@app.route('/api/tasks/<id>', methods=['PUT'])
def edit_tasks(id):
  cursor = connection.cursor()
  try:
    data = request.get_json()
    
    workspace_id = data.get("workspace_id")
    task_name = data.get("task_name")
    task_details  = data.get("task_details")
    task_due_date = data.get("task_due_date")
    task_status = data.get("task_status")
    task_points = data.get("task_points")
    task_priority = data.get("task_priority")
    
    required_fields = [
      workspace_id,
      task_name,
      task_details,
      task_due_date,
      task_status,
      task_points,
      task_priority
    ]
    
    if any(field is None for field in required_fields):
      return jsonify(good=False, error="Missing required fields"), 400
    cursor.execute(
      "UPDATE tasks SET\
        workspace_id=%s, task_name=%s, task_details=%s, task_due_date=%s,\
        task_status=%s, task_points=%s, task_priority=%s WHERE task_id=%s",
      (
        workspace_id,task_name,task_details,task_due_date,task_status,task_points,task_priority,id
      ),
      )
    connection.commit()
    if cursor.rowcount == 0:
            return (
                jsonify(good=False, error=("Task with that ID does not exist")),
                404,
            )
    return jsonify(good=True, message="Task edited successfully"), 201
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500
  
@app.route('/api/subtasks/<id>', methods=['PUT'])
def edit_subtasks(id):
  cursor = connection.cursor()
  try:
    data = request.get_json()
    
    task_id = data.get("task_id")
    subtask_details = data.get("subtask_details")
    subtask_due_date = data.get("subtask_due_date")
    subtask_status = data.get("subtask_status")
    required_fields = [
      task_id,
      subtask_details,
      subtask_due_date,
      subtask_status
    ]
    
    if any(field is None for field in required_fields):
      return jsonify(good=False, error="Missing required fields"), 400
    cursor.execute(
      "UPDATE subtasks SET\
        task_id=%s, subtask_details=%s, subtask_due_date=%s, subtask_status=%s WHERE subtask_id=%s",
      (
        task_id,subtask_details,subtask_due_date,subtask_status,id
      ),
      )
    connection.commit()
    if cursor.rowcount == 0:
            return (
                jsonify(good=False, error=("Subtask with that ID does not exist")),
                404,
            )
    return jsonify(good=True, message="Subtask edited successfully"), 201
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500
#---------------------------------------------------------------------------------------------------
#DELETE FUNCTIONS

@app.route('/api/users/<id>', methods=['DELETE'])
def delete_users(id):
  cursor = connection.cursor()
  try:
    cursor.execute("DELETE FROM users WHERE user_id=%s",(id))
    connection.commit()
    if cursor.rowcount == 0:
            return (
                jsonify(good=False, error=("User with that ID does not exist")),
                404,
            )
    return jsonify(good=True), 200
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500
  
@app.route('/api/workspaces/<id>', methods=['DELETE'])
def delete_workspaces(id):
  cursor = connection.cursor()
  try:
    cursor.execute("DELETE FROM workspaces WHERE workspace_id=%s",(id))
    connection.commit()
    if cursor.rowcount == 0:
            return (
                jsonify(good=False, error=("Workspace with that ID does not exist")),
                404,
            )
    return jsonify(good=True), 200
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500

@app.route('/api/tasks/<id>', methods=['DELETE'])
def delete_tasks(id):
  cursor = connection.cursor()
  try:
    cursor.execute("DELETE FROM tasks WHERE task_id=%s",(id))
    connection.commit()
    if cursor.rowcount == 0:
            return (
                jsonify(good=False, error=("Task with that ID does not exist")),
                404,
            )
    return jsonify(good=True), 200
  except Exception as e:
    cursor.execute("rollback")
    connection.commit()
    app.logger.info("%s", e)
    return jsonify(good=False, error="internal server error"), 500
  