import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{createContext, useEffect, useState} from 'react'

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [isLoading,setIsLaoding]=useState(false)
    const [userToken,setUserToken]=useState(null)
    const login=()=>{
        setIsLaoding(true)
        setUserToken('fshsfsafsbh')
        AsyncStorage.setItem('userToken','fshsfsafsbh')
        setIsLaoding(false)
    }
    const logout=()=>{
        setIsLaoding(true)
        setUserToken(null)
        AsyncStorage.removeItem('userToken')

        setIsLaoding(false)
    }
    const isLoggedIn=async()=>{
        try {
            setIsLaoding(true)
            let userToken=await AsyncStorage.getItem('userToken')
            setUserToken(userToken)
        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLaoding(false)
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])
    return(
        <AuthContext.Provider value={{login,logout,isLoading,userToken}}>
             {children}
        </AuthContext.Provider>
    )
}