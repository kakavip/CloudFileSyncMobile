import React from 'react';
import { Clouds, Folders, Home } from '../screens';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Clouds"
        component={Clouds}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cloud-refresh" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Folders"
        component={Folders}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainNavigator;
