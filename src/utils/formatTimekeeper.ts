function formatTimekeeper(count: number): string {
  const hours = Math.floor(count / 360);
  count -= hours * 360;

  const minutes = Math.floor(count / 60);
  count -= minutes * 60;

  return `${addLeftZero(hours)}:${addLeftZero(minutes)}:${addLeftZero(count)}`;
}

function addLeftZero(num: number): string {
  return `${num < 10 ? `0${num}` : num}`;
}

export default formatTimekeeper;
