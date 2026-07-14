import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handledel = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  console.log(display);

  const handleReset = () => {
    setDisplay("0");
  };

   const handleOperation = (operator) => {
    setDisplay((prevDisplay) => prevDisplay + operator);
  }

  const handleResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay(error.message);
    }
  };

  console.log(display);

  return (
    <div className="bg-[#3B4664] min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#3B4664] rounded-lg p-6">
        <div className="flex flex-col gap-4">
          {/* display */}
          <div className="bg-[#181F32]  rounded-md ">
            <p className="text-white text-right p-4 text-2xl">{display}</p>
          </div>
          {/* buttons */}
          <div className="bg-[#262C43] rounded-md">
            <div className="grid grid-cols-4 gap-2 p-2">
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer "
                onClick={() => handleButtonClick("7")}
              >
                7
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer  "
                onClick={() => handleButtonClick("8")}
              >
                8
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("9")}
              >
                9
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handledel()}
              >
                del
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("4")}
              >
                4
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("5")}
              >
                5
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("6")}
              >
                6
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleOperation("+")}
              >
                +
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("1")}
              >
                1
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("2")}
              >
                2
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("3")}
              >
                3
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleOperation("-")}
                  >
                -
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleOperation(".")}
                >
                .
              </button>
              <button
                className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleButtonClick("0")}
              >
                0
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleOperation("/")}
              >
                /
              </button>
              <button className="bg-[#647299] text-white p-4 rounded-lg cursor-pointer"
                onClick={() => handleOperation("*")}
              >
                x
              </button>
            </div>
            <div className="flex justify-around items-center flex-row gap-2  p-2">
              <div className=" w-full">
                <button className="bg-[#647299] text-white p-4 rounded-lg w-full cursor-pointer "
                  onClick={handleReset}
                >
                  reset
                </button>
              </div>
              <div className=" w-full">
                <button className="bg-[#647299] text-white p-4 rounded-lg w-full cursor-pointer"
                  onClick={() => handleResult()}
                >
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
