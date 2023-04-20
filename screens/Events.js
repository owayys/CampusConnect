import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Events = ({ navigation }) => {
    const [user, setUser] = useState()
    AsyncStorage.getItem("userid").then((value) => {
        setUser(value)
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [events, setEvents] = useState([]);
    const [flag, setflag] = useState("0");
    AsyncStorage.getItem("flag").then((value) => {
        setflag(value);
        console.log("inside event", value);
    });

    const getEvents = async () => {
        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/event/getAll",
                {
                    method: "GET",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    })
                }
            );

            const data = await response.json();
            console.log(data)
            setEvents(data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getEvents()
    }, []);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getEvents()
        });

        return unsubscribe;
    }, [navigation]);

    const filteredEvents = events.filter(event =>
        event.event_name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const renderEvent = event => (
        <View key={event.event_id} style={styles.eventContainer}>
            <Image
                source={{ uri: event.banner }}
                style={styles.eventImage}
                resizeMode="cover"
            />
            <View style={styles.eventContent}>
                <Text style={styles.eventName}>{event.event_name}</Text>
                    <View style={styles.attendanceContainer}>
                        <Text style={styles.attendanceText}>{event.attendees} Going</Text>
                    </View>

                <TouchableOpacity onPress={() => navigation.navigate('EventsExtended', {
                    screen: 'EventsExtend', params: { event }
                })}>
                    <Text style={styles.detailsText}>Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.searchBar}
                onChangeText={setSearchQuery}
                value={searchQuery}
                placeholder="Search events"
                placeholderTextColor="#4EC6E0"
            />
            {
                flag == 1 && (
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => navigation.navigate('AddEvent')}
                    >
                        <Text style={styles.addButtonText}>Add Event</Text>
                    </TouchableOpacity>
                )
            }

            <Text style={styles.heading}>Events</Text>
            <ScrollView contentContainerStyle={styles.eventsList}>
                {filteredEvents.map(renderEvent)}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1936',
        padding: 15
    },
    searchBar: {
        backgroundColor: '#1C2A4E',
        color: '#4EC6E0',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginBottom: 16
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4EC6E0',
        marginLeft: 16,
        paddingVertical: 12
    },
    eventsList: {
        paddingHorizontal: 0,
    },
    eventContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    eventName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    attendanceContainer: {
        backgroundColor: '#00C853',
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        marginTop: 8,
    },
    attendanceText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    detailsText: {
        color: '#4EC6E0',
        textDecorationLine: 'underline',
        marginTop: 16,
    },
    eventContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    eventImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    eventContent: {
        flex: 1,
    },
    addButton: {
        backgroundColor: '#4EC6E0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
    },
    addButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0E1936',
    },
});

export default Events;


