import React from 'react'
import TodoItem from './TodoItem'
import '../components/TodoItems.css'

function TodoItems({todoItem}) {
  return (
    <div>
      <div className="items-container">
{todoItem.map((item) =>  <TodoItem todoDate={item.dueDate} todoName={item.name} >

</TodoItem>)}


        {/* <TodoItem todoDAte={" 04/9/2026"} todoName={' Buy Cloths'} ></TodoItem>
        <TodoItem todoDAte={" 04/9/2026"} todoName={' Buy Cloths'} ></TodoItem> */}
        
      </div>
    </div>
  )
}

export default TodoItems
