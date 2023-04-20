import React from 'react'
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
    TouchableHighlight,
    KeyboardAvoidingView,

} from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const InnerChatInterfaceGroups = ({ route }) => {
    const [message, setMessage] = useState('');


    //   useEffect(() => {
    //     AsyncStorage.getItem("username").then((value) => {
    //         setUsername(value);
    //         setMsgHistory([
    //             { name: talking_to, message: "hi!" },
    //             { name: value, message: 'hello!' },
    //             { name: talking_to, message: "kesa haiiiiiiiiiiiiiiii" },
    //             { name: value, message: "busy w haazri aaj" },
    //             { name: value, message: "kya karun karna parta" },
    //             { name: value, message: "kya karun karna parta" },
    //             { name: value, message: "kya karun karna parta" },
    //             { name: value, message: "kya karun karna parta" },
    //             { name: value, message: "kya karun karna parta" },
    //             { name: value, message: "kya karun karna parta" },

    //             // message: hello2
    //         ])
    //         socket.emit("joinRoom", {username: value, room: route.params.params.chatroom_id})
    //     });

    // }, [])

    // socket.off("message").on("message", (rec_message) => {
    //     console.log("ye hai message", rec_message)
    //     const newMsg = {name : rec_message.user, message: rec_message.message}
    //     setMsgHistory([...msgHistory, newMsg])
    // })


    // console.log()
    // console.log("Before", talking_to)
    // console.log()

    // const [newMessage, setNewMessage] = useState('');
    // const [msgHistory, setMsgHistory] = useState([]);


    // useEffect(() => {
    //     // setMsgHistory([
    //     //   { name: talking_to, message: 'hi!' },
    //     //   { name: username, message: 'hello!' },
    //     //   { name: talking_to, message: 'kesa haiiiiiiiiiiiiiiii' },
    //     //   { name: username, message: 'busy w haazri aaj' },
    //     //   { name: username, message: 'kya karun karna parta' },
    //     //   { name: username, message: 'kya karun karna parta' },
    //     //   { name: username, message: 'kya karun karna parta' },
    //     //   { name: username, message: 'kya karun karna parta' },
    //     //   { name: username, message: 'kya karun karna parta' },
    //     //   { name: username, message: 'kya karun karna parta' },
    //     // ]);

    //     // FETCH IN SET MSG HISTORY

    // }, [talking_to]);

    // const handleSendMessage = () => {
    //     console.log(newMessage)
    //     socket.emit("chatMessage", {user: username, message: newMessage, room: route.params.params.chatroom_id})
    // }
















    const handleSendMessage = () => {
        // Code to send message
    }
    console.log(route.params.params.group_name)


    return (




        <View style={styles.container}>

            <View style={{
                backgroundColor: '#ADD8F6',
                borderRadius: 10,
                padding: 20,
                margin: 20,
                position: 'absolute',
                top: -190,
                width: '90%',
                height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={styles.talkingTo}>{route.params.params.group_name.toUpperCase()}</Text>
            </View>







            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardContainer}
            >
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Enter your message"
                // onSubmitEditing={handleSendMessage}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSendMessage}
                >
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.gray_200,
        shadowColor: "rgba(24, 48, 63, 0.5)",
        shadowRadius: 100,
    },
    keyboardContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        right: '12.5%',
    },
    button: {
        backgroundColor: '#ADD8F6',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        left: '57.5%',
        width: 60,
        height: 35,
        bottom: 38,
    },
    buttonText: {
        color: '#00000F',
        fontWeight: 'bold',
    },

    talkingTo: {
        fontFamily: FontFamily.robotoSemibold,
        color: Color.gray_200,
        letterSpacing: 1,
        fontSize: 40,
        textAlign: 'center',
        position: 'absolute',
        bottom: '20%',
        left: 0,
        right: 0,
    },

    userImage: {
        top: 45,
        left: 18,
        width: 110,
        height: 95,
        borderRadius: Border.br_11xl,
        position: "absolute",
    },

});


export default InnerChatInterfaceGroups