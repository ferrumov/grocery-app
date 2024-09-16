import { useField } from 'formik';
import { FormControl, Input, InputField as GlueInputField } from '@gluestack-ui/themed';

import { FormikFieldProps } from 'types';

import { InputFieldProps } from './types';

export const InputFormikField = ({ name, placeholder }: FormikFieldProps<InputFieldProps>) => {
  const [field, , helpers] = useField<string>(name);

  return (
    <FormControl flex={1}>
      <Input variant="outline" borderColor="transparent">
        <GlueInputField
          value={field.value}
          placeholder={placeholder}
          onChangeText={helpers.setValue}
        />
      </Input>
    </FormControl>
  );
};
