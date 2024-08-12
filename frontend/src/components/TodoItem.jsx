import React from 'react';

const TodoItem = ({ todo }) => {
    const handleToggle = async () => {
        try {
            await fetch(`/api/todos/${todo._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !todo.completed }),
            });
            // Refresh the todo list (in a real app, you might want to handle this differently)
            window.location.reload();
        } catch (error) {
            console.error('Failed to update todo:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(`/api/todos/${todo._id}`, {
                method: 'DELETE',
            });
            // Refresh the todo list (in a real app, you might want to handle this differently)
            window.location.reload();
        } catch (error) {
            console.error('Failed to delete todo:', error);
        }
    };

    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={handleToggle}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
console.log('Fetched todos:', data);
