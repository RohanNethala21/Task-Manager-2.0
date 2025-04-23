BEGIN;
CREATE TABLE Users (
  user_id SERIAL NOT NULL,
  user_email varchar(100) NOT NULL UNIQUE,
  user_password varchar(1000) NOT NULL,
  PRIMARY KEY (user_id)
);
CREATE TABLE Workspaces (
  workspace_id SERIAL NOT NULL,
  user_id INT NOT NULL,
  workspace_name varchar(100) NOT NULL,
  PRIMARY KEY (workspace_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
CREATE INDEX idx_workspace_user ON Workspaces (user_id);
CREATE TABLE Tasks (
  task_id SERIAL NOT NULL,
  workspace_id INT NOT NULL,
  task_name varchar(100) NOT NULL,
  task_details varchar(1000),
  task_due_date DATE NOT NULL DEFAULT CURRENT_DATE,
  task_status varchar(20) NOT NULL DEFAULT 'pending',
  task_points INT NOT NULL DEFAULT 0,
  task_priority varchar(20) NOT NULL DEFAULT 'medium',
  task_parent INT,
  PRIMARY KEY (task_id),
  FOREIGN KEY (workspace_id) REFERENCES Workspaces(workspace_id) ON DELETE CASCADE
);
CREATE INDEX idx_task_workspace ON Tasks (workspace_id);
COMMIT;