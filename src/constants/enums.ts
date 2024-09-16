import { AppleIcon, CarrotIcon, CroissantIcon, HamIcon, SandwichIcon } from 'lucide-react-native';

export enum GroceryCategory {
  Meat = 'Meat',
  Bakery = 'Bakery',
  Snacks = 'Snacks',
  Fruits = 'Fruits',
  Vegetables = 'Vegetables',
}

export const GroceryIcon = Object.freeze({
  [GroceryCategory.Meat]: HamIcon,
  [GroceryCategory.Fruits]: AppleIcon,
  [GroceryCategory.Snacks]: SandwichIcon,
  [GroceryCategory.Bakery]: CroissantIcon,
  [GroceryCategory.Vegetables]: CarrotIcon,
});
