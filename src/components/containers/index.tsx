import { PropsWithChildren } from 'react';
import { Box, Spinner, View } from '@gluestack-ui/themed';

export const AppContainer = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box flex={1} backgroundColor="$light100">
      {children}
    </Box>
  );
};

export const LoadingContainer = ({
  isLoading,
  children,
}: PropsWithChildren<{ isLoading: boolean }>) => {
  if (isLoading) {
    return (
      <View flex={1} flexGrow={1} alignItems="center" justifyContent="center">
        <Spinner size="small" />
      </View>
    );
  }

  return children;
};
