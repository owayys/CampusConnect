import * as React from "react";
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSignup = async () => {
    if (password !== confirmPass) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    try {
        const body = {
            name: name,
            email: email,
            password: password
        }

      const data = await response.json();
      if (data.code===200){
        console.log(data);
        navigation.navigate("Login")
      }
      else{
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <View style={styles.signup}>
      <TouchableOpacity
        style={styles.sginupButton}
        activeOpacity={0.2}
        //onPress={() => navigation.navigate("Login")}\
        onPress={handleSignup}
      >
        <View style={styles.signupButton} />
        <Text style={styles.signup1}>Signup</Text>
      </TouchableOpacity>
      <View style={[styles.email, styles.emailLayout]}>
        <TextInput
          style={[styles.usernameLayout, styles.usernamePosition]}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={[styles.email1, styles.passwordTypo, styles.email1Typo]}>
          Email:
        </Text>
      </View>
      <View style={[styles.email2, styles.emailLayout]}>
        <TextInput
          style={[
            styles.usernameEmail1,
            styles.usernameLayout,
            styles.usernamePosition,
          ]}
          placeholder="Your Full Name"
          keyboardType="default"
          value={name}
          onChangeText={setName}
        />
        <Text style={[styles.email1, styles.passwordTypo, styles.email1Typo]}>
          Your Name:
        </Text>
      </View>
      <View style={[styles.passwords, styles.emailLayout]}>
        <TextInput
          style={[styles.password2, styles.usernameLayout]}
          placeholder="**********"
          keyboardType="default"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Image
          style={[styles.hideIcon, styles.hideIconLayout]}
          resizeMode="cover"
          source={require("../assets/hide.png")}
        />
        <Text
          style={[styles.password1, styles.passwordTypo, styles.email1Typo]}
        >
          Password :
        </Text>
      </View>
      <View style={styles.rePasswords}>
        <TextInput
          style={[styles.password2, styles.usernameLayout]}
          placeholder="**********"
          keyboardType="default"
          secureTextEntry
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Image
          style={[styles.hideIcon1, styles.hideIconLayout]}
          resizeMode="cover"
          source={require("../assets/hide1.png")}
        />
        <Text style={[styles.rePassword, styles.passwordTypo]}>
          Re-Password :
        </Text>
        {errorMessage ? <Text style={[styles.errorMessagestyle]}>{errorMessage}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    height: 78,
    left: 34,
    width: 316,
    position: "absolute",
  },
  usernamePosition: {
    top: 27,
    backgroundColor: Color.gainsboro_200,
  },
  errorMessagestyle: {
    textAlign: "left",
    color: 'red',
    position: "absolute",
    top: 100,
    left: 10,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    width: 250,
    height: 17,
  },
  passwordTypo: {
    height: 23,
    textAlign: "left",
    color: Color.darkgray_200,
    fontFamily: FontFamily.robotoSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  email1Typo: {
    left: 16,
    height: 23,
    textAlign: "left",
    color: Color.darkgray_200,
    fontFamily: FontFamily.robotoSemibold,
  },
  usernameLayout: {
    height: 51,
    backgroundColor: Color.gainsboro_200,
    width: 316,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  hideIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "5.38%",
    position: "absolute",
    overflow: "hidden",
  },
  signupButton: {
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 2,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    height: 32,
    width: 202,
    position: "absolute",
  },
  signup1: {
    top: 8,
    fontFamily: FontFamily.interSemibold,
    color: Color.skyblue_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 16,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 40,
    position: "absolute",
  },
  sginupButton: {
    top: 699,
    left: 91,
    height: 32,
    width: 202,
    position: "absolute",
  },
  email1: {
    width: 194,
  },
  email: {
    top: 313,
  },
  usernameEmail1: {
    fontFamily: "Roboto",
  },
  email2: {
    top: 211,
  },
  hideIcon: {
    height: "20.75%",
    top: "58.45%",
    right: "7.18%",
    bottom: "20.81%",
    left: "87.44%",
  },
  password1: {
    width: 117,
  },
  passwords: {
    top: 415,
  },
  password2: {
    top: 23,
  },
  hideIcon1: {
    height: "21.87%",
    top: "57.87%",
    right: "8.97%",
    bottom: "20.26%",
    left: "85.64%",
  },
  rePassword: {
    left: 17,
    width: 149,
  },
  rePasswords: {
    top: 521,
    height: 74,
    width: 316,
    left: 40,
    position: "absolute",
  },
  signup: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Signup;
