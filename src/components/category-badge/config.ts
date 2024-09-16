import { GroceryCategory } from 'constants/enums';

import { ColorsTheme } from './types';

export const colorsTheme: ColorsTheme = {
  [GroceryCategory.Meat]: { bgColor: '$red300', color: '$red900' },
  [GroceryCategory.Snacks]: { bgColor: '$cyan300', color: '$cyan900' },
  [GroceryCategory.Bakery]: { bgColor: '$yellow300', color: '$yellow900' },
  [GroceryCategory.Fruits]: { bgColor: '$purple300', color: '$purple900' },
  [GroceryCategory.Vegetables]: { bgColor: '$green300', color: '$green900' },
};
