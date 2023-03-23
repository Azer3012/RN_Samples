import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import helpers from '../../helpers/helpers';
import colors from '../../values/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const navigation = useNavigation();
  const {login}=useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/auth.png')}
          />
        </View>
        <Text style={styles.text}>Login</Text>
        <InputField
          label={'Email ID'}
          icon={<Icon name="alternate-email" size={20} color="#666" />}
          keyboardType={"email-address"}
        />
        <InputField
          label={'Password'}
          icon={ <IonIcon name="ios-lock-closed-outline" size={20} color="#666" />}
          inputType={"password"}
          fieldButtonLabel={"forget?"}
          fieldButtonFunction={()=>{}}
          
        />
        
        
        <CustomButton label={"Login"} onPress={login}/>
       
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
        <View style={styles.registerContainer}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.forgetText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
});
