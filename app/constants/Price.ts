export const Price = {
  latest: "Low to high",
  oldest: "High to low",
};

export const PriceOptions = Object.entries(Price).map(([key, value]) => ({
  value: key,
  label: value,
}));
