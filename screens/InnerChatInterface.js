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
    ScrollView,

} from "react-native";
import { useRef, useEffect } from 'react';
import socket from '../util/socket';
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const InnerChatInterface = ({ route }) => {
    const [username, setUsername] = useState('')
    const [sock, setSock] = useState(null)

    const talking_to = route.params.params.name

    const scrollViewRef = useRef(null);



    useEffect(() => {
        AsyncStorage.getItem("username").then((value) => {
            setUsername(value);
            setMsgHistory([
                { name: talking_to, message: "hi!" },
                { name: value, message: 'hello!' },
                { name: talking_to, message: "kesa haiiiiiiiiiiiiiiii" },
                { name: value, message: "busy w haazri aaj" },
                { name: value, message: "kya karun karna parta" },
                { name: value, message: "kya karun karna parta" },
                { name: value, message: "kya karun karna parta" },
                { name: value, message: "kya karun karna parta" },
                { name: value, message: "kya karun karna parta" },
                { name: value, message: "kya karun karna parta" },

                // message: hello2
            ])
            socket.emit("joinRoom", {username: value, room: route.params.params.chatroom_id})
        });

    }, [])

    socket.off("message").on("message", (rec_message) => {
        console.log("ye hai message", rec_message)
        const newMsg = {name : rec_message.user, message: rec_message.message}
        setMsgHistory([...msgHistory, newMsg])
    })


    console.log()
    console.log("Before", talking_to)
    console.log()

    const [newMessage, setNewMessage] = useState('');
    const [msgHistory, setMsgHistory] = useState([]);



    useEffect(() => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      },[msgHistory]);
  
    useEffect(() => {
        // setMsgHistory([
        //   { name: talking_to, message: 'hi!' },
        //   { name: username, message: 'hello!' },
        //   { name: talking_to, message: 'kesa haiiiiiiiiiiiiiiii' },
        //   { name: username, message: 'busy w haazri aaj' },
        //   { name: username, message: 'kya karun karna parta' },
        //   { name: username, message: 'kya karun karna parta' },
        //   { name: username, message: 'kya karun karna parta' },
        //   { name: username, message: 'kya karun karna parta' },
        //   { name: username, message: 'kya karun karna parta' },
        //   { name: username, message: 'kya karun karna parta' },
        // ]);

        // FETCH IN SET MSG HISTORY

    }, [talking_to]);

    const handleSendMessage = () => {
        console.log(newMessage)
        socket.emit("chatMessage", {user: username, message: newMessage, room: route.params.params.chatroom_id})
        setNewMessage("")
    }

    return (
        <View style={styles.container}>



            <View style={{ position: "absolute", left: 10, top: 10 }}>
                <Text style={styles.talkingTo}>{talking_to}</Text>
                <Image
                    style={styles.userImage}
                    resizeMode="cover"
                    source={require("../assets/image19.png")}
                />
            </View>


            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardContainer}
            >

                <View style={styles.chatMessages}>
                    <ScrollView ref={scrollViewRef}>
                        {msgHistory.map((data, index) => (
                            <View style={data.name === username ? styles.messageBubbleSender : styles.messageBubbleReceiver} key={index}>
                                {/* {console.log(data.name.toLowerCase(), "Talking to", talking_to.toLowerCase())} */}
                                <Text style={{ color: 'black', position: 'relative', textAlign: 'right' }}>{data.name}</Text>
                                <Text style={{ color: 'black', position: 'relative', textAlign: 'right' }}>{data.message}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <TextInput
                        style={styles.input}
                        value={newMessage}
                        onChangeText={setNewMessage}
                        placeholder="Enter your message"
                        onSubmitEditing={handleSendMessage}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSendMessage}
                    >
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({

    messageBubbleSender: {
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#ADD8F6',
        alignSelf: 'flex-end'
    },

    messageBubbleReceiver: {
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#E5E5E5',
        alignSelf: 'flex-start',
        paddingHorizontal: 50,
    },

    chatMessages: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingVertical: 70,
        top: 60,
    },

    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: Color.gray_200,
        shadowColor: "rgba(24, 48, 63, 0.5)",
        shadowRadius: 100,
        // maxWidth: '200%'
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
        left: '35%',
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
        textTransform: "capitalize",
        color: Color.white,
        letterSpacing: 1,
        position: "absolute",
        margin: 80,
        left: 90,
        top: -10,
        fontSize: 22,
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


export default InnerChatInterface