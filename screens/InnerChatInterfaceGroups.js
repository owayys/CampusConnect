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

const InnerChatInterfaceGroups = ({route}) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Code to send message
  }

  const { course_name } = route.params

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
                height:300,
            }}>
        </View>


      <View style={{position: "absolute", left: 10, top: 10}}>
        <Text style={styles.talkingTo} >{course_name}</Text>
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
    shadowRadius:   100,
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
    left:'57.5%',
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
    color: Color.gray_200,
    letterSpacing: 1,
    position: "absolute",
    margin: 80,
    
    left: -20,
    top: -15,
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


export default InnerChatInterfaceGroups