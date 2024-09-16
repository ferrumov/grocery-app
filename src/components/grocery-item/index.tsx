import { ChevronRightIcon } from 'lucide-react-native';
import { Box, View, Text, HStack, Pressable, ButtonIcon } from '@gluestack-ui/themed';

import { IGroceryItem } from 'types';

import { Checkbox } from '../checkbox';
import { CategoryBadge } from '../category-badge';

type GroceryListItemProps = {
  item: IGroceryItem;
  onPress: () => void;
  onCheck: (nextValue: boolean) => void;
};

export const GroceryListItem = ({ item, onPress, onCheck }: GroceryListItemProps) => {
  return (
    <View w="$full" flexDirection="row" paddingVertical="$1" paddingHorizontal="$3">
      <View
        w="100%"
        minHeight={40}
        bgColor="$white"
        paddingLeft="$2"
        paddingRight="$0"
        borderRadius="$lg"
        flexDirection="row"
      >
        <Checkbox value={item.name} isChecked={item.completed} onChange={onCheck} />

        <Pressable flexGrow={1} onPress={onPress}>
          {({ pressed }) => (
            <Box
              flex={1}
              borderRadius="$lg"
              marginVertical="$3"
              marginHorizontal="$3"
              justifyContent="center"
              opacity={pressed ? 0.5 : 1}
            >
              <HStack flexGrow={1} justifyContent="space-between" alignItems="center">
                <Text
                  size="md"
                  color="$black"
                  numberOfLines={1}
                  textDecorationLine={item.completed ? 'line-through' : 'none'}
                >
                  {`${item.name} (${item.count})`}
                </Text>

                <HStack gap="$2">
                  <CategoryBadge category={item.category} />
                  <ButtonIcon as={ChevronRightIcon} />
                </HStack>
              </HStack>
            </Box>
          )}
        </Pressable>
      </View>
    </View>
  );
};
