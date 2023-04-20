import * as React from "react";
import {
    Image,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Button,
    Platform,
    SafeAreaView,
    ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import DateTimePicker from '@react-native-community/datetimepicker'
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from "@react-native-async-storage/async-storage";


const MakeStudyGroup = () => {
    const navigation = useNavigation();
    const [user, setUser] = React.useState()
    const [groupName, setGroupName] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [day, setDay] = React.useState('')
    const [imageSource, setImageSource] = useState(null);
    const [imageURL, setImageURL] = useState('')
    const [timing, setTiming] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [dropdownVals, setDropdownVals] = useState(["Select a day..."]);
    const [courses, setCourses] = useState([])
    const [filled, setFilled] = useState(groupName && subject && location && description && day && imageURL && timing)

    AsyncStorage.getItem("userid").then((value) => {
        setUser(value);
        console.log(value);
    });

    React.useEffect(() => {
        setFilled(groupName && subject && location && description && day && imageURL && timing)
    }, [groupName, subject, location, description, day, imageURL, timing])

    const getCourses = async () => {
        try {
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/course/getAll",
                {
                    method: "GET",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    })
                }
            );

            const data = await response.json();
            console.log(data.schedule)
            let tempCourses = data.schedule.map((item) => {
                return { id: item.c_id, name: `${item.c_name} S${item.c_section}` }
            })
            console.log(tempCourses)
            setCourses(tempCourses)
        } catch (e) {
            console.log(e)
        }
    }
    React.useEffect(() => {
        getCourses()
    }, [])

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

    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }

    ]);

    const handleSubmit = async() => {
        setFilled(groupName && subject && location && description && day && imageURL && timing)
        
        console.log(groupName, day, timing, location, description)
        if (!filled) return

        try {
            console.log(imageURL)
            const response = await fetch(
                "https://campusconnect.herokuapp.com/api/group/create",
                {
                    method: "POST",
                    headers: new Headers({
                        accept: 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify({
                        s_id: user,
                        group_name: groupName, 
                        group_icon: imageURL, 
                        c_id: subject, 
                        meet_day: day, 
                        meet_time: timing, 
                        location: location, 
                        description: description
                    }),
                }
            );

            const data = await response.json();
            console.log(data)
            navigation.navigate('StudyGroups', {
                screen: 'StudyGroups'
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
                    placeholder="Group Name"
                    value={groupName}
                    onChangeText={setGroupName}
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />

                <SelectDropdown style={styles.dropDown}
                    data={courses}
                    searchPlaceHolder="Select a Class"
                    defaultButtonText="Select a Class"
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem.name, selectedItem.id)
                        setSubject(selectedItem.id)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem.name
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item.name
                    }}
                />

                <SelectDropdown style={styles.dropDown}
                    data={['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']}
                    searchPlaceHolder="Select a day"
                    defaultButtonText="Select a day"
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        setDay(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />

                {showTimePicker && <DateTimePicker
                    value={timing}
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

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={filled ? styles.submitButtonText : [styles.submitButtonText, { opacity: 0.3 }]}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    basePosition: {
        left: "0%",
        bottom: "0%",
        right: "0%",
        top: "0%",
        height: "100%",
        position: "absolute",
        width: "100%",
    },
    daysTypo: {
        left: "2.44%",
        width: "64.39%",
        alignItems: "flex-end",
        display: "flex",
        textAlign: "left",
        color: Color.gray_400,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_sm,
        height: "2.15%",
        letterSpacing: 1,
        position: "absolute",
    },
    subjectTypo: {
        left: "2.2%",
        width: "64.39%",
        alignItems: "flex-end",
        display: "flex",
        textAlign: "left",
        color: Color.gray_400,
        fontFamily: FontFamily.robotoRegular,
        fontSize: FontSize.size_sm,
        height: "2.15%",
        letterSpacing: 1,
        position: "absolute",
    },
    rectangleLayout: {
        backgroundColor: Color.gray_500,
        height: 27,
        borderRadius: Border.br_3xs,
        position: "absolute",
    },
    rectanglePosition1: {
        left: 76,
        backgroundColor: Color.gray_500,
        width: 296,
    },

    rectanglePosition: {
        left: 81,
        backgroundColor: Color.gray_500,
        width: 296,
        borderRadius: Border.br_3xs,
        position: "absolute",
    },
    imageIcon: {
        top: 58,
        left: 27,
        borderRadius: Border.br_31xl,
        width: 38,
        height: 38,
        position: "absolute",
    },
    maskIcon: {
        width: 20,
        height: 20,
    },
    base: {
        backgroundColor: Color.white,
    },
    iconoutlinemessageCircle: {
        top: 66,
        left: 340,
        width: 24,
        height: 24,
        position: "absolute",
    },
    makeStudyGroupChild: {
        top: 64,
        left: 355,
        width: 7,
        height: 7,
        position: "absolute",
    },
    makeStudyGroupItem: {
        top: 101,
        left: 1,
        width: 410,
        height: 1,
        position: "absolute",
    },
    newStudyGroup: {
        top: 110,
        left: 15,
        fontSize: FontSize.size_3xl,
        fontWeight: "500",
        fontFamily: FontFamily.robotoMedium,
        color: Color.skyblue_100,
        textAlign: "center",
        textTransform: "capitalize",
        letterSpacing: 1,
        position: "absolute",
    },
    rectangleIcon: {
        top: 159,
        left: 65,
        height: 150,
        width: 296,
        borderRadius: Border.br_3xs,
        position: "absolute",
        //backgroundColor:"white"
    },

    addDisplayPicture: {
        width: "74.93%",
        top: "30.85%",
        left: "28.29%",
        alignItems: "flex-end",
        display: "flex",
        color: Color.gray_400,
        fontSize: FontSize.size_sm,
        height: "2.15%",
        textAlign: "left",
        fontFamily: FontFamily.robotoRegular,
        letterSpacing: 1,
        position: "absolute",
    },

    inputContainer: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Color.gray_400,
        overflow: "hidden",
        width: "100%",
        height: 50,
    },
    picker: {
        height: 50,
        width: "100%",
    },


    timing: {
        top: "57.67%",
    },
    subject: {
        top: "65.95%",
    },
    days: {
        top: "50%",
    },
    groupName: {
        top: "42.42%",
    },
    rectangle: {
        top: 379,
        height: 27,
    },
    rectangle1: {
        top: 330,
        left: 117,
        width: 255,
        height: 27,
    },
    rectangle2: {
        top: 433,
        height: 27,
    },
    rectangle3: {
        top: 494,
        height: 27,
    },
    location: {
        top: "89.38%",
    },
    rectangle4: {
        top: 678,
        height: 27,
    },
    rectangle5: {
        top: 579,
        height: 87,
    },
    addDescription: {
        top: "72.04%",
    },
    icon: {
        borderRadius: Border.br_3xs,
        height: "100%",
        width: "100%",
    },
    rectangle395: {
        left: 131,
        top: 716,
        width: 163,
        height: 40,
        position: "absolute",
    },
    createGroup: {
        top: 727,
        left: 163,
        fontSize: FontSize.size_mini,
        color: Color.white,
        textAlign: "left",
        fontFamily: FontFamily.robotoRegular,
        textTransform: "capitalize",
        letterSpacing: 1,
        position: "absolute",
    },
    makeStudyGroup: {
        backgroundColor: Color.gray_200,
        shadowColor: "rgba(24, 48, 63, 0.5)",
        shadowOffset: {
            width: 40,
            height: 40,
        },
        shadowRadius: 100,
        elevation: 100,
        shadowOpacity: 1,
        flex: 1,
        height: 838,
        overflow: "hidden",
        width: "100%",
    },
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

export default MakeStudyGroup;
