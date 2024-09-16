import { BadgeIcon, Badge, BadgeText } from '@gluestack-ui/themed';

import { GroceryCategory, GroceryIcon } from 'constants/enums';

import { colorsTheme } from './config';
import type { CategoryBadgeProps } from './types';

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  if (!category || !Object.keys(GroceryCategory).includes(category)) {
    return null;
  }

  const value = GroceryCategory[category as keyof typeof GroceryCategory];
  const theme = colorsTheme[value];

  return (
    <Badge size="md" borderRadius="$sm" bgColor={theme.bgColor}>
      <BadgeText color={theme.color}>{value}</BadgeText>
      <BadgeIcon as={GroceryIcon[value]} ml="$2" color={theme.color} />
    </Badge>
  );
};
