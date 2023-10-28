"use client";
import { useState, useEffect } from "react";
import { Card } from "./ui/card";

function CountTime() {
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const startDate: Date = new Date("2022-09-26T11:00:00");
    const timerInterval: NodeJS.Timeout = setInterval(() => {
      const currentDate: Date = new Date();
      const timeDifference: number =
        currentDate.getTime() - startDate.getTime();
      setElapsedTime(timeDifference);
    }, 1000); // Update the timer every 1 second

    return () => {
      clearInterval(timerInterval); // Clean up the interval when the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const millisecondsPerSecond: number = 1000;
  const millisecondsPerMinute: number = millisecondsPerSecond * 60;
  const millisecondsPerHour: number = millisecondsPerMinute * 60;
  const millisecondsPerDay: number = millisecondsPerHour * 24;

  const days: number = Math.floor(elapsedTime / millisecondsPerDay);
  const remainingTimeAfterDays: number = elapsedTime % millisecondsPerDay;
  const hours: number = Math.floor(
    remainingTimeAfterDays / millisecondsPerHour
  );
  const remainingTimeAfterHours: number =
    remainingTimeAfterDays % millisecondsPerHour;
  const minutes: number = Math.floor(
    remainingTimeAfterHours / millisecondsPerMinute
  );
  const remainingTimeAfterMinutes: number =
    remainingTimeAfterHours % millisecondsPerMinute;
  const seconds: number = Math.floor(
    remainingTimeAfterMinutes / millisecondsPerSecond
  );

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent z-50 absolute">
      <div className="flex gap-4">
        <Card className="w-24 h-24 flex items-center flex-col gap-2 justify-center opacity-75">
          <h1 className="text-xl font-semibold">Days</h1>
          <span className="text-2xl font-bold">{days}</span>
        </Card>
        <Card className="w-24 h-24 flex items-center flex-col gap-2 justify-center opacity-75">
          <h1 className="text-xl font-semibold">Hours</h1>
          <span className="text-2xl font-bold">{hours}</span>
        </Card>
        <Card className="w-24 h-24 flex items-center flex-col gap-2 justify-center opacity-75">
          <h1 className="text-xl font-semibold">Minutes</h1>
          <span className="text-2xl font-bold">{minutes}</span>
        </Card>
        <Card className="w-24 h-24 flex items-center flex-col gap-2 justify-center opacity-75">
          <h1 className="text-xl font-semibold">Seconds</h1>
          <span className="text-2xl font-bold">{seconds}</span>
        </Card>
        {/* <Card classNa24="w242 h-12 flex flex-col gap-2 items-center justify opacity-75-center">
        <h1 className="text-xl font-semibold">Days</h1>
        <span className="text-2xl font-bold">{days}</span></Card> */}
      </div>
    </div>
  );
}

export default CountTime;