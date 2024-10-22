import { StyleSheet, Text, View, Flat, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const SearchFilter = ({ data, searchInput, setSearchInput }) => {
    const navigation = useNavigation()

    return (
        <View style={{ marginTop: 150, justifyContent: "center", flex: 1 }}>

            <SafeAreaView style={{ flex: 1, paddingVertical: -50, }}>
                <FlatList data={data} renderItem={({ item }) => {

                    /*
                    ! Pending:
                        ~ Navigate to chat based on chat clicked to InnerChatInterface
                        ~ Send username of person you're talking to 
                        ~ Load chats independent of navigation?
                    */

                    if (searchInput === "") {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('InnerChatInterface', {
                                params: item,
                            })}>
                                <View style={{ margin: 30 }}>
                                    <Text style={styles.last_message}>
                                        {item.content === null ? "No Messages yet!" : item.content}
                                    </Text>

                                    <Image
                                        style={styles.image_icon}
                                        resizeMode="cover"
                                        source={require("../assets/image18.png")}
                                    />

                                    <Text style={styles.time}>{item.sent}</Text>

                                    <Text style={styles.person_position}>
                                        {item.s_name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }

                    if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('InnerChatInterface', {
                                params: { name: item },
                            })}>
                                <View style={{ margin: 30 }}>
                                    <Text style={styles.last_message}>
                                        {item.content}
                                    </Text>

                                    <Image
                                        style={styles.image_icon}
                                        resizeMode="cover"
                                        source={require("../assets/image18.png")}
                                    />

                                    <Text style={styles.time}>{item.sent}</Text>

                                    <Text style={styles.person_position}>
                                        {item.s_name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }

                }}

                />
            </SafeAreaView>


        </View>
    )
}

const styles = StyleSheet.create({

    last_message: {
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

    image_icon: {
        top: -19,
        height: 92,
        width: 92,
        left: -20,
        borderRadius: Border.br_11xl,
        position: "absolute",
    },

    time: {
        left: 280,
        textAlign: "right",
        top: 0,
        fontFamily: FontFamily.robotoRegular,
        textTransform: "capitalize",
        fontSize: FontSize.size_mini,
        color: Color.white,
        letterSpacing: 1,
        position: "absolute",
    },

    person_position: {
        color: Color.white,
        left: 60,
        textAlign: "left",
    },

})

export default SearchFilter