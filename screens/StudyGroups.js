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

const StudyGroups = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const studyGroups = [
    {
      id: 1,
      name: 'Mathematics',
      days: 'Mon, Wed, Fri',
      timing: '6:00pm - 8:00pm',
      currentMembers: 12,
      maxMembers: 20,
      displayPicture:"https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: 'Physics',
      days: 'Tue, Thu',
      timing: '4:00pm - 6:00pm',
      currentMembers: 8,
      maxMembers: 15,
      displayPicture:"https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: 'Chemistry',
      days: 'Mon, Wed, Fri',
      timing: '2:00pm - 4:00pm',
      currentMembers: 14,
      maxMembers: 20,
      displayPicture:"https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: 'Biology',
      days: 'Tue, Thu, Sat',
      timing: '10:00am - 12:00pm',
      currentMembers: 10,
      maxMembers: 15,
      displayPicture:"https://via.placeholder.com/150",
    },
  ];
  

  const handleJoin = (groupId) => {
    // Handle the join action for the study group
    //navigation.navigate('JoinGroup', { groupId });
  };

  const filterStudyGroups = studyGroups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Study Groups</Text>
        <Button
          title="Make New Group"
          onPress={()=>{navigation.navigate('MakeStudyGroup', {
            screen: 'MakeStudyGroup'
        })}}
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
            key={group.id}
            containerStyle={styles.listItemContainer}
            onPress={() => handleJoin(group.id)}
          >
            <Avatar source={{ uri: group.displayPicture }} size="large" />
            <ListItem.Content style={styles.listItemContent}>
              <ListItem.Title style={styles.title}>{group.name}</ListItem.Title>
              <Text style={styles.details}>
                Days: {group.days} | Timing: {group.timing}
              </Text>
              <Text style={styles.details}>
                Members: {group.currentMembers}/{group.maxMembers}
              </Text>
            </ListItem.Content>
            <Button title="Join" onPress={() => handleJoin(group.id)} />
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

