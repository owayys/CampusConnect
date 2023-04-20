

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
  const [requests, setRequests] = useState([
    { id: '1', name: 'Asher Javaid', image: 'https://loremflickr.com/320/240' },
    { id: '2', name: 'Jaffer Iqbal', image: 'https://loremflickr.com/320/240' },
    { id: '3', name: 'My name is a big ass name it is too long', image: 'https://loremflickr.com/320/240' },
    { id: '4', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '5', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '6', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '7', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '8', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '9', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '10', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '11', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '12', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
    { id: '13', name: 'Pulpy', image: 'https://loremflickr.com/320/240' },
  ]);

  const handleAccept = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
     //add changes to db
  };

  const handleReject = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
    //add changes to db
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Friend Requests</Text>
      <View style={{height:responsiveScreenHeight(77),top:responsiveScreenHeight(0)}}>
        <ScrollView >
          {requests.map((item) => (
            <JoinRequest
              key={item.id}
              name={item.name}
              image={item.image}
              onAccept={() => handleAccept(item.id)}
              onReject={() => handleReject(item.id)}
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

