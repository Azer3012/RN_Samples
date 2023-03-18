import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import helpers from '../helpers/helpers'

const OnBoardingItem = ({item}) => {
    const {width}=useWindowDimensions()
  return (
    <View style={[styles.container,{width}]}>
      <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>
      <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        flex:0.7,
        justifyContent:'center'
    },
    title:{
        fontSize:helpers.px(28),
        marginBottom:helpers.px(10),
        textAlign:'center',
        fontWeight:'800',
        color:"#493d8a"
    },
    description:{
        fontWeight:'300',
        textAlign:'center',
        paddingHorizontal:helpers.px(64),
        color:'#62656b'
    }
})