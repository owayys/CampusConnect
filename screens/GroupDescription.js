import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useState, useEffect } from "react";

const GroupDescription = () => {
  const navigation = useNavigation();

  //sample props that you can pass to this component
  const groupDescriptionSampleProps = {
    id:1,
    name: "AP Group",
    days: "Monday, Wednesday",
    timing: "5:00PM-6:00PM",
    subject: "Advanced Programming",
    description:
      "A group where we can collborate  and study advanced programming",
    location: "Library Lawn",
  };
  const [groupname, setgroupname] = useState(groupDescriptionSampleProps.name);
  const [groupdays, setgroupdays] = useState(groupDescriptionSampleProps.days);
  const [grouptiming, setgrouptiming] = useState(
    groupDescriptionSampleProps.timing
  );
  const [groupsubject, setgroupsubject] = useState(
    groupDescriptionSampleProps.subject
  );
  const [groupdescription, setgroupdescription] = useState(
    groupDescriptionSampleProps.description
  );
  const [grouplocation, setgrouplocation] = useState(
    groupDescriptionSampleProps.location
  );

  const submitNameEdit = () => {
    //store the change in db
  };
  const submitDaysEdit = () => {
    //store the change in db
  };
  const submitTimingEdit = () => {
    //store the change in db
  };
  const submitSubjectEdit = () => {
    //store the change in db
  };
  const submitDescriptionEdit = () => {
    //store the change in db
  };
  const submitLocationEdit = () => {
    //store the change in db
  };

  return (
    <View style={styles.groupDescription}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <View style={[styles.iconOutlineMessageCircle, styles.home03IconLayout]}>
        <TouchableOpacity
          style={styles.basePosition}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("OuterChatInterface")}
        >
          <Image
            style={styles.chatIcon}
            resizeMode="contain"
            source={require("../assets/chat-icon-home.png")}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={[styles.homeScreenItem, styles.homeLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.groupDescriptionItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={styles.groupDescription1}>Group Description</Text>
      <ImageBackground
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={styles.scrollviewFrame}>
        <ScrollView>
          {/* {filteredEvents.map(renderEvent)} */}
          <View style={styles.eventContainer}>
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>Name</Text>
              <View style={styles.attendanceContainer}>
                <TextInput
                  style={styles.attendanceText}
                  value={groupname}
                  onChangeText={setgroupname}
                />
              </View>
              <TouchableOpacity
                style={{ marginTop: responsiveScreenHeight(1.5) }}
                onPress={submitNameEdit}
              >
                {/* <Text style={styles.detailsText}>Details</Text> */}
                <View style={styles.rectangle}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventContainer}>
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>Days</Text>
              <View style={styles.attendanceContainer}>
                <TextInput
                  style={styles.attendanceText}
                  value={groupdays}
                  onChangeText={setgroupdays}
                />
              </View>
              <TouchableOpacity
                style={{ marginTop: responsiveScreenHeight(1.5) }}
                onPress={submitDaysEdit}
              >
                {/* <Text style={styles.detailsText}>Details</Text> */}
                <View style={styles.rectangle}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventContainer}>
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>Timing</Text>
              <View style={styles.attendanceContainer}>
                <TextInput
                  style={styles.attendanceText}
                  value={grouptiming}
                  onChangeText={setgrouptiming}
                />
              </View>
              <TouchableOpacity
                style={{ marginTop: responsiveScreenHeight(1.5) }}
                onPress={submitTimingEdit}
              >
                {/* <Text style={styles.detailsText}>Details</Text> */}
                <View style={styles.rectangle}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventContainer}>
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>Subject</Text>
              <View style={styles.attendanceContainer}>
                <TextInput
                  style={styles.attendanceText}
                  value={groupsubject}
                  onChangeText={setgroupsubject}
                />
              </View>
              <TouchableOpacity
                style={{ marginTop: responsiveScreenHeight(1.5) }}
                onPress={submitSubjectEdit}
              >
                {/* <Text style={styles.detailsText}>Details</Text> */}
                <View style={styles.rectangle}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventContainer}>
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>Description</Text>
              <View style={styles.attendanceContainer}>
                <TextInput
                  style={styles.attendanceText}
                  value={groupdescription}
                  onChangeText={setgroupdescription}
                />
              </View>
              <TouchableOpacity
                style={{ marginTop: responsiveScreenHeight(1.5) }}
                onPress={submitDescriptionEdit}
              >
                {/* <Text style={styles.detailsText}>Details</Text> */}
                <View style={styles.rectangle}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventContainer}>
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>Location</Text>
              <View style={styles.attendanceContainer}>
                <TextInput
                  style={styles.attendanceText}
                  value={grouplocation}
                  onChangeText={setgrouplocation}
                />
              </View>
              <TouchableOpacity
                style={{ marginTop: responsiveScreenHeight(1.5) }}
                onPress={submitLocationEdit}
              >
                {/* <Text style={styles.detailsText}>Details</Text> */}
                <View style={styles.rectangle}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventContainer}>
            <View style={styles.eventContent}>
              <Text style={styles.eventName}>View Join Requests</Text>
              <TouchableOpacity
                style={{ marginTop: responsiveScreenHeight(1.5) }}
                onPress={()=>{navigation.navigate("SGJoinReq")}}
              >
                {/* <Text style={styles.detailsText}>Details</Text> */}
                <View style={styles.lastrectangle}>
                  <Text style={styles.view}>View</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
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
  imageIcon: {
    // top: 58,
    // left: 27,
    // borderRadius: Border.br_31xl,
    // width: 38,
    // height: 38,
    // position: "absolute",
    top: responsiveScreenHeight(6.2),
    left: responsiveScreenWidth(10),
    borderRadius: Border.br_31xl,
    width: responsiveScreenWidth(9),
    height: responsiveScreenWidth(9),
    position: "absolute",
  },
  groupDescriptionItem: {
    // top: 101,
    // left: 1,
    // width: 410,
    // height: 1,
    top: responsiveScreenHeight(12),
    left: 1,
    width: responsiveScreenWidth(100),
    height: 1,
    position: "absolute",
    //backgroundColor:"white"
  },
  groupDescription1: {
    // top: 127,
    // left: 11,
    // fontSize: FontSize.size_3xl,
    // textAlign: "center",
    // color: Color.skyblue_100,
    // fontFamily: FontFamily.robotoMedium,
    // fontWeight: "500",
    // textTransform: "capitalize",
    // letterSpacing: 1,
    // position: "absolute",
    top: responsiveScreenHeight(14),
    left: responsiveScreenWidth(10),
    fontSize: responsiveScreenFontSize(4.2),
    textAlign: "center",
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "600",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleIcon: {
    // top: 192,
    // left: 128,
    // borderRadius: Border.br_11xl,
    // width: 135,
    // height: 127,
    position: "absolute",
    top: responsiveScreenHeight(20),
    left: responsiveScreenWidth(30),
    borderRadius: Border.br_11xl,
    width: responsiveScreenWidth(50),
    height: responsiveScreenWidth(50),
    position: "absolute",
  },
  edit: {
    color: Color.skyblue_100,
    // top: 0,
    // left: 26,
    left: responsiveScreenWidth(5),
    //fontSize: FontSize.size_smi,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    alignItems: "center",

    // width: 74,
    // height: 29,
    display: "flex",
    textAlign: "left",
    // color: Color.white,
    letterSpacing: 1,
  },
  view: {
    color: "white",
    // top: 0,
    // left: 26,
    left: responsiveScreenWidth(5),
    //fontSize: FontSize.size_smi,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "bold",
    fontFamily: FontFamily.robotoLight,
    alignItems: "center",

    // width: 74,
    // height: 29,
    display: "flex",
    textAlign: "left",
    // color: Color.white,
    letterSpacing: 1,
  },
  groupDescription: {
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
    height: responsiveScreenHeight(100),
    overflow: "hidden",
    width: "100%",
  },
  iconOutlineMessageCircle: {
    position: "absolute",
    // top: 56,
    top: responsiveScreenHeight(6.8),
    left: responsiveScreenWidth(85),
  },
  home03IconLayout: {
    // height: 24,
    // width: 24,
    tintColor: "white",
    //width: 33,
    width: responsiveScreenWidth(6),
    //height: 33,
    height: responsiveScreenWidth(6.5),
  },
  basePosition: {
    // left: "0%",
    // bottom: "0%",
    // right: "0%",
    // top: "0%",
    // height: "100%",
    // position: "absolute",
    // width: "100%",

    position: "absolute",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  chatIcon: {
    // width: 20,
    // height: 20,
    // tintColor:"white",
    tintColor: "white",
    //width: 33,
    width: responsiveScreenWidth(6),
    //height: 33,
    height: responsiveScreenWidth(6.5),
  },
  homeScreenItem: {
    left: responsiveScreenWidth(88.5),
  },
  homeLayout: {
    // height: 7,
    height: responsiveScreenWidth(1.8),
    // width: 7,
    width: responsiveScreenWidth(1.8),
    //top: 56,
    top: responsiveScreenHeight(6.8),
    position: "absolute",
  },
  scrollviewFrame: {
    paddingHorizontal: 16,
    top: responsiveScreenHeight(40),
    height: responsiveScreenHeight(50),
  },
  eventsList: {
    //backgroundColor:"white",
  },
  eventContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  eventName: {
    color: "white",
    fontSize: responsiveScreenFontSize(3),
    fontWeight: "bold",
    color: Color.skyblue_100,
    left: responsiveScreenWidth(2),
  },
  attendanceContainer: {
    // backgroundColor: '#00C853',
    backgroundColor: "white",
    borderRadius: responsiveScreenWidth(10),
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(1),
    alignSelf: "flex-start",
    marginTop: responsiveScreenHeight(1),
    width: responsiveScreenWidth(80),
  },
  attendanceText: {
    color: "black",
    //fontSize: 14,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: "bold",
  },
  rectangle: {
    //top: responsiveScreenHeight(1),
    // left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(3),
    left: responsiveScreenWidth(2),
    mmarginTop: 16,
    // position: "absolute",
  },
  lastrectangle: {
    //top: responsiveScreenHeight(1),
    // left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: "#d12727",
    borderStyle: "solid",
    borderColor: "#d12727",
    borderWidth: 1,
    width: responsiveScreenWidth(20),
    height: responsiveScreenHeight(3),
    left: responsiveScreenWidth(2),
    mmarginTop: 16,
    // position: "absolute",
  },
  textinputbox: {
    // top: 339,
    //top: responsiveScreenHeight(40),
    // height: 77,
    height: responsiveScreenHeight(8.9),
    width: responsiveScreenWidth(80),
    // left: 31,
    position: "absolute",
    alignItems: "center",
    margin: "auto",
    //backgroundColor: Color.white,
  },
});

export default GroupDescription;
