import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  }

  return (
    <div className="bg-[#3B4664] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#3B4664] rounded-lg p-6">
        <div>
          {/* display */}
          <div className="bg-[#181F32]  rounded-md"></div>
          {/* buttons */}
          <div className="bg-[#262C43] rounded-md">
            <div className="grid grid-cols-4 gap-2 p-2">
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"  
              onClick={() => handleButtonClick("7")}
              >
                7
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer  ">
                8
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                9
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                del
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                4
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                5
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer  ">
                6
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                +
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                1
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                2
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                3
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                -
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                .
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                0
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                /
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer">
                x
              </button>
            </div>
            <div className="flex justify-around items-center flex-row gap-2  p-2">
              <div className=" w-full">
                <button className="bg-[#647299] text-white p-4 rounded-lg w-full cursor-pointer ">
                  reset
                </button>
              </div>
              <div className=" w-full">
                <button className="bg-[#647299] text-white p-4 rounded-lg w-full cursor-pointer">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
