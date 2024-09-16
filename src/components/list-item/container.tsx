import { ComponentProps } from 'react';
import { Box } from '@gluestack-ui/themed';

export const ListItemsContainer = ({ children, ...props }: ComponentProps<typeof Box>) => {
  return (
    <Box bgColor="$white" borderRadius="$lg" paddingLeft="$4" {...props}>
      {children}
    </Box>
  );
};
