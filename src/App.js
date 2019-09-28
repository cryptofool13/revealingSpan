import React, { useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

import Revealer from "./Revealer";
import "./App.css";

function App() {
  const element = useRef();
  const [toggle, setToggle] = useState(1)
  const props = useSpring({ opacity: toggle ? 1 : 0 });
  return (
    <>
      <span
        ref={element}
        style={{ position: "relative", zIndex: 4, backgroundColor: "white" }}
      >
        M
      </span>
      <Revealer adjacent={element}>
        <span>ichael Curry</span>
      </Revealer>
    </>
  );
}

export default App;
