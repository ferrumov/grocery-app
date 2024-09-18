import { useCallback, useEffect, useMemo } from 'react';
import { FormikHelpers } from 'formik';
import { ScrollView, Button, ButtonText, VStack, useToast } from '@gluestack-ui/themed';

import { ItemFormValues } from 'types';
import { MainStackParams, StackProps } from 'navigation/types';
import { ItemForm, LoadingContainer, renderErrorToast } from 'components';
import {
  useListQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useRemoveItemMutation,
} from 'store/api/groceries';

import { styles } from './styles';
import { initialValues, validationSchema } from './config';

export const CreateItemScreen = ({ navigation }: StackProps<MainStackParams, 'CreateItem'>) => {
  const [create] = useCreateItemMutation();

  const onSubmit = async (values: ItemFormValues, helpers: FormikHelpers<ItemFormValues>) => {
    try {
      helpers.setSubmitting(true);
      create(values);
      navigation.goBack();
    } catch {
      helpers.setSubmitting(false);
    } finally {
      helpers.setSubmitting(false);
    }
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.contentContainer}
    >
      <ItemForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, submitForm, isSubmitting }) => (
          <Button isDisabled={!values.name || isSubmitting} onPress={submitForm}>
            <ButtonText>Create Item</ButtonText>
          </Button>
        )}
      </ItemForm>
    </ScrollView>
  );
};

export const EditItemScreen = ({ navigation, route }: StackProps<MainStackParams, 'EditItem'>) => {
  const { id } = route.params;

  const toast = useToast();
  const [update] = useUpdateItemMutation();
  const [remove, removeMutation] = useRemoveItemMutation();

  useEffect(() => {}, []);

  const { item, isLoading } = useListQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      item: result.data?.find((i) => i.id === id),
    }),
  });

  const updatedValues = useMemo(() => {
    return item ? { ...initialValues, ...item } : { ...initialValues };
  }, [item]);

  const onSubmit = useCallback(
    async (values: ItemFormValues, helpers: FormikHelpers<ItemFormValues>) => {
      try {
        if (!id) return;
        helpers.setSubmitting(true);

        const { name, count, category } = values;
        update({ id, name, count, category });
        navigation.goBack();
      } catch (error) {
        toast.show({
          placement: 'top',
          render: renderErrorToast({ message: (error as Error).message }),
        });
        helpers.setSubmitting(false);
      } finally {
        helpers.setSubmitting(false);
      }
    },
    [item, navigation, update],
  );

  const onDelete = useCallback(async () => {
    try {
      if (!id) return;
      remove({ id });
      navigation.goBack();
    } catch (error) {
      toast.show({
        placement: 'top',
        render: renderErrorToast({ message: (error as Error).message }),
      });
    }
  }, [id, navigation, remove]);

  return (
    <LoadingContainer isLoading={isLoading}>
      <ScrollView
        style={styles.scrollView}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainer}
      >
        <ItemForm
          enableReinitialize
          onSubmit={onSubmit}
          initialValues={updatedValues}
          validationSchema={validationSchema}
        >
          {({ values, submitForm, isSubmitting, dirty }) => (
            <VStack width="$full" justifyContent="space-between" gap="$2">
              <Button
                onPress={submitForm}
                isDisabled={!dirty || !values.name || isSubmitting || removeMutation.isLoading}
              >
                <ButtonText>Save Item</ButtonText>
              </Button>
              <Button
                bgColor="$red500"
                onPress={onDelete}
                isDisabled={isSubmitting || removeMutation.isLoading}
              >
                <ButtonText>Delete Item</ButtonText>
              </Button>
            </VStack>
          )}
        </ItemForm>
      </ScrollView>
    </LoadingContainer>
  );
};
