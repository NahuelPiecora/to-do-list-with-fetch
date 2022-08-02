import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
  const [ToDoList, setToDoList] = useState([
    "Go to the gym",
    "Read a book",
    "Eat food",
  ]);

  const addItem = (onKeyDownEvent) => {
    if (onKeyDownEvent.keyCode === 13) {
      let newTask = onKeyDownEvent.target.value;
      const newList = [...ToDoList, newTask];
      setToDoList(newList);
      setInputValue("");
    }
  };
  const removeItem = (index) => {
    const removeTask = ToDoList.filter((item, i) => i != index);
    setToDoList(removeTask);
  };
  const [inputValue, setInputValue] = useState("");
  const [isShown, setIsShown] = useState({
    state: false,
    index: 0,
  });
  const list = ToDoList.map((item, i) => {
    return (
      <div className="repeating" key={i}>
        <li
          onMouseEnter={() => setIsShown({ state: true, index: i })}
          onMouseLeave={() => setIsShown({ state: false, index: 0 })}
        >
          {item}{" "}
          {isShown.state === true && isShown.index === i ? (
            <button onClick={() => removeItem(i)}>X</button>
          ) : (
            ""
          )}
        </li>
      </div>
    );
  });

  return (
    <div className="container-fluid card">
      <h1>ToDos</h1>
      <input
        type="text"
        onKeyDown={addItem}
        placeholder=" "
        id="fname"
        name="fname"
		onChange={e => setInputValue(e.target.value)}
		value={inputValue}
      />
      <div>
        <ul>
          {list}
          <li>
            {ToDoList.length > 1
              ? `${ToDoList.length} items`
              : ToDoList.length > 0
              ? `${ToDoList.length} item`
              : "No tasks, add a task"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
