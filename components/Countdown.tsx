
import React, { useState, useEffect, useCallback } from 'react';
import { Language } from '../App';

interface CountdownProps {
  targetDate: string;
  lang: Language;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, lang }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center min-w-[90px] md:min-w-[150px] bg-white dark:bg-gray-900/40 p-5 md:p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 transition-all hover:scale-105 duration-300">
      <div className="flex items-center justify-center h-12 md:h-20">
        <span className="text-4xl md:text-7xl font-black text-primary leading-none tracking-tighter tabular-nums flex items-center justify-center">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <p className="text-gray-400 dark:text-gray-500 mt-4 font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] text-center w-full">{label}</p>
    </div>
  );

  const labels = {
    days: lang === 'TR' ? 'GÜN' : 'DAYS',
    hours: lang === 'TR' ? 'SAAT' : 'HOURS',
    minutes: lang === 'TR' ? 'DAKİKA' : 'MINUTES',
    seconds: lang === 'TR' ? 'SANİYE' : 'SECONDS',
  };

  return (
    <section className="py-24 text-center">
      <div className="inline-block mb-12">
        <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white uppercase relative inline-block px-4">
          SHG AIRSHOW 2026
          <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-primary rounded-full mx-4"></span>
        </h3>
      </div>
      <div className="flex justify-center items-center gap-2 md:gap-6 px-4">
        <TimeBlock value={timeLeft.days} label={labels.days} />
        <div className="text-gray-300 dark:text-gray-700 text-2xl md:text-5xl font-black mb-8 select-none">:</div>
        <TimeBlock value={timeLeft.hours} label={labels.hours} />
        <div className="text-gray-300 dark:text-gray-700 text-2xl md:text-5xl font-black mb-8 select-none lg:block hidden">:</div>
        <TimeBlock value={timeLeft.minutes} label={labels.minutes} />
        <div className="text-gray-300 dark:text-gray-700 text-2xl md:text-5xl font-black mb-8 select-none lg:block hidden">:</div>
        <TimeBlock value={timeLeft.seconds} label={labels.seconds} />
      </div>
    </section>
  );
};

export default Countdown;
