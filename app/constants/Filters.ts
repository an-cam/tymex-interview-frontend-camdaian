import { TierOptions } from "./Tier";
import { ThemeOptions } from "./Theme";
import { TimeOptions } from "./Time";
import { PriceOptions } from "./Price";

export const filterBy = {
  tier: "tier",
  theme: "theme",
  time: "time",
  price: "price",
};
export const Filters = [
  { key: filterBy.tier, label: filterBy.tier, options: TierOptions },
  { key: filterBy.theme, label: filterBy.theme, options: ThemeOptions },
  { key: filterBy.time, label: filterBy.time, options: TimeOptions },
  { key: filterBy.price, label: filterBy.price, options: PriceOptions },
];
