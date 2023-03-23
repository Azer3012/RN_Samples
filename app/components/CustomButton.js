import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../values/colors';
import helpers from '../helpers/helpers';

const CustomButton = ({label,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.loginBtn}>
      <Text style={styles.loginBtnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: colors.tabBarBg,
        padding: helpers.px(20),
        borderRadius: helpers.px(10),
        marginBottom: helpers.px(30),
      },
      loginBtnText: {
        ...helpers.fontStyle('Bold', 16, colors.white),
        textAlign: 'center',
      },
});
