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
import OuterChatInterfaceGroups from "./OuterChatInterfaceGroups";

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

  const courses = [
    {
      course:"ML",
      course_code:"532"
    },
    {
      course:"AP",
      course_code:"300"
    },
    {
      course:"SE",
      course_code:"310"
    },
    {
      course:"NetSec",
      course_code:"472"
    },   
  ]



  /* Dictionary ends here */


  const navigation = useNavigation();

  const [searchInput, setSearchInput] = useState('') // for search bar input

  return (

    <View style={styles.outerChatInterface}>



      <View style={styles.searchBar}>
        
        <TextInput style={{top:5}}
          color='white'
          placeholder="Search..."
          placeholderTextColor={"white"}
          keyboardType="default"
          autoCapitalize="none"
          onChangeText={searchInput => setSearchInput(searchInput)}
        />

        <TouchableOpacity 
          onPress={() => console.log(searchInput)}
        >
          <Image style = {styles.searchButton} source={require("../assets/group5.png")}/>
        </TouchableOpacity>

      </View>

      <SearchFilter data={temp_dict} searchInput={searchInput} setSearchInput={setSearchInput}/>

      <View style={styles.GroupChatsButton}>
        <Button 
          title="Group Study Chats" 
          onPress={() => navigation.navigate("OuterChatInterfaceGroups", {courses: courses})}
          style={{backgroundColor:'navy blue'}} 
          color={Color.gray_200}
        />
      </View>

    <View style={[styles.userPos]}>
      <Text style={styles.userName}>Ahmed Luqman</Text>
      <Image
        style={styles.userImage}
        resizeMode="cover"
        source={require("../assets/image19.png")}
      />
    </View>

      

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
    top: 90,
    marginTop: 50,
    color: "white",
    paddingLeft:10
    
  },

  searchButton : {
    left: "80%",
    marginTop: "-12%",
    top:5,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    
  },

  GroupChatsButton: {
    fontFamily: FontFamily.robotoSemibold,
    top: 205,
    fontSize: FontSize.size_xl,
    flex: 1, 
    alignSelf:"center",
    textTransform: "capitalize",
    color: Color.white,
    letterSpacing: 2,
    position: "absolute",
    width:"50%",
  },


  userPos: {
    position: "absolute",
  },

  userName: {
    fontFamily: FontFamily.robotoSemibold,
    textTransform: "capitalize",
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
    margin:80,
    left: 50,
    top: -10,
    fontSize:FontSize.size_6xl
  },

  userImage: {
    top: 45,
    left: 18,
    width: 130,
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
