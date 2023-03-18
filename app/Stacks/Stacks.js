import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../pages'
import helpers from '../helpers/helpers'

import Loading from '../components/Loading'
import OnBoarding from '../pages/OnBoarding/OnBoarding'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Stack=createNativeStackNavigator()
const Stacks = () => {
    const [loading,setLoading]=useState(true)
  const [viewedOnBoarding,setViewedOnBoarding]=useState(false)
  const checkOnBoarding=async()=>{
    try {
        const value=await AsyncStorage.getItem('@viewOnBoarding')
        if(value!==null){
            setViewedOnBoarding(true)
        }
    } catch (error) {
        console.log(error);
    }
    finally{
        setLoading(false)
    }
  }
  useEffect(()=>{
    checkOnBoarding()
  },[])
  return (
    <Stack.Navigator screenOptions={helpers.screenOptions}>
       {!viewedOnBoarding && <Stack.Screen name='OnBoarding' component={loading?Loading:OnBoarding}/>}
        <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
  )
}

export default Stacks

const styles = StyleSheet.create({})