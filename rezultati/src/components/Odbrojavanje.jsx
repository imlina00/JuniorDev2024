import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <p>Vrijeme proteklo:</p>
      <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
};

export default CountdownTimer;
