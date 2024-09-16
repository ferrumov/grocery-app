import { GroceryCategory, GroceryIcon } from 'constants/enums';

export const categories = [
  {
    value: GroceryCategory.Bakery.toString(),
    icon: GroceryIcon[GroceryCategory.Bakery],
  },
  {
    value: GroceryCategory.Snacks.toString(),
    icon: GroceryIcon[GroceryCategory.Snacks],
  },
  {
    value: GroceryCategory.Fruits.toString(),
    icon: GroceryIcon[GroceryCategory.Fruits],
  },
  {
    value: GroceryCategory.Vegetables.toString(),
    icon: GroceryIcon[GroceryCategory.Vegetables],
  },
  {
    value: GroceryCategory.Meat.toString(),
    icon: GroceryIcon[GroceryCategory.Meat],
  },
];
