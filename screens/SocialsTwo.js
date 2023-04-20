import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native';
import { ListItem, Button, Avatar } from 'react-native-elements';
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StudyGroups = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const people = [
    {
      id:1,
      name: "Shehryar Khan",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:2,
      name: "Asher",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:3,
      name: "Luqman",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:4,
      name: "owais",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:5,
      name: "jufe-pulpy",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:6,
      name: "jaid",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:7,
      name: "jufe-pulpy",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:8,
      name: "jufe-pulpy",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
    {
      id:9,
      name: "jufe-pulpy",
      image: "https://via.placeholder.com/150",
      interests: ["Anime", "Coding"],
    },
  ];
  
  const [username, setUsername] = useState("");
  AsyncStorage.getItem("username").then((value) => {
    setUsername(value);
    console.log(value);
});


  const handleAddFriend = (groupId) => {
    // Handle the join action for the study group
    //navigation.navigate('JoinGroup', { groupId });
    console.log("clicky clicky")
  };

  // const filterStudyGroups = studyGroups.filter((group) =>
  //   group.name.toLowerCase().includes(search.toLowerCase())
  // );
  const filterPeople = people.filter((p) =>
  p.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headingContainer}>
      {/* <Text style={styles.heading}>Add Friends</Text> */}
      {/* <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image21.png")}
        />
         */}
         <Button
          title="View Requests"
          onPress={()=>{navigation.navigate('FriendRequests')}}
          buttonStyle={styles.newGroupButton1}
        />
        <Button
          title="My Friends"
          onPress={()=>{navigation.navigate('ViewFriends')}}
          buttonStyle={styles.newGroupButton}
        />
      </View>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search people..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#ffff"
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {filterPeople.map((p) => (
          <ListItem
            key={p.id}
            containerStyle={styles.listItemContainer}
          >
            <Image
                style={styles.imageIcon1}
                resizeMode="cover"
                // source={require("../assets/image22.png")}
                source={{uri:p.image}}
            />
            <ListItem.Content style={styles.listItemContent}>
              <ListItem.Title style={styles.title}>{p.name}</ListItem.Title>
              <Text style={styles.details}>
                {p.interests}
              </Text>
            </ListItem.Content>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#0E1936', padding: 10 }} onPress={() => handleAddFriend(p.id)}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>Add Friend</Text>
            </TouchableOpacity>
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1936',
  },
  headingContainer: {
    alignItems: 'center',
    padding: 10,
    //marginBottom: responsiveScreenHeight(1.2),
  },
  heading: {
    color: '#4EC6E0',
    //fontSize: 24,
    fontSize: responsiveScreenFontSize(3),
    fontWeight: 'bold',
  },
  imageIcon1: {
    // bottom:195,
    // left: 20,
    // width: 65,
    // height: 65,
    width: responsiveScreenWidth(17),
    height: responsiveScreenWidth(17),
    borderRadius: Border.br_11xl,
    //position: "absolute",
},
  searchBar: {
    backgroundColor: '#1C2A4E',
    color: '#4EC6E0',
    //borderRadius: 8,
    borderRadius: responsiveScreenWidth(2),
    //paddingHorizontal: 16,
    paddingHorizontal: responsiveScreenWidth(4),
    //paddingVertical: 16,
    paddingVertical: responsiveScreenHeight(1.9),
    //margin: 16,
    margin: responsiveScreenWidth(4),
  },
  scrollView: {
    //paddingBottom: 20,
    paddingBottom: responsiveScreenHeight(5),
  },
  listItemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: responsiveScreenWidth(7),
    //marginBottom: 10,
    marginBottom: responsiveScreenHeight(1.2),
    //marginHorizontal: 10,
    marginHorizontal: responsiveScreenWidth(2),
  },
  listItemContent: {
    flex: 1,
  },
  title: {
    color: '#4EC6E0',
    fontWeight: 'bold',
    fontSize: responsiveScreenFontSize(2.4),
    //fontSize:18,
  },
  details: {
    color: '#000',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    //backgroundColor:"white"
    
  },
  newGroupButton: {
    backgroundColor: '#4EC6E0',
    borderRadius: responsiveScreenWidth(2),
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(0.8),
  },
  newGroupButton1: {
    backgroundColor: "#DF910C",
    borderRadius: responsiveScreenWidth(2),
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(0.8),
  },
  imageIcon: {
    // top: 58,
    // left: 27,
    // borderRadius: Border.br_31xl,
    // width: 38,
    // height: 38,
    // position: "absolute",
    // top: responsiveScreenHeight(6.2),
    //left: responsiveScreenWidth(5),
    borderRadius: Border.br_31xl,
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    //position: "absolute",
  },
  imgplusname:{
    width: responsiveScreenWidth(80),
    height: responsiveScreenWidth(12.1),
    left:responsiveScreenWidth(5),
    //backgroundColor:"white",
  },
  iconOutlineMessageCircle: {
    //position: "absolute",
    // top: 56,
    //top: responsiveScreenHeight(6.8),
    //left: responsiveScreenWidth(0),
    backgroundColor:"white"
  },
  home03IconLayout: {
    // height: 24,
    // width: 24,
    tintColor: "white",
    //width: 33,
    width: responsiveScreenWidth(6),
    //height: 33,
    height: responsiveScreenWidth(6.5),
  },
  basePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    //position: "absolute",
    width: "100%",
  },
  chatIcon: {
    // width: 20,
    // height: 20,
    // tintColor:"white",
    tintColor: "white",
    //width: 33,
    width: responsiveScreenWidth(6),
    //height: 33,
    height: responsiveScreenWidth(6.5),
  },
  homeScreenItem: {
    left: responsiveScreenWidth(88.5),
  },
  homeLayout: {
    // height: 7,
    height: responsiveScreenWidth(1.8),
    // width: 7,
    width: responsiveScreenWidth(1.8),
    //top: 56,
    top: responsiveScreenHeight(6.8),
    position: "absolute",
  },
  groupDescriptionItem: {
    // top: 101,
    // left: 1,
    // width: 410,
    // height: 1,
    top: responsiveScreenHeight(12),
    left: 1,
    width: responsiveScreenWidth(100),
    height: 1,
    position: "absolute",
    //backgroundColor:"white"
  },
});

export default StudyGroups;

