import React, { useState } from 'react';

const ToDoForm = ({addTask}) => {

    const [ userInput, setUserInput ] = useState('');

    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");

    }

    return (
        <div>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
        <button style={{margin: '10px'}} onClick={handleSubmit}>Add To List</button>

        </div>

    );

}

export default ToDoForm;