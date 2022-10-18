import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { RootNavigator } from './navigation/RootNavigator';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};
