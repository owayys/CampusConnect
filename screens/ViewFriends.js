

import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView,
    Dimensions,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewAFriend = ({ name, image }) => {
    return (
        <View style={styles.requestContainer}>
            <Text style={styles.requestText}>{name.length > 28 ? name.substring(0, 28) + '...' : name}</Text>
            <Image source={{ uri: image }} style={styles.profileImage} />
        </View>
    );
};


const ViewFriends = () => {
    const [friends, setFriends] = useState([])
    const [user, setUser] = useState();

    AsyncStorage.getItem("userid").then((value) => {
        setUser(value);
        console.log(value);
    });

    const getFriends = async () => {
        if (!user) return

        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/friend/get",
                {
                    method: "POST",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        s_id: user
                    })
                }
            );

            const data = await response.json();
            console.log(data)
            if (data.friends) setFriends(data.friends)
            else setFriends([])
            
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        getFriends()
    }, [user])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>My Friends</Text>
            <View style={{ height: responsiveScreenHeight(77), top: responsiveScreenHeight(0) }}>
                <ScrollView >
                    {friends.map((item) => (
                        <ViewAFriend
                            key={item.s_id}
                            name={item.s_name}
                            image={item.icon}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1936',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4EC6E0',
        textAlign: 'center',
        paddingVertical: 20,
    },
    requestContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    requestText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    acceptButton: {
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    rejectButton: {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
});

export default ViewFriends;

