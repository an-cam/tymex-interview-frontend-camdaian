export const Time = {
  latest: "Latest",
  oldest: "Oldest",
};

export const TimeOptions = Object.entries(Time).map(([key, value]) => ({
  value: key,
  label: value,
}));
