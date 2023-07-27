/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainRoute from './View';
import {Provider as StoreProvider} from 'react-redux'
function App():JSX.Element{

  return (
    <StoreProvider >
    <NavigationContainer>
      <MainRoute/>
    </NavigationContainer>
    </StoreProvider>
  )
}


export default App;
