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
import AsyncStorage from '@react-native-async-storage/async-storage';

const OuterChatInterface = () => {
    const [data, setData] = useState({})
    /* Temporary Dictionary for Search Filter Testing*/

    const temp_dict = [

        {
            chatroom_id: 1,
            name: "Shehryar Khan",
            icon: "icon1",
            content: "Heyyy",
        },
        {
            chatroom_id: 2,
            name: "Asher",
            icon: "icon2",
            content: "Wow",
        },
        {
            chatroom_id: 3,
            name: "Luqman",
            icon: "icon3",
            content: "!gsb",
        },
        {
            chatroom_id: 4,
            name: "owais",
            icon: "icon4",
            content: "asdadadaw",
        },
        {
            chatroom_id: 5,
            name: "jufe-pulpy",
            icon: "icon5",
            content: "adadadadadadadadad",
        },
        {
            chatroom_id: 6,
            name: "jaid",
            icon: "icon6",
            content: "adadadadadadadadad",
        },
        {
            chatroom_id: 7,
            name: "jufe-pulpy",
            icon: "icon7",
            content: "adadadadadadadadad",
        },


    ]

    const courses = [
        {
            course: "ML",
            course_code: "532"
        },
        {
            course: "AP",
            course_code: "300"
        },
        {
            course: "SE",
            course_code: "310"
        },
        {
            course: "NetSec",
            course_code: "472"
        },
    ]

    //   const response = await fetch(
    //     "https://campusconnect.herokuapp.com/api/auth/login",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({
    //         email: username,
    //         password: password,
    //         soc_flag: 0,
    //       }),
    //     }
    //   );
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('userid')
            if (value !== null) {
                console.log(value)
                s_id = parseInt(value)
                const response = await fetch(
                    "https://campusconnect.herokuapp.com/api/chatroom/get",
                    {
                        method: "POST",
                        headers: new Headers({
                            accept: 'application/json',
                            'Content-Type': 'application/json'
                        }),
                        body: JSON.stringify({
                            s_id: s_id,
                            isStudyGroup: 0,
                        }),
                    }
                );

                const data = await response.json();
                console.log(data)
                setData(data.chatrooms)
            }
        } catch (e) {
            console.log(e)
        }
    }
    React.useEffect(() => {
        getData()
    }, [])
    /* Dictionary ends here */


    const navigation = useNavigation();

    const [searchInput, setSearchInput] = useState('') // for search bar input

    return (

        <View style={styles.outerChatInterface}>



            <View style={styles.searchBar}>

                <TextInput style={{ top: 5 }}
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
                    <Image style={styles.searchButton} source={require("../assets/group5.png")} />
                </TouchableOpacity>

            </View>

            <SearchFilter data={data} searchInput={searchInput} setSearchInput={setSearchInput} />

            <View style={styles.GroupChatsButton}>
                <Button
                    title="Group Study Chats"
                    onPress={() => navigation.navigate("OuterChatInterfaceGroups", { courses: courses })}
                    // onPress={() => navigation.navigate("InnerChatInterface", { current_user : "Ahmed Luqman"})}
                    style={{ backgroundColor: 'navy blue' }}
                    color={"#4ec6e0"}
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

    searchBar: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.darkslategray_200,
        width: 340,
        height: 40,
        left: 28,
        top: 90,
        marginTop: 50,
        color: "white",
        paddingLeft: 10

    },

    searchButton: {
        left: "80%",
        marginTop: "-12%",
        top: 5,
        width: 50,
        height: 50,
        resizeMode: 'contain',

    },

    GroupChatsButton: {
        fontFamily: FontFamily.robotoSemibold,
        top: 205,
        fontSize: FontSize.size_xl,
        flex: 1,
        alignSelf: "center",
        textTransform: "capitalize",
        color: Color.white,
        letterSpacing: 2,
        position: "absolute",
        width: "55%",
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
        margin: 80,
        left: 50,
        top: -10,
        fontSize: FontSize.size_6xl
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
