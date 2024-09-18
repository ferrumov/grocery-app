import { useCallback, useLayoutEffect } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { Button, ButtonText } from '@gluestack-ui/themed';

import { IGroceryItem } from 'types';
import { HomeStackProps, StackProps } from 'navigation/types';
import { GroceryListItem, LoadingContainer } from 'components';
import { useCompleteItemMutation, useListQuery } from 'store/api/groceries';

import { styles } from './styles';
import { PlaceholderView } from './placeholder';

export const ListScreen = ({ navigation }: StackProps<HomeStackProps, 'List'>) => {
  const [complete] = useCompleteItemMutation();
  const { data = [], isLoading } = useListQuery(undefined);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          width="auto"
          variant="solid"
          paddingHorizontal="$0"
          backgroundColor="transparent"
          onPress={() => navigation.navigate('CreateItem')}
        >
          <ButtonText color="$primary500">Add</ButtonText>
        </Button>
      ),
    });
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IGroceryItem>) => {
      return (
        <GroceryListItem
          item={item}
          key={item.id}
          onPress={() => navigation.navigate('EditItem', { id: `${item.id}` })}
          onCheck={(newValue) => complete({ id: item.id, completed: newValue })}
        />
      );
    },
    [navigation],
  );

  if (data.length === 0 && !isLoading) {
    return <PlaceholderView onPress={() => navigation.navigate('CreateItem')} />;
  }

  return (
    <LoadingContainer isLoading={isLoading}>
      <FlatList
        data={data}
        style={styles.flatList}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        contentInsetAdjustmentBehavior="automatic"
      />
    </LoadingContainer>
  );
};
