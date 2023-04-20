import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    View,
} from 'react-native';
import { ListItem, Button, Avatar } from 'react-native-elements';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudyGroups = () => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState()
    const [reload, setReload] = useState(false)
    const navigation = useNavigation();

    AsyncStorage.getItem("userid").then((value) => {
        setUser(value);
        console.log(value);
    });
    const studyGroups = [
        {
            id: 1,
            name: 'Mathematics',
            days: 'Mon, Wed, Fri',
            timing: '6:00pm - 8:00pm',
            currentMembers: 12,
            maxMembers: 20,
            displayPicture: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: 'Physics',
            days: 'Tue, Thu',
            timing: '4:00pm - 6:00pm',
            currentMembers: 8,
            maxMembers: 15,
            displayPicture: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: 'Chemistry',
            days: 'Mon, Wed, Fri',
            timing: '2:00pm - 4:00pm',
            currentMembers: 14,
            maxMembers: 20,
            displayPicture: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: 'Biology',
            days: 'Tue, Thu, Sat',
            timing: '10:00am - 12:00pm',
            currentMembers: 10,
            maxMembers: 15,
            displayPicture: "https://via.placeholder.com/150",
        },
    ];

    const [groups, setGroups] = useState([])
    const getGroups = async () => {
        if(!user) return

        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/group/getAll",
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
            if(data.groups) setGroups(data.groups)
        } catch (e) {
            console.log(e)
        }
    }
    React.useEffect(() => {
        getGroups()
    }, [reload])

    React.useEffect(() => {
        setReload((curr) => !curr)
    }, [user])

    const handleJoin = async(group_id) => {
        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/group/join",
                {
                    method: "POST",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        s_id: user,
                        group_id: group_id
                    })
                }
            );

            const data = await response.json();
            console.log(data)
            setReload((curr) => !curr)
        } catch (e) {
            console.log(e)
        }
    };

    function tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }

    const filterStudyGroups = groups.filter((group) =>
        group.group_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Study Groups</Text>
                <Button
                    title="Make New Group"
                    onPress={() => {
                        navigation.navigate('MakeStudyGroup', {
                            screen: 'MakeStudyGroup'
                        })
                    }}
                    buttonStyle={styles.newGroupButton}
                />
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Search study groups..."
                value={search}
                onChangeText={setSearch}
                placeholderTextColor="#ffff"
            />
            <ScrollView contentContainerStyle={styles.scrollView}>
                {filterStudyGroups.map((group) => (
                    <ListItem
                        key={group.group_id}
                        containerStyle={styles.listItemContainer}
                        onPress={() => handleJoin(group.group_id)}
                    >
                        <Avatar source={{ uri: group.group_icon }} size="large" />
                        <ListItem.Content style={styles.listItemContent}>
                            <ListItem.Title style={styles.title}>{group.group_name}</ListItem.Title>
                            <Text style={styles.details}>
                                {group.meet_day} | {tConvert(group.meet_time)}
                            </Text>
                            <Text style={styles.details}>
                                Members: {group.membercount}/20
                            </Text>
                        </ListItem.Content>
                        <Button title="Join" onPress={() => handleJoin(group.group_id)} />
                    </ListItem>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1936',
    },
    headingContainer: {
        alignItems: 'center',
        padding: 10,
        //marginBottom: responsiveScreenHeight(1.2),
    },
    heading: {
        color: '#4EC6E0',
        //fontSize: 24,
        fontSize: responsiveScreenFontSize(3),
        fontWeight: 'bold',
    },
    searchBar: {
        backgroundColor: '#1C2A4E',
        color: '#4EC6E0',
        //borderRadius: 8,
        borderRadius: responsiveScreenWidth(2),
        //paddingHorizontal: 16,
        paddingHorizontal: responsiveScreenWidth(4),
        //paddingVertical: 16,
        paddingVertical: responsiveScreenHeight(1.9),
        //margin: 16,
        margin: responsiveScreenWidth(4),
    },
    scrollView: {
        //paddingBottom: 20,
        paddingBottom: responsiveScreenHeight(5),
    },
    listItemContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: responsiveScreenWidth(2),
        //marginBottom: 10,
        marginBottom: responsiveScreenHeight(1.2),
        //marginHorizontal: 10,
        marginHorizontal: responsiveScreenWidth(3),
    },
    listItemContent: {
        flex: 1,
    },
    title: {
        color: '#4EC6E0',
        fontWeight: 'bold',
        fontSize: responsiveScreenFontSize(2.4),
        //fontSize:18,
    },
    details: {
        color: '#000',
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    newGroupButton: {
        backgroundColor: '#4EC6E0',
        borderRadius: responsiveScreenWidth(2),
        paddingHorizontal: responsiveScreenWidth(3),
        paddingVertical: responsiveScreenHeight(0.8),
    },
});

export default StudyGroups;

