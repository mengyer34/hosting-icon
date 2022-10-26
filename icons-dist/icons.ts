export type IconsId =
  | "bell"
  | "cart"
  | "category-focus"
  | "category"
  | "heart"
  | "home-focus"
  | "home"
  | "search"
  | "seemore"
  | "union";

export type IconsKey =
  | "Bell"
  | "Cart"
  | "CategoryFocus"
  | "Category"
  | "Heart"
  | "HomeFocus"
  | "Home"
  | "Search"
  | "Seemore"
  | "Union";

export enum Icons {
  Bell = "bell",
  Cart = "cart",
  CategoryFocus = "category-focus",
  Category = "category",
  Heart = "heart",
  HomeFocus = "home-focus",
  Home = "home",
  Search = "search",
  Seemore = "seemore",
  Union = "union",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Bell]: "61697",
  [Icons.Cart]: "61698",
  [Icons.CategoryFocus]: "61699",
  [Icons.Category]: "61700",
  [Icons.Heart]: "61701",
  [Icons.HomeFocus]: "61702",
  [Icons.Home]: "61703",
  [Icons.Search]: "61704",
  [Icons.Seemore]: "61705",
  [Icons.Union]: "61706",
};
