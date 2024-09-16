import { ComponentProps } from 'react';
import { Badge } from '@gluestack-ui/themed';

import { NonUndefined } from 'types';
import { GroceryCategory } from 'constants/enums';

export type GluestackColor = NonUndefined<ComponentProps<typeof Badge>['bgColor']>;

export type CategoryBadgeProps = { category?: string };

export type ColorsTheme = {
  [key in GroceryCategory]: { bgColor: GluestackColor; color: GluestackColor };
};
