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
  Platform
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

const selectImage = async () => {
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

  if (!result.cancelled) {

    console.log(result.uri);
  }
};

const MakeStudyGroup = () => {
  const navigation = useNavigation();
  const [groupName, setGroupName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgsources, setImgSources] = useState(null);

  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
    
  ]);

  const handleCreateGroup = () => {
    // Makes an HTTP POST request to to backend API
    fetch("https://example.com/api/study-groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupName,
        subject,
        location,
        description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
    
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log("Error selecting image", error);
    }
  };
  

  return (
    
    <View style={styles.makeStudyGroup}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      {/* <TouchableOpacity
        style={[styles.iconoutlinemessageCircle, styles.home03IconLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("OuterChatInterface")}
      >
        <Image
          style={styles.maskIcon}
          resizeMode="cover"
          source={require("../assets/chat_icon1.png")}
        />
        <TouchableOpacity
          style={styles.basePosition}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <TouchableOpacity
            style={[styles.base, styles.basePosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("OuterChatInterface")}
          />
        </TouchableOpacity>
      </TouchableOpacity> */}
      <Image
        style={styles.makeStudyGroupItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={styles.newStudyGroup}>New Study Group</Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/ic_add.png")}
      />
      <TouchableOpacity style={[styles.addDisplayPicture, {flexDirection: 'row'}]} onPress={selectImage}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={{ right: 45, width: 295, height: 150, top: 56, resizeMode: "cover" }} />
        ) : (
          <Image source={require("../assets/ic_add.png")} style={{ width: 500, height: 500, resizeMode: "contain" }} />
        )}
        <Text style={{ marginLeft: 5, color: Color.gray_400 }}>Add Display Picture</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
                    onPress={selectImage}
                    style={{
                        position: "absolute",
                        top: responsiveScreenHeight(6.8),
                        //left: 330,
                        left: responsiveScreenWidth(84.6),
                        //width: 33,
                        width: responsiveScreenWidth(8.4),
                        //height: 33,
                        height: responsiveScreenWidth(8.4),
                    }}
                >
                    <Image
                        style={{
                            tintColor: "white",
                            //width: 33,
                            width: responsiveScreenWidth(8.4),
                            //height: 33,
                            height: responsiveScreenWidth(8.4),
                            // backgroundColor:"#ffffff"
                        }}
                        resizeMode="cover"
                        source={require("../assets/plus-box-outline.png")}
                    />
                </TouchableOpacity> */}


      <Text style={[styles.timing, styles.daysTypo,]}>Timing:</Text>
      <Text style={[styles.subject, styles.subjectTypo]}>Select Subject:</Text>
      <Text style={[styles.days, styles.daysTypo]}>Days:</Text>
      <Text style={[styles.groupName, styles.daysTypo]}>Group name:</Text>

      <TextInput
        style={[
          styles.rectangle,
          styles.rectangleLayout,
          styles.rectanglePosition1,
          { color: Color.gray_400, paddingLeft: 10 }

        ]}
        placeholder="..."
        keyboardType="default"
      />
      <TextInput
        style={[styles.rectangle1, styles.rectangleLayout, { color: Color.gray_400, paddingLeft: 10 }]}
        placeholder="..."
        keyboardType="default"
      />
      <TextInput
        style={[
          styles.rectangle2,
          styles.rectangleLayout,
          styles.rectanglePosition1,
          { color: Color.gray_400, paddingLeft: 10 }
        ]}
        placeholder="..."
        keyboardType="default"
      />
      <DropDownPicker
        items={[
          {label: 'CS 100', value: 'option1'},
          {label: 'CS 200', value: 'option2'},
          {label: 'CS 300', value: 'option3'},
        ]}
        defaultValue={'option1'}
        containerStyle={{height: 30, marginTop: 495, width: 250, marginLeft: 30, left: 95, zIndexInverse:2000, zIndex:2000}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        open={open}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text style={[styles.location, styles.subjectTypo, { color: Color.gray_400, paddingLeft: 10 }]}>Location:</Text>
      <TextInput
        style={[styles.rectangle4, styles.rectanglePosition, { color: Color.gray_400, paddingLeft: 10 }]}
        placeholder="..."
        keyboardType="default"
      />
      <TextInput
        style={[styles.rectangle5, styles.rectanglePosition, { color: Color.gray_400, paddingLeft: 10}]}
        placeholder="..."
        keyboardType="default"
      />
      <Text style={[styles.addDescription, styles.subjectTypo, { color: Color.gray_400, paddingLeft: 10 }]}>
        Add description:
      </Text>
      <TouchableOpacity
        style={styles.rectangle395}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("OuterChatInterface")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle395.png")}
        />
      </TouchableOpacity>
      <Text style={styles.createGroup}>Create Group</Text>
    </View>
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
});

export default MakeStudyGroup;
