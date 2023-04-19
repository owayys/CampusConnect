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
import { useEffect } from 'react';
import io from 'socket.io-client';
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const InnerChatInterface = ({route}) => {
  const [message, setMessage] = useState('');
  const [msgHistory, setMsgHistory] = useState(
  [
    {name : "shehryar khan", message : "hi!"},
    {name : "jufe" , message : 'hello!'},
    {name : "shehryar khan" , message : "kesa haiiiiiiiiiiiiiiii"},
    {name : "jufe" , message : "busy w haazri aaj"},
    {name : "jufe" , message : "kya karun karna parta"},
    {name : "jufe" , message : "kya karun karna parta"},
    {name : "jufe" , message : "kya karun karna parta"},
    {name : "jufe" , message : "kya karun karna parta"},
    {name : "jufe" , message : "kya karun karna parta"},
    {name : "jufe" , message : "kya karun karna parta"},
  ]);


  // useEffect(() => {
  //   socket.on('chat message', (data) => {
  //     setMsgHistory((msgHistory) => [...msgHistory, data]);
  //   });
  // }, []);


  const handleSendMessage = () => {
    console.log(message)
    setMessage('')
  }

  const talking_to = route.params.params.name


  return (
    <View style={styles.container}>



      <View style={{position: "absolute", left: 10, top: 10}}>
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
          <ScrollView>
            {msgHistory.map((data, index) => (
              data.name.toLowerCase() === talking_to.toLowerCase()
              ? 
                <View style={styles.messageBubbleSender} key={index}>
                  {console.log(data.name.toLowerCase(), talking_to.toLowerCase())}
                  <Text style={{color: 'black', position:'relative', textAlign: 'right'}}>{data.name}</Text>
                  <Text style={{color: 'black', position: 'relative', textAlign: 'right'}}>{data.message}</Text>
                </View>

              : 
                <View style={styles.messageBubbleReceiver} key={index}>
                  {console.log(data.name.toLowerCase(), talking_to.toLowerCase())}
                  <Text style={{color: 'black', position:'relative', textAlign: 'left'}}>{data.name}</Text>
                  <Text style={{color: 'black', position: 'relative', textAlign: 'left'}}>{data.message}</Text>
                </View>
            ))}
          </ScrollView>
        </View>
        <View style={{alignItems: 'center',justifyContent: 'center',}}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
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
    shadowRadius:   100,
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
    left:'35%',
    width: 60,
    height:35,
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