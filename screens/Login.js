import * as React from "react";
import { useState } from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
 

const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      console.log(username)
      console.log(password)
      const response = await fetch('https://campusconnect.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:username, password:password,soc_flag: 0 })
      });

      const data = await response.json();
      if (data.code===200){
        console.log(data);
        //console.log(data.name)
        navigation.navigate('HomeScreen', {
          screen: 'Home',
          params: { name: data.name }});
      }
      else{
        console.log("Error");
        setErrorMessage('Incorrect username or password.');
      }
     //navigation.navigate('HomeScreen', { name: data.name });
    } catch (err) {
      console.log(err);
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };


  return (
    <View style={styles.login}>
      <Text style={[styles.hiWelcomeBack, styles.hiWelcomeBackFlexBox]}>{`Hi,
Welcome back`}</Text>
      <Pressable
        style={[styles.sginup, styles.sginupLayout]}
        onPress={() => navigation.navigate("Signup")}
      >
        <View style={[styles.signupButton, styles.buttonLayout]} />
        <Text style={[styles.signup, styles.signupTypo]}>Signup</Text>
      </Pressable>
      <TouchableOpacity
        style={[styles.login1, styles.sginupLayout]}
        activeOpacity={0.2}
        onPress={handleLogin}
        //onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={[styles.loginButton, styles.buttonLayout]} />
        <Text style={[styles.login2, styles.signupTypo]}>login</Text>
      </TouchableOpacity>
      <View style={styles.password}>
        <Text style={[styles.forgotPassword, styles.hiWelcomeBackFlexBox]}>
          forgot password?
        </Text>
        {errorMessage ? <Text style={[styles.errorMessagestyle]}>{errorMessage}</Text> : null}
        <TextInput
          style={[styles.password1, styles.passwordLayout]}
          placeholder="   **********"
          keyboardType="default"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {/* <Image
          style={styles.hideIcon}
          resizeMode="cover"
          source={require("../assets/hide2.png")}
        /> */}
        <Text style={[styles.password2, styles.emailTypo]}>Password :</Text>
      </View>
      <View style={styles.usernameOrEmail}>
        <Text style={[styles.email, styles.emailTypo]}>Email :</Text>
        <TextInput
          style={[styles.password3, styles.passwordLayout]}
          placeholder="   username@email.com"
          keyboardType="email-address"
          value={username}
          onChangeText={setUsername}
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hiWelcomeBackFlexBox: {
    textAlign: "left",
    color: Color.skyblue_100,
    position: "absolute",
  },
  errorMessagestyle: {
    textAlign: "left",
    color: 'red',
    position: "absolute",
    // top: 100,
    // left: 10,
    top:responsiveScreenHeight(12),
    left:responsiveScreenWidth(2),
    // fontSize: FontSize.size_base,
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: FontFamily.robotoRegular,
    // width: 250,
    // height: 17,
    width: responsiveScreenWidth(60),
    height: responsiveScreenHeight(2),

    // textAlign: "left",
    // color: 'red',
    // position: "absolute",
    // top: 100,
    // left: 10,
    // fontSize: FontSize.size_base,
    // fontFamily: FontFamily.robotoRegular,
    // width: 250,
    // height: 17,
  },
  sginupLayout: {
    // height: 37,
    height: responsiveScreenHeight(4.4),
    width: "55%",
    // left: 80,
    margin:"auto",
    position: "absolute",
    alignItems:"center",

    // height: 37,
    // width: 231,
    // left: 80,
    // position: "absolute",
  },
  buttonLayout: {
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    // height: 37,
    height: responsiveScreenHeight(4.4),
    width: "100%",
    position: "relative",

    // borderRadius: Border.br_81xl,
    // left: 0,
    // top: 0,
    // height: 37,
    // width: 231,
    // position: "absolute",


    
  },
  signupTypo: {
    // height: 18,
    // width: 127,
    // justifyContent: "center",
    // alignItems: "center",
    // display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: responsiveScreenFontSize(2.5),
    margin:"auto",
    // left: 46,
    // top: 3.5,
    top:responsiveScreenHeight(0.7),
    position: "absolute",

    // height: 18,
    // width: 127,
    // justifyContent: "center",
    // alignItems: "center",
    // display: "flex",
    // textAlign: "center",
    // fontFamily: FontFamily.interSemibold,
    // fontWeight: "600",
    // fontSize: FontSize.size_xl,
    // left: 46,
    // top: 9,
    // position: "absolute",
  },
  passwordLayout: {
    // height: 48,
    height: responsiveScreenHeight(5.6),
    backgroundColor: Color.gainsboro_200,
    width: "100%",
    borderRadius: Border.br_81xl,
    left: 0,
    position: "relative",
    margin:"auto",

    // height: 48,
    // backgroundColor: Color.gainsboro_200,
    // width: 324,
    // borderRadius: Border.br_81xl,
    // left: 0,
    // position: "absolute",
  },
  emailTypo: {
    color: Color.darkgray_200,
    fontFamily: FontFamily.robotoSemibold,
    fontWeight: "600",
    // fontSize: FontSize.size_xl,
    fontSize: responsiveScreenFontSize(2.5),
    top: 0,
    textAlign: "left",
    position: "absolute",
    
    
    // color: Color.darkgray_200,
    // fontFamily: FontFamily.robotoSemibold,
    // fontWeight: "600",
    // fontSize: FontSize.size_xl,
    // top: 0,
    // textAlign: "left",
    // position: "absolute",
  },
  hiWelcomeBack: {
    top: responsiveScreenHeight(17),
    left: responsiveScreenWidth(8),
    fontSize: responsiveScreenFontSize(5.5),
    fontWeight: "800",
    fontFamily: FontFamily.robotoExtrabold,
    width: responsiveScreenWidth(382),
    height: responsiveScreenHeight(109),
    
    
    // top: 143,
    // left: 34,
    // fontSize: 44,
    // fontWeight: "800",
    // fontFamily: FontFamily.robotoExtrabold,
    // width: 382,
    // height: 109,
  },
  signupButton: {
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 2,
    // backgroundColor: Color.skyblue_100,

  },
  signup: {
    color: Color.skyblue_100,
    // height: 18,
    // width: 127,
    // justifyContent: "center",
    // alignItems: "center",
    // display: "flex",
    // textAlign: "center",
    // fontFamily: FontFamily.interSemibold,
    // fontWeight: "600",
    // fontSize: FontSize.size_xl,
    // left: 46,
    // top: 9,

    // color: Color.skyblue_100,
    // height: 18,
    // width: 127,
    // justifyContent: "center",
    // alignItems: "center",
    // display: "flex",
    // textAlign: "center",
    // fontFamily: FontFamily.interSemibold,
    // fontWeight: "600",
    // fontSize: FontSize.size_xl,
    // left: 46,
    // top: 9,
  },
  sginup: {
    // top: 675,
    top: responsiveScreenHeight(80),
    // top: 675,
    
  },
  loginButton: {
    backgroundColor: Color.skyblue_100,
  },
  login2: {
    color: Color.white,
  },
  login1: {
    // top: 604,
    top: responsiveScreenHeight(71),
  },
  forgotPassword: {
    // top: 78,
    // left: 182,
    top: responsiveScreenHeight(9.3),
    left: responsiveScreenWidth(50),
    // fontSize: FontSize.size_base,
    fontSize: responsiveScreenFontSize(1.8),
    fontFamily: FontFamily.robotoRegular,
    // width: 179,
    // height: 17,
    width: responsiveScreenWidth(179),
    height: responsiveScreenHeight(17),

  },
  password1: {
    // top: 25,
    top: responsiveScreenHeight(3),
  },
  hideIcon: {
    height: "16.2%",
    width: "4.82%",
    top: "45.52%",
    right: "16.84%",
    bottom: "38.28%",
    left: "78.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  password2: {
    left: responsiveScreenWidth(4),
    width: responsiveScreenWidth(22),
    height: responsiveScreenHeight(2.5),

    // left: 18,
    // width: 199,
    // height: 22,
  },
  password: {
    // top: 448,
    top: responsiveScreenHeight(53),
    // width: 362,
    // height:95,
    height: responsiveScreenHeight(8.9),
    // left: 31,
    // position: "absolute",
    width: "80%%",
    // left: 31,
    position: "absolute",
    alignItems:"center",
    margin:"auto",

    // top: 448,
    // width: 362,
    // height: 95,
    // left: 31,
    // position: "absolute",
    
  },
  email: {
    // // left: 18,
    // // width: 199,
    // // height: 22,
    left: responsiveScreenWidth(4),
    width: responsiveScreenWidth(18),
    height: responsiveScreenHeight(2.5),

    // left: 17,
    // width: 205,
    // height: 23,
  },
  password3: {
    // top: 29,
    top: responsiveScreenHeight(3),
  },
  usernameOrEmail: {
    // top: 339,
    top: responsiveScreenHeight(40),
    // height: 77,
    height:responsiveScreenHeight(8.9),
    width: "80%%",
    // left: 31,
    position: "absolute",
    alignItems:"center",
    margin:"auto",
  },
  login: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",    

  },
});

export default Login;
