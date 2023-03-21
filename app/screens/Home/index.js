import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import helpers from '../../helpers/helpers'
import colors from '../../values/colors'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
        
      <TouchableOpacity onPress={()=>navigation.openDrawer()} style={styles.btn}>
        <Text style={styles.btnText}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        backgroundColor:'green',
        width:helpers.px(300),
        height:helpers.px(30),
        borderRadius:helpers.px(8),
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{
        ...helpers.fontStyle('Regular',14,colors.white)
    }
})