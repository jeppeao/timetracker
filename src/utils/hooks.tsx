import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stopTime, setStopTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0)

  const updateElapsed = (start: number) => {
    setElapsedTime(Math.floor((Date.now() - startTime!) / 1000));
  }

  useEffect(() => {
    const id = setInterval(updateElapsed, 1000);
    if (stopTime || !startTime) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [startTime, stopTime])

  const start = () => {
    setStartTime(Date.now());
    setStopTime(null);
    setElapsedTime(0);
  }
  
  const stop = () => {
    setStopTime(Date.now())
  }

  const resume = () => {
    setStopTime(null);
  }

  const reset = () => {
    setStartTime(null);
    setStopTime(null);
    setElapsedTime(0);
  }

  return {
    start,
    stop,
    resume, 
    reset, 
    startTime, 
    stopTime, 
    elapsedTime, 
    setStartTime
  }
}

export { useTimer }