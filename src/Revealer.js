import React, { useCallback, useState } from "react";
import { animated, useSpring } from "react-spring";

const trans = x => `translateX(${x}px)`;

export default function Revealer({ children, adjacent }) {
  const [width, setWidth] = useState(0);
  const [props, set] = useSpring(() => ({ x: -100000 })); // some value way larger than the content width + viewport width
  const spanRef = useCallback(node => {
    if (node !== null) {
      let inner = node.childNodes[0];
      setWidth(inner.clientWidth * -1);
    }
  }, []);

  return (
    <span
      onMouseEnter={() => set({ x: adjacent.current.clientWidth })}
      onMouseLeave={() => set({ x: width })}
      ref={spanRef}
    >
      <animated.span
        style={{
          display: "inline-block",
          transform: props.x.interpolate(trans),
        }}
      >
        {children}
      </animated.span>
    </span>
  );
}
