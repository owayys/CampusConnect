import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const Events= ({navigation}) => {
  const exampleEvents = [
    {
      id: 1,
      name: 'Basketball Championship',
      date: '2023-05-18',
      location: 'Sports Complex',
      description: 'Basketball',
      attendees: 12,
      image:"https://via.placeholder.com/150",
      time:"3:00PM-5:00PM"
    },
    {
      id: 2,
      name: 'Career Fair',
      date: '2023-06-10',
      location: 'SDSB',
      description: 'Career Fairr',
      attendees:11,
      image:"https://via.placeholder.com/150",
      time:"3:00PM-5:00PM"
    },
    {
      id: 3,
      name: 'Khokha Stalls',
      date: '2023-07-05',
      location: 'Khokha',
      description: 'Come to Event',
      attendees: 10,
      image:"https://via.placeholder.com/150" ,
      time:"3:00PM-5:00PM",
    },
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState(exampleEvents);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderEvent = event => (
    <View key={event.id} style={styles.eventContainer}>
      <Image
        source={{uri: event.image}}
        style={styles.eventImage}
        resizeMode="cover"
      />
      <View style={styles.eventContent}>
        <Text style={styles.eventName}>{event.name}</Text>
        <View style={styles.attendanceContainer}>
          <Text style={styles.attendanceText}>{event.attendees} Going</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EventsExtended', {
          screen: 'EventsExtend', params: {event}})}>
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
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEvent')}
        >
        <Text style={styles.addButtonText}>Add Event</Text>
      </TouchableOpacity>
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
  },
  searchBar: {
    backgroundColor: '#1C2A4E',
    color: '#4EC6E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    margin: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4EC6E0',
    marginLeft: 16,
  },
  eventsList: {
    paddingHorizontal: 16,
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
    marginBottom: 16,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0E1936',
  },
});

export default Events;


