import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Components from "./Components.jsx";
import Usercomponent from "./Usercomponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Components />
      <Usercomponent />
    </>
  );
}

export default App;
