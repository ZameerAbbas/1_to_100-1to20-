import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (count === 0) return;
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="flex justify-center items-center p-3 bg-gray-500">
        <div className="flex items-center justify-around flex-row gap-2 bg-[#6A6FFC] w-[300px] text-white  p-3 rounded-lg">
               <button onClick={handleIncrement} className="  cursor-pointer">+</button>
               <p>{count}</p>
               <button onClick={handleDecrement} className="  cursor-pointer">-</button>
          </div>
    </div>
  )}

export default Counter;
