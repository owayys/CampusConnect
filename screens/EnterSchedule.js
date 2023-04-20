import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
const COURSES = [
  { id: 'csc101', name: 'Introduction to Computer Science' },
  { id: 'mat101', name: 'Calculus I' },
  { id: 'eng101', name: 'English Composition I' },
];

const EnterSchedule = () => {
  const [classes, setClasses] = useState([{ courseId: '' }]);
  const [dropdownVals, setDropdownVals] = useState(["Select a course..."]);

  const handleClassChange = (index, value) => {
    const newClasses = [...classes];
    newClasses[index].courseId = value;
    setClasses(newClasses);
  };

  const handleAddClass = () => {
    setClasses([...classes, { courseId: '' }]);
    setDropdownVals([...dropdownVals,"Select a course..."])
  };

  const handleRemoveClass = (index) => {
    const newClasses = [...classes];
    newClasses.splice(index, 1);
    setClasses(newClasses);
  };

  const renderClasses = () => {
    return classes.map((c, i) => (
      <View key={i} style={styles.classContainer}>
        <Text style={styles.classText}>Class {i + 1}:</Text>
        <View style={styles.pickerContainer}>
          <SearchableDropdown
            onTextChange={(text) => console.log(text)}
            onItemSelect={(item) => {
              dropdownVals[i]=item.name
              handleClassChange(i, item.id)
            console.log(dropdownVals[i])}}
            containerStyle={{ padding: 5 }}
            textInputStyle={{ padding: 12, borderWidth: 1, borderColor: '#4EC6E0', borderRadius: 4 }}
            itemStyle={{ padding: 10, marginTop: 2, backgroundColor: '#FFF', borderColor: '#4EC6E0', borderWidth: 1, borderRadius: 5 }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={COURSES}
            placeholder={dropdownVals[i]}
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View>
        {classes.length > 1 && (
          <TouchableOpacity onPress={() => handleRemoveClass(i)}>
            <Icon name="close-circle-outline" size={24} color="#FF0000" />
          </TouchableOpacity>
        )}
      </View>
    ));
  };

  const handleSubmit = () => {
    console.log(classes);
    //send to backend
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Enter your schedule:</Text>
        {renderClasses()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddClass}>
            <Text style={styles.addButtonText}>Add Class</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit Schedule</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0E1936',
  },
    header: {
    color: '#4EC6E0',
    fontSize: 24,
    marginBottom: 60,
    top:40
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  classContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  classText: {
    color: '#4EC6E0',
    fontSize: 16,
    marginRight: 10,
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4EC6E0',
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4EC6E0',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  pickerItem: {
    color: '#FFF',
  },
  addButton: {
    backgroundColor: '#4EC6E0',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#008CBA',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};


export default EnterSchedule;



