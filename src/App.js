import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import data from './data.json';

//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import CountItems from "./CountItems";

function App() {

  //Set the initial state
  const [ toDoList, setToDoList ] = useState(data);
  // Set initial state for number of items
  const [numberOfItemsLeft, setItemsLeft] = useState(toDoList.length)


  //count the number of remaining items left to complete
  function remainingItems (list) {

    let remainingItems = list.filter( task => {
      return task.complete == false;
    });
  
    return remainingItems
  }


  //switches item from either False -> true OR True to False
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });

    // let remainingItems = toDoList.filter( task => {
    //   return task.complete == false;
    // });
    setToDoList(mapped);
    setItemsLeft(remainingItems(mapped).length)
  }


  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
    setItemsLeft(filtered.length);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
    setItemsLeft(remainingItems(copy).length)
  }

  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
      <CountItems numberOfItemsLeft={numberOfItemsLeft}/>
    </div>
  );
}

export default App;
