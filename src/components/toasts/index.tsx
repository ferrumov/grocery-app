import { View, Toast, ToastDescription, ToastTitle } from '@gluestack-ui/themed';

import type { ErrorProps, ErrorToastProps, RenderProps } from './types';

export const ErrorToast = ({
  id,
  title = 'Error',
  message = 'Something went wrong',
}: ErrorToastProps) => {
  return (
    <Toast nativeID={`toast-${id}`} variant="solid" action="error">
      <View w="$full">
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{message}</ToastDescription>
      </View>
    </Toast>
  );
};

export const renderErrorToast =
  ({ title = 'Error', message = 'Something went wrong' }: ErrorProps) =>
  ({ id }: RenderProps) => {
    return <ErrorToast id={id} title={title} message={message} />;
  };
