import "./App.css";
import Digitalclock from "./digitalClock/digitalclock";
import Counter from "./counter/counter";
import Calculator from "./calculator/calculator";
import TemperatureConverter from "./temprature_converter/tempreature";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-200 ">
      <Digitalclock />
      <Counter />
      <Calculator />
      <TemperatureConverter />
    </div>
  );
}

export default App;
