// src/components/TodoList.jsx
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch todos from API
        const fetchTodos = async () => {
            try {
                const response = await fetch('/api/todos');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Failed to fetch todos:', error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
