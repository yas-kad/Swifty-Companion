import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';

// import { getAccessToken } from './utils/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetails from './components/UserDetails/UserDetails';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="users" component={UserDetails} initialParams={{ id: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: 'green',
//     paddingTop: 66,
//     paddingBottom: 66,
//     // height: "100%",
//     overflow: "scroll",
//     width: "100%",
//   },

// });
