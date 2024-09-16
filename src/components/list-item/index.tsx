import { forwardRef, useCallback, useState } from 'react';
import { Pressable } from 'react-native';
import { useField } from 'formik';
import { ChevronRightIcon } from 'lucide-react-native';
import {
  Box,
  Icon,
  Menu,
  HStack,
  VStack,
  Heading,
  Divider,
  MenuItem,
  ButtonIcon,
  MenuItemLabel,
} from '@gluestack-ui/themed';

import type { FormikFieldProps } from 'types';

import type {
  Selection,
  ListItemProps,
  MenuListItemProps,
  ListItemContentProps,
  PressableListItemProps,
} from './types';

const ListItemContent = ({
  title,
  leftSlot,
  children,
  rightSlot,
  withDivider = true,
}: ListItemContentProps) => {
  return (
    <HStack w="$full" h="$full" alignItems="center" gap="$4">
      {leftSlot && leftSlot}

      <VStack flexGrow={1} h="$full" borderBottomColor="$grey200">
        <HStack
          gap="$2"
          height={40}
          flexGrow={1}
          paddingRight="$4"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading size="sm" fontWeight="$medium">
            {title}
          </Heading>
          {children}
          {rightSlot && rightSlot}
        </HStack>

        {withDivider && <Divider />}
      </VStack>
    </HStack>
  );
};

const ListItem = ({ ...props }: ListItemProps) => {
  return (
    <Box w="$full" height={44}>
      <ListItemContent {...props} />
    </Box>
  );
};

export const PressableListItem = forwardRef<any, PressableListItemProps>(
  ({ title, leftSlot, children, withDivider = true, ...props }, ref) => {
    return (
      <Pressable ref={ref} {...props}>
        {({ pressed }) => (
          <Box w="$full" height={44} opacity={pressed ? 0.7 : 1}>
            <ListItemContent
              title={title}
              leftSlot={leftSlot}
              children={children}
              withDivider={withDivider}
              rightSlot={<ButtonIcon as={ChevronRightIcon} />}
            />
          </Box>
        )}
      </Pressable>
    );
  },
);

const MenuListItem = ({ items, value, onChange, ...props }: MenuListItemProps) => {
  const [keys, setKeys] = useState(new Set(value ? [value] : []));

  const handleSelection = useCallback(
    (selection: Selection) => {
      // @ts-ignore
      setKeys(selection);
      // @ts-ignore
      onChange(selection.currentKey);
    },
    [onChange],
  );

  return (
    <Menu
      selectedKeys={keys}
      selectionMode="single"
      placement="bottom right"
      disabledKeys={value ? [value] : []}
      onSelectionChange={handleSelection}
      trigger={({ ...triggerProps }) => <PressableListItem {...props} {...triggerProps} />}
    >
      {items.map((item) => (
        <MenuItem key={`${item.value}`} textValue={item.value}>
          <Icon as={item.icon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">{item.value}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};

const MenuListItemFormikField = ({
  name,
  items = [],
  title = '',
  ...props
}: FormikFieldProps<Partial<MenuListItemProps>>) => {
  const [field, , helpers] = useField<string | undefined>(name);

  return (
    <MenuListItem
      {...props}
      title={title}
      items={items}
      value={field.value}
      onChange={helpers.setValue}
    />
  );
};

export { ListItemsContainer } from './container';
export { ListItem, ListItemContent, MenuListItem, MenuListItemFormikField };
export type { ListItemProps, MenuListItemProps, ListItemContentProps, PressableListItemProps };
