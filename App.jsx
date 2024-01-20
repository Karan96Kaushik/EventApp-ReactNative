import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home2';
import CalendarStack from './screens/CalendarStack';
import Settings from './screens/Settings';
import CDrawer from './components/Drawer';

import { Provider } from 'react-redux';
import store from './store';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={(props) => <CDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Calendar" component={CalendarStack} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
};


export default App;
