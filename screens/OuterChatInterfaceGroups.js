import { StyleSheet, Text, View, Flat, FlatList, Image, Pressable, Button,} from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const OuterChatInterfaceGroups = ({route}) => {


  const courses = [
    { name: 'ML', image: require('../assets/ML1.png') },
    { name: 'AP', image: require('../assets/AP1.png') },
    { name: 'SE', image: require('../assets/SE1.png') },
    { name: 'NetSec', image: require('../assets/netsec1.png') },
    { name: 'Blockchain', image: require('../assets/blockchain1.png') },
    { name: 'Data Mining', image: require('../assets/datamining1.png') },
    { name: '1', image: require('../assets/netsec1.png') },
    { name: '2', image: require('../assets/blockchain1.png') },
    { name: '3', image: require('../assets/datamining1.png') },
    { name: '4', image: require('../assets/datamining1.png') },
    // Add more courses as needed
  ];
  
  // const { courses } = route.params; // Receiving Value
  const navigation = useNavigation()

  const renderCourses = () => {
    const rows = [];
    for (let i = 0; i < courses.length; i += 2) {
      const course1 = courses[i];
      const course2 = courses[i + 1];
      rows.push(
        <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Course name={course1.name} image={course1.image} />
          {course2 && <Course name={course2.name} image={course2.image} />}
        </View>
      );
    }
    return rows;
  }



  const Course = ({ name, image }) => {
    return (
      <TouchableOpacity onPress={handleCoursePress} style={{ flex: 1, alignItems: 'center', margin: 10 }}>
        <Image source={image} style={{ width: '100%', height: 120 }} resizeMode="cover" />
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5, color:'white' }}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const handleCoursePress = (name) => {
    
    console.log('HI');
    // edit this owais <3
  };


  const insets = useSafeAreaInsets();
  const rowHeight = 150; // Adjust this to the actual height of your course rows
  const screenHeight = Dimensions.get('window').height;
  const safeAreaHeight = screenHeight - insets.top - insets.bottom;
  const contentHeight = Math.ceil(courses.length / 2) * rowHeight;
  const scrollViewHeight = Math.min(safeAreaHeight, contentHeight);
    return (

      <View style={styles.mainInterface}>
        <Text style={styles.group_heading}>
          Study Groups Chats
        </Text>
        <SafeAreaView style={{ flex: 1, paddingTop: 100, paddingBottom: 75 }}>
          <ScrollView style={{ height: scrollViewHeight }}>
            <View style={{ flex: 1, padding: 10 }}>
              {renderCourses()}
            </View>
          </ScrollView>
        </SafeAreaView>

        <View style={styles.backButton}>
           <Button 
             title="Personal Chats" 
             onPress={() => navigation.navigate("OuterChatInterface")}
             style={{backgroundColor:'navy blue'}} 
             color={"#4ec6e0"}
           />
          </View>
      </View>
    );



}


const styles = StyleSheet.create({
    
    group_heading: {
        fontFamily: FontFamily.robotoSemibold,
        top: 100,
        fontSize: FontSize.size_6xl,
        flex: 1, 
        alignSelf:"center",
        textTransform: "capitalize",
        color: Color.white,
        letterSpacing: 2,
        position: "absolute",
    },

    course_text: {
      color:'white', 
      fontSize:25, 
      fontFamily:FontFamily.robotoSemibold,
      textAlign:'center'
    },

    mainInterface: {
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

    backButton: {
      fontFamily: FontFamily.robotoSemibold,
      top: 720,
      fontSize: FontSize.size_xl,
      flex: 1, 
      alignSelf:"center",
      textTransform: "capitalize",
      color: Color.white,
      letterSpacing: 2,
      position: "absolute",
      width:"55%",
    }


})

export default OuterChatInterfaceGroups