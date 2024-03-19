//Modules Imports
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

//Redux
import store from './src/store/Store';

//Navigation
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {

  return (
    <Provider store={store}>

      <MainNavigation />

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
