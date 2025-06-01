// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Signup from '../screens/auth/Signup';
// import Login from '../screens/auth/Login';
// import Dashboard from '../screens/dashboard/Dashboard';

// const Stack = createStackNavigator();

// const StackNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Dashboard">
//         <Stack.Screen
//           name="Dashboard"
//           component={Dashboard}
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ headerShown: false }} 
//         />
//         <Stack.Screen
//           name="Signup"
//           component={Signup}
//           options={{ headerShown: false }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigation;