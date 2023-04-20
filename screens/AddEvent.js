// import * as React from "react";
// import {
//   Text,
//   StyleSheet,
//   Image,
//   Pressable,
//   TextInput,
//   View,
//   TouchableOpacity,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

// const AddEvent = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.addEvent}>
//       <Text style={styles.addEvent1}>Add Event</Text>
//       <Image
//         style={styles.rectangleIcon}
//         resizeMode="cover"
//         source={require("../assets/rectangle3.png")}
//       />
//       <Text style={[styles.addCoverPhoto, styles.publishEventFlexBox]}>
//         + Add Cover Photo for Event
//       </Text>
//       <TextInput
//         style={styles.rectangle}
//         placeholder="..."
//         keyboardType="default"
//       />
//       <TextInput
//         style={[
//           styles.rectangle1,
//           styles.rectangleLayout,
//           styles.rectangleLayout1,
//         ]}
//         placeholder="..."
//         keyboardType="default"
//       />
//       <Text style={[styles.addDescription, styles.timeTypo]}>
//         Add description:
//       </Text>
//       <Text style={[styles.startTime, styles.timeTypo]}>Start Time:</Text>
//       <TextInput
//         style={[
//           styles.rectangle2,
//           styles.rectangleLayout,
//           styles.rectangleLayout1,
//         ]}
//         placeholder="..."
//         keyboardType="default"
//       />
//       <Text style={[styles.endTime, styles.timeTypo]}>End Time:</Text>
//       <TextInput
//         style={[styles.rectangle3, styles.rectangleLayout]}
//         placeholder="..."
//         keyboardType="default"
//       />
//       <Text style={[styles.venue, styles.timeTypo]}>Venue:</Text>
//       <TouchableOpacity
//         style={[styles.group, styles.groupLayout]}
//         activeOpacity={0.2}
//         onPress={() => navigation.navigate("Events")}
//       >
//         <View
//           style={[
//             styles.rectangle395,
//             styles.rectangle395Position,
//             styles.groupLayout,
//           ]}
//         />
//         <Text
//           style={[
//             styles.publishEvent,
//             styles.rectangle395Position,
//             styles.publishEventFlexBox,
//           ]}
//         >
//           Publish Event
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   publishEventFlexBox: {
//     alignItems: "flex-end",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     letterSpacing: 1,
//   },
//   rectangleLayout: {
//     height: 29,
//     left: 56,
//     backgroundColor: Color.gray_500,
//     borderRadius: Border.br_3xs,
//     position: "absolute",
//   },
//   rectangleLayout1: {
//     width: 100,
//     height: 29,
//     left: 56,
//   },
//   timeTypo: {
//     left: "15.85%",
//     alignItems: "flex-end",
//     display: "flex",
//     textAlign: "left",
//     color: Color.gray_400,
//     fontFamily: FontFamily.robotoRegular,
//     fontSize: FontSize.size_sm,
//     width: "64.39%",
//     height: "2.15%",
//     letterSpacing: 1,
//     position: "absolute",
//   },
//   groupLayout: {
//     height: 40,
//     width: 186,
//   },
//   rectangle395Position: {
//     left: 0,
//     position: "absolute",
//   },
//   addEvent1: {
//     top: 74,
//     left: 33,
//     fontSize: FontSize.size_3xl,
//     textTransform: "capitalize",
//     fontWeight: "500",
//     fontFamily: FontFamily.robotoMedium,
//     color: Color.skyblue_100,
//     textAlign: "center",
//     letterSpacing: 1,
//     position: "absolute",
//   },
//   rectangleIcon: {
//     top: 126,
//     height: 150,
//     width: 296,
//     left: 57,
//     borderRadius: Border.br_3xs,
//     position: "absolute",
//   },
//   addCoverPhoto: {
//     top: "22.91%",
//     left: "26.1%",
//     textAlign: "left",
//     color: Color.gray_400,
//     fontSize: FontSize.size_sm,
//     width: "64.39%",
//     height: "2.15%",
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     position: "absolute",
//   },
//   rectangle: {
//     top: 347,
//     height: 79,
//     backgroundColor: Color.gray_500,
//     width: 296,
//     borderRadius: Border.br_3xs,
//     left: 57,
//     position: "absolute",
//   },
//   rectangle1: {
//     top: 469,
//   },
//   addDescription: {
//     top: "36.4%",
//   },
//   startTime: {
//     top: "52.74%",
//   },
//   rectangle2: {
//     top: 539,
//   },
//   endTime: {
//     top: "61.1%",
//   },
//   rectangle3: {
//     top: 616,
//     width: 297,
//     height: 29,
//     left: 56,
//   },
//   venue: {
//     top: "70.29%",
//   },
//   rectangle395: {
//     top: 0,
//     backgroundColor: Color.deepskyblue,
//     borderStyle: "solid",
//     borderColor: "#03a9f1",
//     borderWidth: 1,
//     left: 0,
//     borderRadius: Border.br_3xs,
//     height: 40,
//     width: 186,
//   },
//   publishEvent: {
//     top: 11,
//     fontSize: FontSize.size_mini,
//     color: Color.white,
//     textAlign: "right",
//     width: 146,
//     display: "flex",
//     fontFamily: FontFamily.robotoRegular,
//     left: 0,
//   },
//   group: {
//     top: 708,
//     left: 112,
//     height: 40,
//     width: 186,
//     position: "absolute",
//   },
//   addEvent: {
//     backgroundColor: Color.gray_200,
//     shadowColor: "rgba(24, 48, 63, 0.5)",
//     shadowOffset: {
//       width: 40,
//       height: 40,
//     },
//     shadowRadius: 100,
//     elevation: 100,
//     shadowOpacity: 1,
//     flex: 1,
//     width: "100%",
//     height: 838,
//     overflow: "hidden",
//   },
// });

// export default AddEvent;

import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Pressable,
    Platform
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import { withTheme } from 'react-native-elements';

const AddEvent = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false)
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [timing, setTiming] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [imageSource, setImageSource] = useState(null);
    const [imageURL, setImageURL] = useState('')
    const navigation = useNavigation();

    const [filled, setFilled] = useState(name && date && location && description && imageURL && timing)

    React.useEffect(() => {
        setFilled(name && date && location && description && imageURL && timing)
    }, [name, date, location, description, imageURL, timing])

    const selectImage = async () => {
        if (imageURL) return

        console.log('image')
        setImageURL('')

        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        // console.log(result)
        if (!result.canceled) {
            setImageSource(result.assets[0].uri)

            let imageFile = {
                uri: result.assets[0].uri,
                type: `${String(result.assets[0].uri.split('/').slice(-1)).split('.')[0]}/${result.assets[0].uri.split('.').slice(-1)}`,
                name: `${result.assets[0].uri.split('/').slice(-1)}`
            }

            handleUpload(imageFile)
        }
    };

    const handleUpload = (image) => {
        const bannerData = new FormData()
        bannerData.append('file', image)
        bannerData.append('upload_preset', 'CampusConnect')
        bannerData.append('cloud_name', 'owaysCloud')

        fetch('https://api.cloudinary.com/v1_1/owaysCloud/image/upload', {
            method: 'POST',
            body: bannerData,
        })
            .then((res) => res.json())
            .then((data) => setImageURL(data.url))
    }

    const togglePicker = () => {
        setShowPicker(!showPicker)
    }

    const onDateChange = ({ type }, selectedDate) => {
        if (type === 'set') {
            const currentDate = selectedDate
            console.log(currentDate)
            setDate(currentDate)
            setShowPicker(false)
        } else {
            togglePicker
        }
    }

    const confirmIOSdate = () => {
        setDate(date)
        togglePicker
    }

    const onTimeChange = ({ type }, selectedTime) => {
        if (type === 'set') {
            const currentTime = selectedTime
            console.log(currentTime)
            setTiming(currentTime)
            setShowTimePicker(false)
        } else {
            setShowTimePicker(!showTimePicker)
        }
    }

    const confirmIOStime = () => {
        setTiming(timing)
        setShowTimePicker(false)
    }

    const handleSubmit = async () => {
        if (!filled) return

        try {
            console.log(imageURL)
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/event/create",
                {
                    method: "POST",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        soc_id: 'soc_id',
                        event_name: name,
                        event_date: date.toISOString().split('T')[0],
                        event_time: timing.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }),
                        location: location,
                        banner: imageURL,
                        info: description
                    }),
                }
            );

            const data = await response.json();
            console.log(data)
            navigation.navigate('Events', {
                screen: 'Events'
            })
        } catch (e) {
            console.log(e)
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.heading}>Add Event</Text>
                <TouchableOpacity style={styles.selectImageButton} onPress={selectImage}>
                    <Text style={styles.selectImageButtonText}>{imageURL ? `Uploaded` : `Select Image from Gallery`}</Text>
                </TouchableOpacity>
                {imageSource && (
                    <Image
                        source={{ uri: imageSource }}
                        style={styles.selectedImage}
                        resizeMode="cover"
                    />
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Event Name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
                {/* <TextInput
          style={styles.input}
          placeholder="Image URL"
          value={image}
          onChangeText={setImage}
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        /> */}
                {showPicker && <DateTimePicker
                    value={date}
                    mode='date'
                    display='spinner'
                    onChange={onDateChange}
                    style={styles.datetimePicker}
                />}

                {showPicker && Platform.OS === 'ios' &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={[styles.submitButton, styles.pickerButton]} onPress={togglePicker}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.submitButton, styles.pickerButton]} onPress={confirmIOSdate}>
                            <Text>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                }


                <Pressable onPress={togglePicker}>
                    <TextInput
                        style={styles.input}
                        placeholder="Date"
                        value={date.toDateString()}
                        onChangeText={setDate}
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        editable={false}
                        onPressIn={togglePicker}
                    />
                </Pressable>
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    value={location}
                    onChangeText={setLocation}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />

                {showTimePicker && <DateTimePicker
                    value={date}
                    mode='time'
                    display='spinner'
                    onChange={onTimeChange}
                    style={styles.datetimePicker}
                />}

                {showTimePicker && Platform.OS === 'ios' &&
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={[styles.submitButton, styles.pickerButton]} onPress={setShowTimePicker(false)}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.submitButton, styles.pickerButton]} onPress={confirmIOStime}>
                            <Text>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                }

                <Pressable onPress={() => setShowTimePicker(true)}>
                    <TextInput
                        style={styles.input}
                        placeholder="Timing"
                        value={timing.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                        onChangeText={setTiming}
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        editable={false}
                        onPressIn={() => setShowTimePicker(true)}
                    />
                </Pressable>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={filled ? styles.submitButtonText : [styles.submitButtonText, { opacity: 0.3 }]}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1936',
    },
    content: {
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4EC6E0',
        marginBottom: 16,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: '#4EC6E0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0E1936',
    },
    selectImageButton: {
        backgroundColor: '#4EC6E0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 16,
    },
    selectImageButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0E1936',
    },
    selectedImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    datetimePicker: {
        color: 'white',
        height: 120,
        margin: -10
    },
    pickerButton: {
        paddingHorizontal: 20
    }
});

export default AddEvent;


