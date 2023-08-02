import React, { useEffect } from 'react';
import './Timer.css';

export default function Timer({setSeconds, seconds, isTimerRunning}) {

  useEffect(() => {
    // ! Assigning the setInterval to the 'interval' variable in order to create ref. for clearInterval
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    // * Revert state to original status when comp. unmounts AND clear counting interval
    return () => {
      setSeconds(0);
      clearInterval(interval);
    };
  }, [isTimerRunning, setSeconds]);
  
  const formatTime = time => {
    if (!time) return '00:00';

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // * Return JSX
  return (
    <div className='timer'>
      <p>{formatTime(seconds)}</p>
    </div>
  );
}
