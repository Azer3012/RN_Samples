import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, Favorite, Home} from '../screens';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import colors from '../values/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '../pages';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const Stack=createNativeStackNavigator()

const HomeStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Details" component={Details}/>
        </Stack.Navigator>
    )
}

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
            backgroundColor:colors.tabBarBg
        },
        tabBarInactiveTintColor:colors.white,
        tabBarActiveTintColor:colors.tabBarActive
      }}>
      <Tab.Screen name="Home2" component={HomeStack}
      options={({route})=>({
        tabBarStyle:{display:getTabBarVisibility(route),backgroundColor:colors.tabBarBg},
        tabBarIcon:({color,size})=>(
            <IonIcons name="home-outline" color={color} size={size}/>
        )
      })}
      
      />
      <Tab.Screen name="Cart" component={Cart}

      
      
      options={{
        tabBarBadge:3,
        tabBarBadgeStyle:{backgroundColor:colors.tabBarActive},
        tabBarIcon:({color,size})=>(
            <FeatherIcon name="shopping-bag" color={color} size={size}/>
        )
      }}
      />
      <Tab.Screen name="Favorite" component={Favorite}
      options={{
        tabBarIcon:({color,size})=>(
            <IonIcons name="heart-outline" color={color} size={size}/>
        )
      }}
      
      />
    </Tab.Navigator>
  );
};
const getTabBarVisibility=(route)=>{
    const routeName=getFocusedRouteNameFromRoute(route)?? 'Feed'
    if(routeName==="Details"){
        return 'none'
    }
    return 'flex'
}
export default TabStack;

const styles = StyleSheet.create({});
