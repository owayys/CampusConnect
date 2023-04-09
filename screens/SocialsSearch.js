import { StyleSheet, Text, View, Flat, FlatList, Image, Button, Alert} from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";


const SocialsSearch = ({data, searchInput, setSearchInput}) => {
  
    const onAddFriend = () => {
        return Alert("Friend Add karna hai?");
    }
  
    return (
            
        <View style={{marginTop:0, justifyContent:"center", flex: 1}}>
            <SafeAreaView style={{flex:1, paddingVertical:-50}}>
                <FlatList data={data} renderItem={({item}) =>
                {    
                    if (searchInput === ""){

                        return(

                            <View style={{marginTop: 110}}>
                                <View   style={styles.addFriendButton}>
                                    <Button
                                        title="Add Friend"   
                                        // style={styles.addFriendButton} 
                                        color={"#4ec6e0"}
                                        onPress={onAddFriend}  
                                    />
                                </View>

                                <View style={{top:365}}>
                                    <Text style={styles.nameContainer}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.interestsContainer}>
                                        {item.interests[0]}, {item.interests[1]}
                                    </Text>
                                
                                    <Image
                                        style={styles.imageIcon1}
                                        resizeMode="cover"
                                        source={require("../assets/image22.png")}
                                    />
                                </View>
                            </View>
                        )
                    }


                    if (item.name.toLowerCase().includes(searchInput.toLowerCase())){

                        return(

                            <View style={{marginTop: 110}}>
                                <View   style={styles.addFriendButton}>
                                    <Button
                                        title="Add Friend"   
                                        // style={styles.addFriendButton} 
                                        color={"#4ec6e0"}     
                                    />
                                </View>

                                <View style={{top:365}}>
                                    <Text style={styles.nameContainer}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.interestsContainer}>
                                        {item.interests[0]}, {item.interests[1]}
                                    </Text>
                                
                                    <Image
                                        style={styles.imageIcon1}
                                        resizeMode="cover"
                                        source={require("../assets/image22.png")}
                                    />
                                </View>
                            </View>
                        )
                    }
                }}
                />

            </SafeAreaView>
        </View>

        
    )
}


const styles = StyleSheet.create({

    addFriendButton: {
        fontFamily: FontFamily.robotoSemibold,
        top: 125,
        right: 25,
        fontSize: FontSize.size_xl,
        alignSelf:"center",
        textTransform: "capitalize",
        color: Color.white,
        letterSpacing: 2,
        position: "absolute",
        width:"27%",
        zIndex:1
    },

    imageIcon1: {
        bottom:195,
        left: 20,
        width: 65,
        height: 65,
        borderRadius: Border.br_11xl,
        position: "absolute",
    },

    nameContainer: {

        fontFamily: FontFamily.robotoSemibold,
        fontSize: FontSize.size_xl,
        textTransform: "capitalize",
        color: Color.white,
        position: "absolute",
        bottom:230,
        left:105,
        
    },

    interestsContainer: {

        fontFamily: FontFamily.robotoLight,
        fontSize: FontSize.size_mid,
        textTransform: "capitalize",
        color: Color.white,
        position: "absolute",
        bottom:195,
        left:105,
        
    }

})

export default SocialsSearch