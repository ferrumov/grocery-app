import { useCallback } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'lucide-react-native';
import { Pressable, Text, Box, ButtonIcon, HStack } from '@gluestack-ui/themed';

import type { CounterButtonProps, CounterProps } from './types';
import { FormikFieldProps } from 'types';
import { useField } from 'formik';

const CounterButton = ({ icon, ...props }: CounterButtonProps) => {
  return (
    <Pressable {...props}>
      {({ pressed }) => (
        <Box w={26} h={26} alignItems="center" justifyContent="center" opacity={pressed ? 0.8 : 1}>
          <ButtonIcon as={icon} color="$primary500" />
        </Box>
      )}
    </Pressable>
  );
};

export const Counter = ({ maxValue, onChange, value = 0, minValue = 0 }: CounterProps) => {
  const handleIncrement = useCallback(
    (newValue: number) => () => {
      if (maxValue && newValue > maxValue) {
        return;
      }

      onChange(newValue);
    },
    [maxValue, onChange],
  );

  const handleDecrement = useCallback(
    (newValue: number) => () => {
      if (newValue < minValue) {
        return;
      }

      onChange(newValue);
    },
    [minValue, onChange],
  );

  return (
    <Box>
      <HStack alignItems="center" gap="$2">
        <CounterButton icon={MinusCircleIcon} onPress={handleDecrement(value - 1)} />
        <Text>{String(value)}</Text>
        <CounterButton icon={PlusCircleIcon} onPress={handleIncrement(value + 1)} />
      </HStack>
    </Box>
  );
};

export const CounterFormikField = ({ name, ...props }: FormikFieldProps<Partial<CounterProps>>) => {
  const [field, , helpers] = useField<number>(name);

  return <Counter {...props} value={field.value} onChange={helpers.setValue} />;
};
