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
    scrollViewRef
} from "react-native";
import { useEffect,useRef } from 'react';
import socket from '../util/socket';
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const InnerChatInterface = ({ route }) => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState()
    const [sock, setSock] = useState(null)

    const [newMessage, setNewMessage] = useState('');
    const [msgHistory, setMsgHistory] = useState([]);

    const talking_to = route.params.params.name

    const fetchMessages = async() => {
        console.log(route.params.params.chatroom_id)
        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/chatroom/message/get",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: route.params.params.chatroom_id
                    }),
                }
            );

            const data = await response.json();
            if (data.messages) setMsgHistory(data.messages)
            else setMsgHistory([])
        } catch (e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        fetchMessages()
    }, [talking_to])

    useEffect(() => {
        AsyncStorage.getItem("username").then((value) => {
            setUsername(value);
            socket.emit("joinRoom", {username: value, room: route.params.params.chatroom_id})
        });
        AsyncStorage.getItem("userid").then((value) => {
            setUser(value);
        });
    }, [talking_to])

    socket.off("message").on("message", (rec_message) => {
        console.log("ye hai message", rec_message)
        const newMsg = {s_name : rec_message.user, content: rec_message.message}
        setMsgHistory([...msgHistory, newMsg])
    })


    console.log()
    console.log("Before", talking_to)
    console.log()

    

    const sendMessage = async() => {
        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/chatroom/message/send",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: route.params.params.chatroom_id,
                        s_id: user,
                        content: newMessage
                    }),
                }
            );
            const data = await response.json();
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }
    const handleSendMessage = () => {
        console.log(newMessage)
        sendMessage()
        socket.emit("chatMessage", {user: username, message: newMessage, room: route.params.params.chatroom_id})
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
                            <View style={data.s_name === username ? styles.messageBubbleSender : styles.messageBubbleReceiver} key={index}>
                                {/* {console.log(data.name.toLowerCase(), "Talking to", talking_to.toLowerCase())} */}
                                <Text style={{ color: 'black', position: 'relative', textAlign: 'right' }}>{data.s_name}</Text>
                                <Text style={{ color: 'black', position: 'relative', textAlign: 'right' }}>{data.content}</Text>
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