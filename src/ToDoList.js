import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList,handleToggle,handleFilter}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} handleToggle={handleToggle}  />
               )
           })}

        <button style={{margin: '20px'}} onClick={handleFilter}>Remove Completed Items</button>

       </div>
   );
};
 
export default ToDoList;