

export const Theme = {
    dark: "Dark",
    light: "Light",
    halloween: "Halloween",
    colorful: "Colorful",
}

export const ThemeOptions = Object.values(Theme).map((value) => ({
  value: value,
  label: value,
}));