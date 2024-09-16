import { ComponentProps } from 'react';
import { CheckIcon } from 'lucide-react-native';
import { CheckboxIcon, CheckboxIndicator, Checkbox as GCheckbox } from '@gluestack-ui/themed';

type CheckboxProps = ComponentProps<typeof GCheckbox>;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  return (
    <GCheckbox size="md" {...props}>
      <CheckboxIndicator borderColor="$primary500">
        <CheckboxIcon as={CheckIcon} color="$white" />
      </CheckboxIndicator>
    </GCheckbox>
  );
};
