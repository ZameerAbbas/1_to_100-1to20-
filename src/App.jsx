import "./App.css";
import Digitalclock from "./digitalClock/digitalclock";
import Counter from "./counter/counter";
import Calculator from "./calculator/calculator";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-200 ">
      <Digitalclock />
      <Counter />
      <Calculator />
    </div>
  );
}

export default App;
