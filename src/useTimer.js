import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [splits, setSplits] = useState([]);

  const [isRunning, setIsRunning] = useState(false);
  const refInterval = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    refInterval.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(refInterval.current);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    setSplits([]);
  };

  const addSplit = () => {
    setSplits(prev => [...prev, time]);
  };

  return { time, startTimer, stopTimer, resetTimer, splits, addSplit, isRunning };
};

export default useTimer;
