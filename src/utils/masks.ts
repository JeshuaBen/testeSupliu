export const formateMinute = (seconds: number) => {
  let second = seconds % 60;
  let minutes = seconds / 60;
  let minute = minutes % 60;
  return String(minute.toFixed(0) + ":" + second.toFixed(0));
};
