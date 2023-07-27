import { useEffect, useState } from 'react';

export const useHeaderUser = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds * 1000);

  useEffect(() => {
    let interval: any;

    const resetTimer = () => {
      clearInterval(interval);
      setTimeLeft(seconds * 1000);
      startTimer();
    };

    const startTimer = () => {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1000);
      }, 1000);
    };

    const handleEvent = () => {
      resetTimer();
    };

    startTimer();

    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('keypress', handleEvent);
    window.addEventListener('click', handleEvent);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('keypress', handleEvent);
      window.removeEventListener('click', handleEvent);
    };
  }, [seconds, timeLeft]);

  return timeLeft / 1000;
};
