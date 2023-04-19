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

const StudyGroups = () => {
  const [search, setSearch] = useState('');

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
  };

  const filterStudyGroups = studyGroups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Study Groups</Text>
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
  },
  heading: {
    color: '#4EC6E0',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#1C2A4E',
    color: '#4EC6E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    margin: 16,
  },
  scrollView: {
    paddingBottom: 20,
  },
  listItemContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  listItemContent: {
    flex: 1,
  },
  title: {
    color: '#4EC6E0',
    fontWeight: 'bold',
    fontSize: 18,
  },
  details: {
    color: '#000',
  },
});

export default StudyGroups;

