import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import helpers from '../helpers/helpers';
import colors from '../values/colors';

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View style={styles.inputContainer}>
      {/* {isEmail ? (
        <Icon name="alternate-email" size={20} color="#666" />
      ) : (
        <IonIcon name="ios-lock-closed-outline" size={20} color="#666" />
      )} */}
      {icon}
      {inputType === 'password' ? (
        <TextInput
          style={styles.input}
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          style={styles.input}
          placeholder={label}
          keyboardType={keyboardType}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction} style={styles.forgetBtn}>
        <Text style={styles.forgetText}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: helpers.px(8),
    marginBottom: helpers.px(25),
    gap: helpers.px(5),
  },
  input: {
    flex: 1,
    paddingVertical: 0,
  },
  forgetBtn: {},
  forgetText: {
    ...helpers.fontStyle('Bold', 14, colors.tabBarBg),
  },
});
