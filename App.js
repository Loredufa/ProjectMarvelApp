// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import Detail from'./Components/Detail';
import LandingPage from './Components/LandingPage';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import Navigator from './Navigators/Navigator'

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Navigator/>   
//     </NavigationContainer>
//   );
// }

