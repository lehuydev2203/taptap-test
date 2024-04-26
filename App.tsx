import React from 'react';
import { Provider } from 'react-redux';
import { LogBox, Text, View } from 'react-native';
import store from './src/stores/stores';
import { Screens } from './src/screens';



LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'Require cycle',
  'DevTools failed to load SourceMap',
]);

const App = () => {
  return <Screens.Home />
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
