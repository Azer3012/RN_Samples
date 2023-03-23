import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '../pages';
import helpers from '../helpers/helpers';
import Loading from '../components/Loading';
import OnBoarding from '../pages/OnBoarding/OnBoarding';

import {AuthContext} from '../context/AuthContext';

const Stack = createNativeStackNavigator();
const Stacks = () => {
  const {userToken, isLoading} = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={helpers.screenOptions}>
      {!userToken && (
        <Stack.Screen
          name="OnBoarding"
          component={isLoading ? Loading : OnBoarding}
        />
      )}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
