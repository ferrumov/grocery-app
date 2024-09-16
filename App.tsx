import { Provider } from 'react-redux';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { store } from 'store/store';
import { Navigation } from 'navigation';
import { AppContainer } from 'components';

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider colorMode="light" config={config}>
        <AppContainer>
          <Navigation />
        </AppContainer>
      </GluestackUIProvider>
    </Provider>
  );
}
