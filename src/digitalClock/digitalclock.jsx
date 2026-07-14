// import { useState, useEffect } from "react";
// const Digitalclock = () => {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="flex justify-center items-center w-[310px] h-[110px]  bg-gray-500">
//       <div className="flex justify-center items-center flex-col bg-black text-white w-[300px] h-[100px] rounded-lg">
//         <h1 className="text-4xl font-bold">Digital Clock</h1>
//         <p>{time.toLocaleTimeString()}</p>
//       </div>
//     </div>
//   );
// };

// export default Digitalclock;

import { useState, useEffect, useMemo } from "react";

const DigitalClock = ({
  locale = "en-US",
  timeZone,
  showDate = true,
  hour12 = true,
}) => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12,
      timeZone,
    });
  }, [locale, timeZone, hour12]);

  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone,
    });
  }, [locale, timeZone]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 w-full">
      <div className="bg-black text-white p-8 rounded-xl shadow-lg text-center w-96">
        <h1 className="text-3xl font-bold mb-4">Digital Clock</h1>

        <p className="text-5xl font-mono text-green-400">
          {timeFormatter.format(time)}
        </p>

        {showDate && (
          <p className="mt-4 text-gray-400">{dateFormatter.format(time)}</p>
        )}
      </div>
    </div>
  );
};

export default DigitalClock;
