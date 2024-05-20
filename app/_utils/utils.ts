export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export function getTimeFromSeconds(remainingSeconds: number): Time {
  const hours = Math.floor(remainingSeconds / 3600);
  remainingSeconds = remainingSeconds - hours * 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  remainingSeconds = remainingSeconds - minutes * 60;
  const seconds = remainingSeconds;

  return {
    hours,
    minutes,
    seconds,
  };
}

export function formatTime(time: Time): string {
  const s = time.seconds < 10 ? `0${time.seconds}` : time.seconds.toString();
  const m = time.minutes < 10 ? `0${time.minutes}` : time.minutes.toString();
  const h = time.hours < 10 ? `0${time.hours}` : time.hours.toString();
  return `${h}:${m}:${s}`;
}
