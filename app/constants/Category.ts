export const Categories = {
    mythic: 'Mythic',
    epic: 'Epic',
    accessory: "Accessory",
    shoes: 'Shoes',
    lowerbody: "Lower Body",
    upperbody: "Upper Body",
    hat: "Hat",
    rare: "Rare",
    legendary: "Legendary"
}

export const CategoryOptions = Object.values(Categories).map((value) => ({
  value: value,
  label: value,
}));
