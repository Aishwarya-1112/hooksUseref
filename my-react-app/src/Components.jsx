import { useState, useEffect, useRef } from "react";

const Components = () => {
  const [name, setName] = useState("");

  const userInput = useRef();

  const display = () => {
    console.log(userInput.current.value);
  };
  useEffect(() => {
    userInput.current = name;
  });
  return (
    <div>
      <input
        ref={userInput}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>name is {name}</p>
      <p>name is {userInput.current}</p>

      <button
        onClick={display}
        type="Submit"
      >
        Submit
      </button>
    </div>
  );
};
export default Components;
