import * as React from "react";

import { useState } from "react";

import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TextInput,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const OuterChatInterface = () => {

  const navigation = useNavigation();

  const [selectedUser, setSelectedUser] = useState('')

  const handleUserSelect = () => {

  }

  const sendMessage = () => {
    
  }

  return (
    <View style={styles.outerChatInterface}>
      <View style={styles.group}>
        <Text style={[styles.noPracujemyZ, styles.willDoSuperTypo]}>
          no pracujemy z domu przez 5 ...
        </Text>
        <Image
          style={[styles.imageIcon, styles.imageIconLayout1]}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />
        <Text style={[styles.feb, styles.febTypo, styles.febTypo1]}>
          01 Feb
        </Text>
        <Text
          style={[
            styles.babar,
            styles.febTypo,
            styles.febTypo1,
            styles.aliPosition,
          ]}
        >
          Babar
        </Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
        <Image
          style={[styles.imageIcon1, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image14.png")}
        />
        <Text style={[styles.marPosition, styles.marTypo]}>18 Mar</Text>
        <Text style={[styles.alina, styles.marTypo, styles.aliPosition]}>
          {" "}
          Alina
        </Text>
        <Text style={[styles.hereIsAnother, styles.willDoSuperTypo]}>
          Here is another tutorial, if you...
        </Text>
        <Image
          style={[styles.imageIcon2, styles.imageIconLayout1]}
          resizeMode="cover"
          source={require("../assets/image15.png")}
        />
        <Text style={[styles.mar1Typo, styles.marPosition]}>23 Mar</Text>
        <Text style={[styles.kamran, styles.mar1Typo, styles.aliPosition]}>
          {" "}
          Kamran
        </Text>
        <Text style={[styles.uploadedFile, styles.willDoSuperTypo]}>
          Uploaded file.
        </Text>
        <Image
          style={[styles.imageIcon3, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image16.png")}
        />
        <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
        <Text style={[styles.sara, styles.sunTypo, styles.aliPosition]}>
          {" "}
          Sara
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/group3.png")}
        />
        <Text style={[styles.willDoSuper, styles.willDoSuperTypo]}>
          Will do, super, thank you
        </Text>
        <Image
          style={[styles.imageIcon4, styles.imageIconLayout1]}
          resizeMode="cover"
          source={require("../assets/image17.png")}
        />
        <Text style={[styles.tue, styles.tueTypo]}>Tue</Text>
        <Text style={[styles.ahmed, styles.tueTypo, styles.aliPosition]}>
          Ahmed
        </Text>
        <Text style={[styles.maciejkowalskiemailcom, styles.willDoSuperTypo]}>
          maciej.kowalski@email.com
        </Text>
        <Image
          style={[styles.imageIcon5, styles.imageIconLayout1]}
          resizeMode="cover"
          source={require("../assets/image18.png")}
        />
        <Text style={[styles.text, styles.aliTypo]}>08:43</Text>
        <Text style={[styles.ali, styles.aliTypo, styles.aliPosition]}>
          Ali
        </Text>
      </View>
      <Image
        style={styles.groupIcon2}
        resizeMode="cover"
        source={require("../assets/group4.png")}
      />
      <LinearGradient
        style={[styles.rectangle, styles.rectangleLayout]}
        locations={[0, 0.64]}
        colors={["#fff", "#3c3c3c"]}
      >
        <Pressable style={[styles.pressable, styles.rectangleShadowBox]} />
      </LinearGradient>
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union.png")}
      />
      <Text
        style={[styles.softwareEngineering, styles.moenkaWalinaTypo]}
      >{`Software 
Engineering`}</Text>
      <LinearGradient
        style={[
          styles.rectangle1,
          styles.rectangleShadowBox,
          styles.rectangleLayout,
        ]}
        locations={[0, 1]}
        colors={["#b347ea", "#053cff"]}
      />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union.png")}
      />
      <Text style={[styles.machineLearning, styles.moenkaWalinaTypo]}>{`Machine
Learning`}</Text>
      <LinearGradient
        style={[
          styles.rectangle2,
          styles.rectangleShadowBox,
          styles.rectangleLayout,
        ]}
        locations={[0, 1]}
        colors={["#03a9f1", "#a0025a"]}
      />
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union.png")}
      />
      <Text
        style={[styles.advancedProgramming, styles.moenkaWalinaTypo]}
      >{`Advanced
Programming`}</Text>
      <LinearGradient
        style={[
          styles.rectangle3,
          styles.rectangleShadowBox,
          styles.rectangleLayout,
        ]}
        locations={[0, 1]}
        colors={["#00ffcd", "#dcd4ff"]}
      />
      <Text style={[styles.moenkaWalina, styles.moenkaWalinaTypo]}>{`Możenka 
Walina`}</Text>
      <Image
        style={styles.unionIcon3}
        resizeMode="cover"
        source={require("../assets/union1.png")}
      />
      <Text style={[styles.studyGroupsChats, styles.febTypo]}>
        Study Groups Chats
      </Text>
      <TextInput
        style={[styles.rectangle4, styles.rectangle4Position]}
        placeholder="Search..."
        keyboardType="default"
        autoCapitalize="none"
      />
      <Image
        style={[styles.groupIcon3, styles.rectangle4Position]}
        resizeMode="cover"
        source={require("../assets/group5.png")}
      />
      <Text style={[styles.ahmedLuqman, styles.febTypo]}>Ahmed Luqman</Text>
      <Image
        style={styles.imageIcon6}
        resizeMode="cover"
        source={require("../assets/image19.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  willDoSuperTypo: {
    color: Color.white,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 60,
    position: "absolute",
  },
  imageIconLayout1: {
    height: 92,
    width: 92,
    left: -20,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  febTypo: {
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  febTypo1: {
    fontSize: FontSize.size_mini,
    top: 350,
    textTransform: "capitalize",
  },
  aliPosition: {
    left: 60,
    textAlign: "left",
  },
  imageIconLayout: {
    height: 112,
    width: 112,
    left: -14,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  marTypo: {
    top: 280,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_mini,
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  marPosition: {
    left: 270,
    textAlign: "right",
  },
  mar1Typo: {
    top: 210,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_mini,
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  sunTypo: {
    top: 140,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_mini,
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  iconPosition: {
    bottom: "67.64%",
    top: "28.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "3.95%",
    position: "absolute",
    overflow: "hidden",
  },
  tueTypo: {
    top: 70,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_mini,
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  aliTypo: {
    top: 0,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    fontSize: FontSize.size_mini,
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleLayout: {
    height: 140,
    width: 95,
    top: 202,
    position: "absolute",
  },
  rectangleShadowBox: {
    backgroundColor: "transparent",
    elevation: 34,
    shadowRadius: 34,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  moenkaWalinaTypo: {
    fontSize: FontSize.size_xs,
    top: 284,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle4Position: {
    top: 117,
    position: "absolute",
  },
  noPracujemyZ: {
    textAlign: "left",
    top: 373,
  },
  imageIcon: {
    top: 331,
  },
  feb: {
    left: 271,
    textAlign: "right",
  },
  babar: {
    textAlign: "left",
  },
  groupIcon: {
    top: "83.67%",
    right: "72.68%",
    bottom: "12.38%",
    left: "22.06%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "3.95%",
    width: "5.25%",
    position: "absolute",
    overflow: "hidden",
  },
  imageIcon1: {
    top: 271,
  },
  alina: {
    textAlign: "left",
  },
  hereIsAnother: {
    top: 233,
    textAlign: "left",
  },
  imageIcon2: {
    top: 191,
  },
  kamran: {
    textAlign: "left",
  },
  uploadedFile: {
    top: 163,
    textAlign: "left",
  },
  imageIcon3: {
    top: 131,
  },
  sun: {
    left: 294,
    textAlign: "right",
  },
  sara: {
    textAlign: "left",
  },
  vectorIcon: {
    width: "5.86%",
    right: "6.92%",
    left: "87.22%",
  },
  groupIcon1: {
    right: "14.53%",
    left: "80.21%",
    width: "5.25%",
    bottom: "67.64%",
    top: "28.41%",
  },
  willDoSuper: {
    top: 93,
    textAlign: "left",
  },
  imageIcon4: {
    top: 51,
  },
  tue: {
    left: 295,
    textAlign: "right",
  },
  ahmed: {
    textAlign: "left",
  },
  maciejkowalskiemailcom: {
    top: 23,
    textAlign: "left",
  },
  imageIcon5: {
    top: -19,
  },
  text: {
    left: 280,
    textAlign: "right",
  },
  ali: {
    textAlign: "left",
  },
  group: {
    top: 394,
    width: 322,
    height: 395,
    left: 28,
    position: "absolute",
  },
  groupIcon2: {
    left: 103,
    width: 174,
    height: 4,
    top: 373,
    position: "absolute",
  },
  pressable: {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    elevation: 34,
    shadowRadius: 34,
    shadowColor: "rgba(0, 0, 0, 0.45)",
  },
  rectangle: {
    left: 28,
  },
  unionIcon: {
    borderRadius: Border.br_11xs,
    width: 15,
    height: 13,
  },
  softwareEngineering: {
    left: 38,
  },
  rectangle1: {
    left: 248,
  },
  machineLearning: {
    left: 258,
  },
  rectangle2: {
    left: 138,
  },
  advancedProgramming: {
    left: 143,
  },
  rectangle3: {
    left: 358,
  },
  moenkaWalina: {
    left: 368,
  },
  unionIcon3: {
    borderRadius: 4,
    width: 1,
    height: 16,
  },
  studyGroupsChats: {
    top: 169,
    fontSize: FontSize.size_xl,
    left: 38,
    textAlign: "left",
  },
  rectangle4: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkslategray_200,
    width: 340,
    height: 40,
    left: 28,
  },
  groupIcon3: {
    left: 324,
    width: 56,
    height: 42,
  },
  ahmedLuqman: {
    top: 67,
    left: 93,
    fontSize: 24,
    display: "flex",
    alignItems: "flex-end",
    width: 201,
    height: 30,
    textAlign: "left",
  },
  imageIcon6: {
    top: 39,
    left: 18,
    width: 91,
    height: 95,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  outerChatInterface: {
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowRadius: 100,
    elevation: 100,
    flex: 1,
    height: 844,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
    width: "100%",
  },
});

export default OuterChatInterface;
