import React, { useState } from 'react';
import styled from 'styled-components';
import { useTask } from '../../contexts/TaskContext';

const TasksContainer = styled.div`
  padding: 20px;
`;

const TasksHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const TasksTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const TasksSubtitle = styled.p`
  color: ${props => props.theme.colors.darkGray};
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  max-width: 400px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 100%;
    width: 100%;
  }
`;

const AddTaskButton = styled.button`
  padding: 12px 20px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`;

const TaskListSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const TaskCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;
`;

const TaskCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border-left: 4px solid ${props => {
    switch (props.priority) {
      case 'high':
        return props.theme.colors.warning;
      case 'medium':
        return props.theme.colors.highPriority;
      default:
        return props.theme.colors.success;
    }
  }};
`;

const TaskCheckbox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${props => props.completed ? props.theme.colors.success : props.theme.colors.lightGray};
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.completed ? props.theme.colors.success : 'transparent'};
  
  svg {
    display: ${props => props.completed ? 'block' : 'none'};
  }
`;

const TaskContent = styled.div`
  flex: 1;
`;

const TaskTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? props.theme.colors.darkGray : props.theme.colors.text};
`;

const TaskDetails = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.darkGray};
`;

const TaskCategory = styled.span`
  margin-right: 15px;
`;

const TaskDueDate = styled.span`
  color: ${props => props.overdue ? props.theme.colors.warning : props.theme.colors.darkGray};
  font-weight: ${props => props.overdue ? 'bold' : 'normal'};
`;

const TaskActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.darkGray};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const AddNewTaskSection = styled.div`
  margin-bottom: 40px;
`;

const TaskForm = styled.form`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`;

const CategoryOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryOption = styled.div`
  padding: 8px 15px;
  border-radius: 20px;
  background-color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.lightGray};
  color: ${props => props.selected ? 'white' : props.theme.colors.text};
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${props => props.selected ? props.theme.colors.primary : '#d0d0d0'};
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: #333;
  }
`;

const FiltersSection = styled.div`
  margin-bottom: 40px;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const FilterCard = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FilterOption = styled.div`
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const NoTasksMessage = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.darkGray};
`;

const Tasks = () => {
  const { tasks, addTask, deleteTask, toggleTaskCompletion, editTask } = useTask();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [showEditTaskForm, setShowEditTaskForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    category: 'Work',
    dueDate: '',
    priority: 'medium'
  });
  const [editingTask, setEditingTask] = useState({
    id: null,
    title: '',
    category: 'Work',
    dueDate: '',
    priority: 'medium'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const handleAddTaskClick = () => {
    setShowAddTaskForm(true);
    setShowEditTaskForm(false);
  };
  
  const handleEditTaskClick = (task) => {
    setEditingTask({
      id: task.id,
      title: task.title,
      category: task.category,
      dueDate: task.dueDate || '',
      priority: task.priority
    });
    setShowEditTaskForm(true);
    setShowAddTaskForm(false);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value
    });
  };
  
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditingTask({
      ...editingTask,
      [name]: value
    });
  };
  
  const handleCategorySelect = (category) => {
    setNewTask({
      ...newTask,
      category
    });
  };
  
  const handleEditCategorySelect = (category) => {
    setEditingTask({
      ...editingTask,
      category
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newTask.title) {
      alert('Please enter a task title');
      return;
    }
    
    addTask(newTask);
    
    // Reset form
    setNewTask({
      title: '',
      category: 'Work',
      dueDate: '',
      priority: 'medium'
    });
    
    setShowAddTaskForm(false);
  };
  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    
    if (!editingTask.title) {
      alert('Please enter a task title');
      return;
    }
    
    // Extract the id and create an updated task object
    const { id, ...updatedTask } = editingTask;
    
    // Call the editTask function from context
    editTask(id, updatedTask);
    
    // Reset form and hide it
    setEditingTask({
      id: null,
      title: '',
      category: 'Work',
      dueDate: '',
      priority: 'medium'
    });
    
    setShowEditTaskForm(false);
  };
  
  const filteredTasks = tasks.filter(task => {
    // Apply search filter
    if (searchTerm && !task.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Apply completion filter
    if (filter === 'completed' && !task.completed) {
      return false;
    }
    
    if (filter === 'active' && task.completed) {
      return false;
    }
    
    return true;
  });
  
  // Check if a date is overdue
  const isOverdue = (dateString) => {
    if (!dateString) return false;
    const dueDate = new Date(dateString);
    const today = new Date();
    return dueDate < today;
  };
  
  return (
    <TasksContainer>
      <TasksHeader>
        <TasksTitle>Task Management Page</TasksTitle>
        <TasksSubtitle>Stay organized and productive with Task Manager 2.0</TasksSubtitle>
      </TasksHeader>
      
      <SearchContainer>
        <SearchInput 
          type="text" 
          placeholder="Search tasks..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AddTaskButton onClick={handleAddTaskClick}>Add New Task</AddTaskButton>
      </SearchContainer>
      
      {showAddTaskForm && (
        <AddNewTaskSection>
          <SectionTitle>Add New Task</SectionTitle>
          <TaskForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="title">Task Name</Label>
                <Input 
                  type="text" 
                  id="title" 
                  name="title"
                  placeholder="Enter task name" 
                  value={newTask.title}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input 
                  type="date" 
                  id="dueDate" 
                  name="dueDate"
                  value={newTask.dueDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label>Priority</Label>
                <Select 
                  name="priority"
                  value={newTask.priority}
                  onChange={handleInputChange}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Category</Label>
                <CategoryOptions>
                  <CategoryOption 
                    selected={newTask.category === 'Work'} 
                    onClick={() => handleCategorySelect('Work')}
                  >
                    Work
                  </CategoryOption>
                  <CategoryOption 
                    selected={newTask.category === 'Personal'} 
                    onClick={() => handleCategorySelect('Personal')}
                  >
                    Personal
                  </CategoryOption>
                  <CategoryOption 
                    selected={newTask.category === 'School'} 
                    onClick={() => handleCategorySelect('School')}
                  >
                    School
                  </CategoryOption>
                  <CategoryOption 
                    selected={newTask.category === 'Other'} 
                    onClick={() => handleCategorySelect('Other')}
                  >
                    Other
                  </CategoryOption>
                </CategoryOptions>
              </FormGroup>
            </FormRow>
            
            <SubmitButton type="submit">Add Task</SubmitButton>
          </TaskForm>
        </AddNewTaskSection>
      )}
      
      {showEditTaskForm && (
        <AddNewTaskSection>
          <SectionTitle>Edit Task</SectionTitle>
          <TaskForm onSubmit={handleEditSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="editTitle">Task Name</Label>
                <Input 
                  type="text" 
                  id="editTitle" 
                  name="title"
                  placeholder="Enter task name" 
                  value={editingTask.title}
                  onChange={handleEditInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="editDueDate">Due Date</Label>
                <Input 
                  type="date" 
                  id="editDueDate" 
                  name="dueDate"
                  value={editingTask.dueDate}
                  onChange={handleEditInputChange}
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label>Priority</Label>
                <Select 
                  name="priority"
                  value={editingTask.priority}
                  onChange={handleEditInputChange}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Category</Label>
                <CategoryOptions>
                  <CategoryOption 
                    selected={editingTask.category === 'Work'} 
                    onClick={() => handleEditCategorySelect('Work')}
                  >
                    Work
                  </CategoryOption>
                  <CategoryOption 
                    selected={editingTask.category === 'Personal'} 
                    onClick={() => handleEditCategorySelect('Personal')}
                  >
                    Personal
                  </CategoryOption>
                  <CategoryOption 
                    selected={editingTask.category === 'School'} 
                    onClick={() => handleEditCategorySelect('School')}
                  >
                    School
                  </CategoryOption>
                  <CategoryOption 
                    selected={editingTask.category === 'Other'} 
                    onClick={() => handleEditCategorySelect('Other')}
                  >
                    Other
                  </CategoryOption>
                </CategoryOptions>
              </FormGroup>
            </FormRow>
            
            <SubmitButton type="submit">Update Task</SubmitButton>
          </TaskForm>
        </AddNewTaskSection>
      )}
      
      <TaskListSection>
        <SectionTitle>Task List</SectionTitle>
        
        {filteredTasks.length > 0 ? (
          <TaskCardsContainer>
            {filteredTasks.map(task => (
              <TaskCard key={task.id} priority={task.priority}>
                <TaskCheckbox 
                  completed={task.completed}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                  </svg>
                </TaskCheckbox>
                
                <TaskContent>
                  <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
                  <TaskDetails>
                    <TaskCategory>{task.category}</TaskCategory>
                    {task.dueDate && (
                      <TaskDueDate overdue={isOverdue(task.dueDate)}>
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </TaskDueDate>
                    )}
                  </TaskDetails>
                </TaskContent>
                
                <TaskActions>
                  <ActionButton onClick={() => handleEditTaskClick(task)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
                    </svg>
                  </ActionButton>
                  
                  <ActionButton onClick={() => deleteTask(task.id)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
                    </svg>
                  </ActionButton>
                </TaskActions>
              </TaskCard>
            ))}
          </TaskCardsContainer>
        ) : (
          <NoTasksMessage>
            No tasks found. Add a new task to get started!
          </NoTasksMessage>
        )}
      </TaskListSection>
      
      <FiltersSection>
        <SectionTitle>Filters & Sorting</SectionTitle>
        <FiltersContainer>
          <FilterCard>
            <FilterTitle>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" fill="currentColor"/>
              </svg>
              Filter By Status
            </FilterTitle>
            <FilterOptions>
              <FilterOption 
                style={{fontWeight: filter === 'all' ? 'bold' : 'normal'}}
                onClick={() => setFilter('all')}
              >
                All Tasks
              </FilterOption>
              <FilterOption 
                style={{fontWeight: filter === 'active' ? 'bold' : 'normal'}}
                onClick={() => setFilter('active')}
              >
                Active Tasks
              </FilterOption>
              <FilterOption 
                style={{fontWeight: filter === 'completed' ? 'bold' : 'normal'}}
                onClick={() => setFilter('completed')}
              >
                Completed Tasks
              </FilterOption>
            </FilterOptions>
          </FilterCard>
        </FiltersContainer>
      </FiltersSection>
    </TasksContainer>
  );
};

export default Tasks;
