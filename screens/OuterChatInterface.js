import * as React from "react";

import { useState, Component } from "react";

import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight

} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import SearchFilter from "./SearchFilter";

const OuterChatInterface = () => {

  /* Temporary Dictionary for Search Filter Testing*/

  const temp_dict = [

    {
      name: "Shehryar Khan",
      icon: "icon1",
      content: "Heyyy",
    },
    {
      name: "Asher",
      icon: "icon2",
      content: "Wow",
    },
    {
      name: "Luqman",
      icon: "icon3",
      content: "!gsb",
    },
    {
      name: "owais",
      icon: "icon4",
      content: "asdadadaw",
    },
    {
      name: "jufe-pulpy",
      icon: "icon5",
      content: "adadadadadadadadad",
    },
    {
      name: "jaid",
      icon: "icon6",
      content: "adadadadadadadadad",
    },
    {
      name: "jufe-pulpy",
      icon: "icon7",
      content: "adadadadadadadadad",
    },


  ]



  /* Dictionary ends here */


  const navigation = useNavigation();

  const [searchInput, setSearchInput] = useState('') // for search bar input

  const SearchIconButton = () => (
    <TouchableOpacity 
      onPress={() => {console.log(searchInput)}}
    >
      <Image style = {styles.searchButton} source={require("../assets/group5.png")}/>
    </TouchableOpacity>
  );

  return (
    <View style={styles.outerChatInterface}>
      <View style={styles.group}>

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
      <Text style={[styles.machineLearning, styles.moenkaWalinaTypo]}>{`Machine Learning`}</Text>
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
    
        
      <TextInput style={styles.searchBar}
        
        placeholder="Search..."
        placeholderTextColor={"white"}
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={searchInput => setSearchInput(searchInput)}
      />
      <SearchIconButton /> 

      <SearchFilter data={temp_dict} searchInput={searchInput} setSearchInput={setSearchInput}/>

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

  searchBar : {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkslategray_200,
    width: 340,
    height: 40,
    left: 28,
    marginTop: "15%",
    color: "white"
    
  },

  searchButton : {
    left: "80%",
    marginTop: "-12%",
    width: 50,
    height: 50,
    resizeMode: 'contain',
    
  },


  willDoSuperTypo: {
    color: Color.white,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    top: 23,
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
