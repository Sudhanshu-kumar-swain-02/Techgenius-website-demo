import React, { useEffect, useState } from "react";

const CountUp = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000; // 2 seconds
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h3 className="text-3xl font-bold text-white">
      {count}
      {suffix}
    </h3>
  );
};

export default CountUp;