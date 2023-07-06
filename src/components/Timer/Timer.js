import React, { useEffect } from 'react';
import './Timer.css';

export default function Timer({setSeconds, seconds, isTimerRunning}) {

  useEffect(() => {
    let interval = null;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      setSeconds(0);
      clearInterval(interval);
    };
  }, [isTimerRunning, setSeconds]);
  
  const formatTime = time => {
    if (!time) return '00:00'
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (isTimerRunning) {
    return (
      <div className='timer'>
        <p>{formatTime(seconds)}</p>
      </div>
    );
  } else {
    return (
      <div className='timer'>
        <p>00:00</p>
      </div>
    )
  }
}
