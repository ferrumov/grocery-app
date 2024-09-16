import { TextInput, StyleSheet } from 'react-native';
import { ScrollView, Text } from '@gluestack-ui/themed';

import { ListItem, ListItemsContainer } from 'components';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    gap: 24,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export const InfoScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentContainer}>
      <ListItemsContainer>
        <ListItem title="UI library">
          <Text>Gluestack UI</Text>
        </ListItem>
        <ListItem title="Backend">
          <Text>JSON Live Server</Text>
        </ListItem>
        <ListItem title="State Manager">
          <Text>Redux + RTK Query</Text>
        </ListItem>
        <ListItem title="Navigation">
          <Text>React Navigation</Text>
        </ListItem>
        <ListItem title="React Native Framework" withDivider={false}>
          <Text>Expo</Text>
        </ListItem>
      </ListItemsContainer>
    </ScrollView>
  );
};
