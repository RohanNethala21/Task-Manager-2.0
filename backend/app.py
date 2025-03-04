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

@app.route('/api/users', methods=['GET'])
def get_users():
  try:
    query_params = request.args
    if not query_params:
      return jsonify(good=False, error="At least one query parameter is required"), 400
    conditions = []
    params = []
    for querytype, queryvalue in query_params.items():
      conditions.append(f"{querytype} = %s")
      params.append(queryvalue)
    cursor = connection.cursor()
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
        
        connection = get_db_connection()
        cursor = connection.cursor()
        
        cursor.execute(query_string, tuple(params))
        
        data = cursor.fetchall()
        if not data:
            return jsonify(good=False, error="Query error"), 404
        
        column_names = [desc[0] for desc in cursor.description]
        dictionary = [dict(zip(column_names, row)) for row in data]
        
        cursor.close()
        connection.close()
        
        return jsonify(good=True, data=dictionary), 200

    except Exception as e:
        app.logger.error("%s", e)
        return jsonify(good=False, error="Internal server error"), 500
      
      
@app.route('/api/tasks', methods=['GET'])
def get_tasks():
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
        
        connection = get_db_connection()
        cursor = connection.cursor()
        
        cursor.execute(query_string, tuple(params))
        
        data = cursor.fetchall()
        if not data:
            return jsonify(good=False, error="Query error"), 404
        
        column_names = [desc[0] for desc in cursor.description]
        dictionary = [dict(zip(column_names, row)) for row in data]
        
        cursor.close()
        connection.close()
        
        return jsonify(good=True, data=dictionary), 200

    except Exception as e:
        app.logger.error("%s", e)
        return jsonify(good=False, error="Internal server error"), 500
      
      
@app.route('/api/subtasks', methods=['GET'])
def get_subtasks():
    try:
        query_params = request.args
        if not query_params:
            return jsonify(good=False, error="At least one query parameter is required"), 400
        
        conditions = []
        params = []
        for querytype, queryvalue in query_params.items():
            conditions.append(f"{querytype} = %s")
            params.append(queryvalue)
        
        query_string = f"SELECT * FROM subtasks WHERE {' AND '.join(conditions)}"
        
        connection = get_db_connection()
        cursor = connection.cursor()
        
        cursor.execute(query_string, tuple(params))
        
        data = cursor.fetchall()
        if not data:
            return jsonify(good=False, error="Query error"), 404
        
        column_names = [desc[0] for desc in cursor.description]
        dictionary = [dict(zip(column_names, row)) for row in data]
        
        cursor.close()
        connection.close()
        
        return jsonify(good=True, data=dictionary), 200

    except Exception as e:
        app.logger.error("%s", e)
        return jsonify(good=False, error="Internal server error"), 500