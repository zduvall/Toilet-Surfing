export const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() <= today.getDate() &&
    someDate.getMonth() <= today.getMonth() &&
    someDate.getFullYear() <= today.getFullYear()
  );
};

export const is2WeeksFromToday = (someDate) => {
  const today = new Date();
  const twoWeeksFromToday = new Date(
    today.getTime() + 13 * (1000 * 60 * 60 * 24)
  );
  return (
    someDate.getDate() >= twoWeeksFromToday.getDate() &&
    someDate.getMonth() >= twoWeeksFromToday.getMonth() &&
    someDate.getFullYear() >= twoWeeksFromToday.getFullYear()
  );
};
