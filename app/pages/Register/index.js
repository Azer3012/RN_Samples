import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import helpers from '../../helpers/helpers';
import colors from '../../values/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import DatePicker from 'react-native-date-picker';

const Register = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [birthday, setBirthday] = useState("Date of birth")
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.viewContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/auth.png')}
          />
        </View>
        <Text style={styles.text}>Registration</Text>
        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or,Login with...
        </Text>
        <View style={styles.social}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              style={styles.socialImg}
              source={require('../../assets/images/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              style={styles.socialImg}
              source={require('../../assets/images/fb.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              style={styles.socialImg}
              source={require('../../assets/images/twitter.png')}
            />
          </TouchableOpacity>
        </View>

        <InputField
          label={'Full name'}
          icon={<IonIcon name="person-outline" size={20} color="#666" />}
        />
        <InputField
          label={'Email ID'}
          icon={<Icon name="alternate-email" size={20} color="#666" />}
          keyboardType={'email-address'}
        />
        <InputField
          label={'Password'}
          icon={
            <IonIcon name="ios-lock-closed-outline" size={20} color="#666" />
          }
          inputType={'password'}
        />
        <InputField
          label={'Confirm Password'}
          icon={
            <IonIcon name="ios-lock-closed-outline" size={20} color="#666" />
          }
          inputType={'password'}
        />
        <View style={styles.datePicker}>
          <IonIcon name="calendar-outline" size={20} color="#666" />
          <TouchableOpacity onPress={()=>setOpen(true)} style={styles.datePickerBtn}>
            <Text style={styles.datePickerText}>{birthday}</Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          mode={"date"}
          date={date}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setBirthday(date.toDateString())
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <CustomButton label={'Register'} onPress={() => {}} />

        <View style={styles.registerContainer}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.forgetText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  viewContainer: {
    paddingHorizontal: helpers.px(25),
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: helpers.px(300),
    height: helpers.px(300),
  },
  text: {
    ...helpers.fontStyle('Bold', 22, '#333'),
    marginBottom: helpers.px(30),
  },
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

  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: helpers.px(20),
  },
  socialBtn: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: helpers.px(10),
    paddingHorizontal: helpers.px(30),
    paddingVertical: helpers.px(10),
  },
  socialImg: {
    width: helpers.px(24),
    height: helpers.px(24),
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: helpers.px(30),
    marginTop: helpers.px(20),
    gap: helpers.px(8),
  },
  datePicker: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: helpers.px(30),
    paddingBottom: helpers.px(8),
    gap: helpers.px(5),
  },
  datePickerBtn: {},
  datePickerText: {
    color: '#666',
    marginTop: helpers.px(5),
  },
});
