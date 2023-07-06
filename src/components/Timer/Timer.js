import React, { useState, useEffect } from 'react';
import './Timer.css';

export default function Timer({setSeconds, seconds}) {

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
        setSeconds(0)
        clearInterval(interval);
    };
  }, []);

  const formatTime = time => {
    if (!time) return '00:00'
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='timer'>
      <p>{formatTime(seconds)}</p>
    </div>
  );
}
