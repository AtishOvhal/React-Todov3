import Addtodo from "./components/Addtodo";
import Appname from "./components/Appname";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";

function App() {
  const initialtodoItems = [
    {
      name: "buy milk",
      dueDate: "04/08/2024",
    },
    {
      name: "goto Collgae",
      dueDate: "08/12/2124",
    },
    {
      name: "I am loving it",
      dueDate: "03/09/2022",
    },
  ];

  const [todoItem, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item addes : ${itemName} date: ${itemDueDate}`);
    // const newTodoitem = [...todoItem, { name: itemDueDate, dueDate: itemDueDate },
    //   setTodoItems(newTodoitem)

    // ];
  };





  return (
    <>
      <center className="todo-container">
        <Appname />
        <Addtodo onNewItem={handleNewItem} />
        <Welcomemsg/>
        <TodoItems todoItem={initialtodoItems} />
      </center>
    </>
  );
}

export default App;
