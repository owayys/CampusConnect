import * as React from "react";
import { useState } from "react";
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
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isSecureEntry1, setIsSecureEntry1] = useState(true);

  const handleSignup = async () => {
    if (password !== confirmPass) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await fetch(
        "https://campusconnect.herokuapp.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();
      if (data.code === 200) {
        console.log(data);
        navigation.navigate("Login");
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.signup}>
      <TouchableOpacity
        style={[styles.sginup, styles.sginupLayout]}
        onPress={handleSignup}
        activeOpacity={0.2}
      >
        <View style={[styles.signupButton, styles.buttonLayout]} />
        <Text style={[styles.signup2, styles.signupTypo]}>Signup</Text>
      </TouchableOpacity>
      <View style={[styles.email, styles.emailLayout]}>
        <TextInput
          style={[styles.usernameLayout, styles.usernamePosition]}
          placeholder="   Email"
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
          placeholder="   Your Full Name"
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
          placeholder="   **********"
          keyboardType="default"
          secureTextEntry={isSecureEntry}
          value={password}
          onChangeText={setPassword}
        />
         <TouchableOpacity
          onPress={() => setIsSecureEntry((prev) => !prev)}
          style={styles.hideIconWrapper1} // Add this style prop
        >
          <Image
            style={styles.hideIcon1}
            resizeMode="cover"
            source={require("../assets/hide2.png")}
          />
        </TouchableOpacity>
        <Text
          style={[styles.password1, styles.passwordTypo, styles.email1Typo]}
        >
          Password :
        </Text>
      </View>
      <View style={[styles.rePasswords,styles.emailLayout]}>
        <TextInput
          style={[styles.password2, styles.usernameLayout]}
          placeholder="   **********"
          keyboardType="default"
          secureTextEntry={isSecureEntry1}
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <TouchableOpacity
          onPress={() => setIsSecureEntry1((prev) => !prev)}
          style={styles.hideIconWrapper1} // Add this style prop
        >
          <Image
            style={styles.hideIcon}
            resizeMode="cover"
            source={require("../assets/hide2.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.rePassword, styles.passwordTypo]}>
          Re-Password :
        </Text>
        {errorMessage ? (
          <Text style={[styles.errorMessagestyle]}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    // height: 78,
    // left: 34,
    // width: 316,
    // position: "absolute",
    height: responsiveScreenHeight(9.5),
    // left: 34,
    width: responsiveScreenWidth(82),
    position: "absolute",
    margin: "auto",
  },
  usernamePosition: {
    // top: 27,
    top: responsiveScreenHeight(3),
    backgroundColor: Color.gainsboro_200,
  },
  errorMessagestyle: {
    // textAlign: "left",
    // color: 'red',
    // position: "absolute",
    // top: 100,
    // left: 10,
    // fontSize: FontSize.size_base,
    // fontFamily: FontFamily.robotoRegular,
    // width: 250,
    // height: 17,

    textAlign: "left",
    color: "red",
    position: "absolute",
    top: responsiveScreenHeight(10),
    left: responsiveScreenWidth(3.1),
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    width: responsiveScreenWidth(46),
    height: responsiveScreenHeight(2.3),
  },
  passwordTypo: {
    // height: 23,
    // textAlign: "left",
    // color: Color.darkgray_200,
    // fontFamily: FontFamily.robotoSemibold,
    // fontWeight: "600",
    // fontSize: FontSize.size_xl,
    // top: 0,
    // position: "absolute",
    height: responsiveScreenHeight(2.7),
    textAlign: "left",
    color: Color.darkgray_200,
    fontFamily: FontFamily.robotoSemibold,
    fontWeight: "600",
    fontSize: responsiveScreenFontSize(3),
    position: "absolute",
  },
  email1Typo: {
    // left:16,
    // height:23,

    left: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2.7),
    textAlign: "left",
    color: Color.darkgray_200,
    fontFamily: FontFamily.robotoSemibold,
    // backgroundColor:"#ffffff"
  },
  usernameLayout: {
    //height: 51,
    // backgroundColor: Color.gainsboro_200,
    //width: 316,
    // borderRadius: Border.br_81xl,
    // left: 0,
    position: "absolute",

    height: responsiveScreenHeight(6.1),
    backgroundColor: Color.gainsboro_200,
    width: responsiveScreenWidth(81),
    borderRadius: Border.br_81xl,
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
  },
  email1: {
    //width: 194,
    width:responsiveScreenWidth(50),
  },
  email: {
    //top: 313,
    top:responsiveScreenHeight(37),
  },
  usernameEmail1: {
    fontFamily: FontFamily.robotoRegular,
  },
  email2: {
    //top: 211,
    top: responsiveScreenHeight(25),
  },
  hideIcon: {
    // height: "20.75%",
    // top: "58.45%",
    // right: "7.18%",
    // bottom: "20.81%",
    // left: "87.44%",
    height: responsiveScreenWidth(5),
    width: responsiveScreenWidth(5),
    top: responsiveScreenHeight(4.6),
    // right: responsiveScreenWidth(10),
    // bottom: "38.28%",
    left: responsiveScreenWidth(70),
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    // overflow: "hidden",
    resizeMode: "contain",
  },
  hideIcon1: {
    // height: "20.75%",
    // top: "58.45%",
    // right: "7.18%",
    // bottom: "20.81%",
    // left: "87.44%",
    height: responsiveScreenWidth(5),
    width: responsiveScreenWidth(5),
    top: responsiveScreenHeight(4.6),
    // right: responsiveScreenWidth(10),
    // bottom: "38.28%",
    left: responsiveScreenWidth(70),
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    // overflow: "hidden",
    resizeMode: "contain",
  },
  password1: {
    //width: 117,
    width: responsiveScreenWidth(30),
  },
  passwords: {
    //top: 415,
    top: responsiveScreenHeight(49),
  },
  password2: {
    //top: 23,
    top:responsiveScreenHeight(3),
  },
  // hideIcon1: {
  //   height: "21.87%",
  //   top: "57.87%",
  //   right: "8.97%",
  //   bottom: "20.26%",
  //   left: "85.64%",
  // },
  rePassword: {
    //left: 17,
    left: responsiveScreenWidth(4.1),
    //width: 149,
    width:responsiveScreenWidth(40),
  },
  rePasswords: {
    //top: 521,
    top: responsiveScreenHeight(61.7),
    // height: 74,
    // width: 316,
    // left: 40,
    // position: "absolute",
  },
  signup: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",
    margin:"auto",
    //color: Color.skyblue_100,
  },
  sginup: {
    // top: 675,
    top: responsiveScreenHeight(80),
    // top: 675,
  },
  sginupLayout: {
    //height: 37,
    height: responsiveScreenHeight(4.4),
    width: "55%",
    // left: 80,
    margin: "auto",
    position: "absolute",
    alignItems: "center",

    // height: 37,
    // width: 231,
    // left: 80,
    // position: "absolute",
  },
  buttonLayout: {
    borderRadius: Border.br_81xl,
    // left: 0,
    // top: 0,
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
    margin: "auto",
    // left: 46,
    // top: 3.5,
    top: responsiveScreenHeight(0.7),
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
  signup2: {
    color: Color.skyblue_100,
  },
});

export default Signup;
