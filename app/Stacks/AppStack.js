import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Messages, Moments, Profile, Settings} from '../screens';
import CustomDrawer from '../components/CustomDrawer';
import IonIcons from 'react-native-vector-icons/Ionicons';
import colors from '../values/colors';
import TabStack from './TabStack';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:colors.drawerActive,
        drawerActiveTintColor:colors.white,
        drawerInactiveTintColor:colors.drawerInActive,
        drawerLabelStyle: {marginLeft: -25, fontFamily: 'Inter-Regular',fontSize:15},
      }}>
      <Drawer.Screen
        name="Home"
        component={TabStack}
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={Moments}
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
