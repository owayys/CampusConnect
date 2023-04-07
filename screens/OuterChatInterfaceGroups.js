import { StyleSheet, Text, View, Flat, FlatList, Image, Pressable, Button,} from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const OuterChatInterfaceGroups = ({route}) => {
  
  const { courses } = route.params; // Receiving Value
  navigation = useNavigation()
  return (

    <View style={styles.mainInterface}>
        <Text style={styles.group_heading}>
            Study Groups Chats
        </Text>
        <SafeAreaView style={{flex:1, top:150,}}>
            <FlatList data={courses} renderItem={({item}) => 
                {
                  return (
                      <View style={{marginVertical:15}}>
                        <Pressable onPress={() => console.log('HI')}>
                            <Text style={styles.course_text}>{item.course}</Text>
                            <Text style={{borderColor:"white", borderWidth:2, height:2, marginTop:25}}/>
                        </Pressable>
                      </View>

                  )
                }}

            />
        </SafeAreaView>

        <View style={styles.backButton}>
          <Button 
            title="Personal Chats" 
            onPress={() => navigation.navigate("OuterChatInterface")}
            style={{backgroundColor:'navy blue'}} 
            color={Color.gray_200}
          />
      </View>



    </View>

  )
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
      top: 700,
      fontSize: FontSize.size_xl,
      flex: 1, 
      alignSelf:"center",
      textTransform: "capitalize",
      color: Color.white,
      letterSpacing: 2,
      position: "absolute",
      width:"50%",
    }


})

export default OuterChatInterfaceGroups