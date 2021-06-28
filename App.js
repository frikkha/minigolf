import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import Round from './components/Round';

const Stack = createStackNavigator();


// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home">
//           {props => <HomeScreen {...props} />}
//         </Stack.Screen>
//         <Stack.Screen name="Add new round" component={Round} />

//       </Stack.Navigator>
//     </NavigationContainer>  
//   );
// } 

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }


//   render() {
//       return <MyStack />;
//     }
// }


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Round" component={Round} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;