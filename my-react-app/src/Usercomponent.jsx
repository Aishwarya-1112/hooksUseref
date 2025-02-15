import { useEffect, useRef, useState } from "react";

const Usercomponent = () => {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = input;
  });

  const eventHandle = () => {
    console.log(inputRef.current);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>name of this one {input}</p>
      <p>name of previous one this: {inputRef.current}</p>
      <button onClick={eventHandle}>Click me</button>
    </div>
  );
};
export default Usercomponent;
