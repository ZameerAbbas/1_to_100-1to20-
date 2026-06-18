import { useState, useEffect } from "react";
const Digitalclock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center items-center w-[310px] h-[110px]  bg-gray-500">
      <div className="flex justify-center items-center flex-col bg-black text-white w-[300px] h-[100px] rounded-lg">
        <h1 className="text-4xl font-bold">Digital Clock</h1>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default Digitalclock;
