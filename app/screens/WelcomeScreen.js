import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View 
            style = {styles.background}
        >
            <Image style = {styles.logo} source = {require("../assets/CampusConnect_Default.png")} />
            <Text style = {styles.welcomeText}>Placeholder TEXT!</Text>
            <View style = {styles.loginButton}>
                <Text>Login</Text>
            </View>
            <View style = {styles.registerButton}>
                <Text>Register</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        backgroundColor : '#ECDD7B',
        justifyContent : 'center',
        alignItems : 'center',
    },

    loginButton : {
        width : '80%',
        height : 70,
        position : 'absolute',
        top : 600,
        borderRadius : 15,
        backgroundColor : 'lightblue',
    },

    logo : {
        width : 300, 
        height : 200,
        position : 'absolute',
        top : 50,
    },
    
    registerButton : {
        width : '80%',
        height : 70,
        position : 'absolute',
        top : 700,
        borderRadius : 15,
        backgroundColor : 'dodgerblue',
        
    },

    welcomeText : {
        position : 'absolute',
        top : 400
    }

})

export default WelcomeScreen;


