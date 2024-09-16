import { ButtonProps } from 'react-native';
import { PlusCircleIcon } from 'lucide-react-native';
import { ButtonIcon, ButtonText, HStack, Button, View } from '@gluestack-ui/themed';

export const PlaceholderView = ({ onPress }: Pick<ButtonProps, 'onPress'>) => {
  return (
    <View flex={1} flexGrow={1} alignItems="center" justifyContent="center">
      <Button variant="link" onPress={onPress}>
        <HStack gap="$2" alignItems="center">
          <ButtonIcon as={PlusCircleIcon} />
          <ButtonText>Create your first item</ButtonText>
        </HStack>
      </Button>
    </View>
  );
};
