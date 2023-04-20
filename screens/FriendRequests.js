

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

const JoinRequest = ({ name, onAccept, onReject, image }) => {
    return (
        <View style={styles.requestContainer}>
            <Image source={{ uri: image }} style={styles.profileImage} />
            <Text style={styles.requestText}>{name.length > 20 ? name.substring(0, 20) + '...' : name}</Text>
            <TouchableOpacity onPress={onAccept}>
                <View style={styles.acceptButton}>
                    <Icon name="checkmark" size={20} color="green" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onReject}>
                <View style={styles.rejectButton}>
                    <Icon name="close" size={20} color="red" />
                </View>
            </TouchableOpacity>
        </View>
    );
};


const FriendRequests = () => {

    const [requests, setRequests] = useState([])
    const [reload, setReload] = useState(false)
    const [user, setUser] = useState();

    AsyncStorage.getItem("userid").then((value) => {
        setUser(value);
        console.log(value);
    });

    const getRequests = async () => {
        if (!user) return

        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/friend/request/get",
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
            if (data.requests) setRequests(data.requests)
            else setRequests([])
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        getRequests()
    }, [user, reload])

    const handleAccept = async (s1_id) => {
        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/friend/request/accept",
                {
                    method: "POST",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        s1_id: s1_id,
                        s2_id: user
                    })
                }
            );

            const data = await response.json();
            console.log(data)
            setReload(curr => !curr)
        } catch (e) {
            console.log(e)
        }
    };

    const handleReject = async (s1_id) => {
        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/friend/request/reject",
                {
                    method: "POST",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        s1_id: s1_id,
                        s2_id: user
                    })
                }
            );

            const data = await response.json();
            console.log(data)
            setReload(curr => !curr)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Friend Requests</Text>
            <View style={{ height: responsiveScreenHeight(77), top: responsiveScreenHeight(0) }}>
                <ScrollView >
                    {requests.map((item) => (
                        <JoinRequest
                            key={item.s_id}
                            name={item.s_name}
                            image={item.icon}
                            onAccept={() => handleAccept(item.s_id)}
                            onReject={() => handleReject(item.s_id)}
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

export default FriendRequests;

