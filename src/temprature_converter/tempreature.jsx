
import { useState } from "react";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("Celsius");

  const convertTemperature = () => {
    if (temperature === "") {
      return "";
    }

    const value = Number(temperature);

    if (unit === "Celsius") {
      return ((value * 9) / 5 + 32).toFixed(2);
    } else {
      return (((value - 32) * 5) / 9).toFixed(2);
    }
  };

  const result = convertTemperature();

  const resultUnit = unit === "Celsius" ? "°F" : "°C";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h2 className="text-2xl font-bold mb-6">
        Temperature Converter
      </h2>

      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <label htmlFor="temperature" className="mb-2 font-medium">
          Enter Temperature
        </label>

        <input
          id="temperature"
          type="number"
          placeholder="Enter temperature"
          className="p-2 border-2 border-pink-400 rounded-md w-full outline-none focus:border-pink-600"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />

        <p className="mt-5 mb-2 font-medium">Convert from</p>

        <div className="flex gap-3">
          <button
            onClick={() => setUnit("Celsius")}
            className={`py-2 px-4 rounded cursor-pointer text-white ${
              unit === "Celsius"
                ? "bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Celsius
          </button>

          <button
            onClick={() => setUnit("Fahrenheit")}
            className={`py-2 px-4 rounded cursor-pointer text-white ${
              unit === "Fahrenheit"
                ? "bg-green-700"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Fahrenheit
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">
            Converted Temperature
          </p>

          <h3 className="text-3xl font-bold text-gray-800">
            {result === "" ? "--" : `${result} ${resultUnit}`}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
