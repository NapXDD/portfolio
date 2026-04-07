"use client";
import { Button } from "@/components/ui/button";
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
        <Button onClick={handleClick}>Press me!</Button>
      </div>
    </div>
  );
}
