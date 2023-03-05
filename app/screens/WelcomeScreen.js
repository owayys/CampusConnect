import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View 
            style = {styles.background}
        >
            <Image style= {styles.logo} source = {require("../assets/CampusConnect_Default.png")} />
            <Text>Placeholder TEXT!</Text>
            <View style = {styles.loginButton}></View>
            <View style = {styles.registerButton}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        backgroundColor : '#ECDD7B',
        justifyContent : 'flex-end',
        alignItems : 'center',
    },

    loginButton : {
        width : '100%',
        height : 70,
        backgroundColor : 'lightblue',
    },

    logo : {
        width : 200, 
        height : 200,
        position : 'absolute',
        top : 50,
    },
    
    registerButton : {
        width : '100%',
        height : 70,
        backgroundColor : 'dodgerblue',
    },
})

export default WelcomeScreen;


