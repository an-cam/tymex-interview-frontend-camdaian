export const Tier = {
  premium: "Premium",
  deluxe: "Deluxe",
  basic: "Basic",
};

export const TierOptions = Object.values(Tier).map((value) => ({
  value: value,
  label: value,
}));
