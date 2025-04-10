import React, { useState } from "react";
import "./App.css";
import TodoInp from "./components/TodoInp";
import Todolist from "./Todolist";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText != '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInp addList={addList} />
        <h1 className="app-heading">to do </h1>
        <hr />
        {listTodo.map((listItems, i) => {
          return (
            <Todolist key={i} index={i} item={listItems} deleteItem={deleteListItem} />
          )
        })}
      </div>
    </div>
  )
}
export default App