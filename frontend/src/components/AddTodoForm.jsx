import React, { useState } from 'react';

const AddTodoForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });
            setText(''); // Clear input field after submission
            // Refresh the todo list (in a real app, you might want to handle this differently)
            window.location.reload();
        } catch (error) {
            console.error('Failed to add todo:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
                required
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodoForm;
console.log('Fetched todos:', data);
