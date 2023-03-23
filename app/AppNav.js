import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './Stacks/Stacks';
import AppStack from './Stacks/AppStack';
import {AuthContext} from './context/AuthContext';

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);
//   if (isLoading) {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <ActivityIndicator size={'large'} />
//       </View>
//     );
//   }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <Stacks />}
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
