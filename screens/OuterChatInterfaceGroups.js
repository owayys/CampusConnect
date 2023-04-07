import { StyleSheet, Text, View, Flat, FlatList, Image} from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const OuterChatInterfaceGroups = ({data, searchInput, setSearchInput}) => {
  return (

    // <View style={{top:-165}}>
    //     <Text style={styles.group_heading}>
    //         Study Groups Chats
    //     </Text>
        
    //     {/* <Text style={styles.moenkaWalinaTypo}>
    //         coursefsfnsf
    //     </Text> */}

    //     <SafeAreaView style={{flex:1, paddingVertical:-50,}}>
    //         <FlatList data={data} renderItem={({item}) => 
    //             {
    //                 if (searchInput === ""){
    //                     return (
    //                         <Text style={styles.moenkaWalinaTypo}>
    //                             {item.course}
    //                         </Text>

    //                     )
    //                 }
    //             }}

    //         />
    //     </SafeAreaView>
    // </View>

    <Text>Hello!</Text>
  )
}


const styles = StyleSheet.create({
    
    group_heading: {
        fontFamily: FontFamily.robotoSemibold,
        top: 270,
        fontSize: FontSize.size_xl,
        flex: 1, 
        alignSelf:"center",
        textTransform: "capitalize",
        color: Color.white,
        letterSpacing: 1.5,
        position: "absolute",
    },

    course_text: {
        fontSize: FontSize.size_xs,
        top: 284,
        fontFamily: FontFamily.robotoRegular,
        textTransform: "capitalize",
        textAlign: "left",
        color: Color.white,
        letterSpacing: 1,
        position: "absolute",
        left: 368,
    },

    course_background: {

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
        left: 143,
      },

})

export default OuterChatInterfaceGroups