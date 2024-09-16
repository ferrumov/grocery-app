import { PropsWithChildren, ComponentProps } from 'react';
import { PressableProps } from 'react-native';
import { Menu } from '@gluestack-ui/themed';
import { LucideIcon } from 'lucide-react-native';

import { NonUndefined } from 'types';

export type ListItemProps = PropsWithChildren<{
  title: string;
  withDivider?: boolean;
  leftSlot?: JSX.Element;
}>;

export type ListItemContentProps = PropsWithChildren<
  ListItemProps & {
    rightSlot?: JSX.Element;
  }
>;

export type PressableListItemProps = PropsWithChildren<ListItemProps & PressableProps>;

interface IMenuItem {
  icon: LucideIcon;
  value: string;
}

export type MenuListItemProps = ListItemProps & {
  items: IMenuItem[];
  value?: string;
  onChange: (newValue: string) => void;
};

export type Selection = Parameters<
  NonUndefined<ComponentProps<typeof Menu>['onSelectionChange']>
>[0];
