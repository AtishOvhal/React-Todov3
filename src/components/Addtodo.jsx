
 import React from "react"
 import { useState } from "react"


function Addtodo({onNewItem}){


  const [todoName, setTodoName] = useState()
  const [dueDate, setDueDate] = useState();

  const handleNameChange =(e)=>{
    setTodoName(e.target.value)
    
  }

  const handleDateChange =(e)=>{
    setDueDate(e.target.value)

  }



  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };



    return (
        <>
        <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}/>
    </div>
    <div className="col-4">
      <input type="date" onChange={handleDateChange} value={dueDate}/>
    </div>
    <div className="col-2">
      <button className="btn btn-success " onClick={ handleAddButtonClicked}>
        Add
        
      </button>
    </div>
  </div>
        </>
    )
}
export default Addtodo