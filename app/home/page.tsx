"use client";
import { useState } from "react";

export default function HomePage() {
  let [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter++);
  };

  return (
    <div className="flex flex-col">
      <div>{counter}</div>
      <div>
        <button onClick={handleClick}>Press me!</button>
      </div>
    </div>
  );
}
