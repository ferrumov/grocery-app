import { Formik, FormikConfig } from 'formik';
import { Text } from '@gluestack-ui/themed';

import type { ItemFormValues } from 'types';

import { InputFormikField } from '../../input';
import { CounterFormikField } from '../../counter';
import { ListItem, MenuListItemFormikField, ListItemsContainer } from '../../list-item';

import { categories } from './config';

export const ItemForm = ({ children, ...props }: FormikConfig<ItemFormValues>) => {
  return (
    <Formik {...props} validateOnBlur={false} validateOnMount={false}>
      {(childrenProps) => {
        const { values } = childrenProps;

        return (
          <>
            <ListItemsContainer>
              <ListItem title="Name">
                <InputFormikField name="name" placeholder="Example: Apples" />
              </ListItem>

              <ListItem title="Count">
                <CounterFormikField name="count" minValue={1} />
              </ListItem>

              <MenuListItemFormikField
                name="category"
                title="Category"
                items={categories}
                withDivider={false}
              >
                {values.category && <Text marginLeft="auto">{values.category}</Text>}
              </MenuListItemFormikField>
            </ListItemsContainer>

            {children && typeof children === 'function' && children(childrenProps)}
          </>
        );
      }}
    </Formik>
  );
};
