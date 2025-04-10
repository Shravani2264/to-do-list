import React, { useState } from "react";

function TodoInp(props) {
    const [inputText, setInputText] = useState('');
    return (
        <div className="input-container">
            <input
                type="text"
                className="input-box-todo"
                placeholder="Enter your work here"
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value)
                }} />
            <button className="add-btn"
                onClick={() => {
                    props.addList(inputText);
                    setInputText("");
                }}>+</button>
            <div></div>
        </div>
    );
}

export default TodoInp;
