import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import colors from '../values/colors';
import helpers from '../helpers/helpers';
import IonIcons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: colors.drawerBg}}>
        <View style={styles.drawerHeader}>
          <Image
            source={require('../assets/images/profile.jpg')}
            style={styles.headerImage}
          />
          <Text style={styles.text}>Jhon Doe</Text>
        </View>
        <View style={styles.drawerItemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.containerBtn}>
            <IonIcons name="share-social-outline" size={22} />
            <Text style={styles.bottomText}>Tell a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.containerBtn}>
            <IonIcons name="exit-outline" size={22} />
            <Text style={styles.bottomText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    padding: helpers.px(20),
  },
  headerImage: {
    width: helpers.px(80),
    height: helpers.px(80),
    borderRadius: helpers.px(50),
    resizeMode: 'cover',
    marginBottom: helpers.px(10),
  },
  text: {
    ...helpers.fontStyle('Regular', 18, colors.white),
  },
  drawerItemList: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: helpers.px(10),
  },
  bottom: {
    padding: helpers.px(20),
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  containerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn:{
    paddingVertical:helpers.px(15)
  },
  bottomText: {
    ...helpers.fontStyle('Regular', 15),
    marginLeft: helpers.px(8),
  },
});
