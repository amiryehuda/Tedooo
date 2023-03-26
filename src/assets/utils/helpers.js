export const timePassed = (dateString: string) => {
  const now = new Date();
  const then = new Date(dateString);
  const msPassed = now - then;
  const secondsPassed = Math.floor(msPassed / 1000);
  const minutesPassed = Math.floor(secondsPassed / 60);
  const hoursPassed = Math.floor(minutesPassed / 60);
  const daysPassed = Math.floor(hoursPassed / 24);

  if (minutesPassed < 60) {
    return `${minutesPassed} m`;
  } else if (hoursPassed < 24) {
    return `${hoursPassed} h`;
  } else {
    return `${daysPassed} d`;
  }
};
