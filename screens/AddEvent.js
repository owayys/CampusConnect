import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const AddEvent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addEvent}>
      <Text style={styles.addEvent1}>Add Event</Text>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle3.png")}
      />
      <Text style={[styles.addCoverPhoto, styles.publishEventFlexBox]}>
        + Add Cover Photo for Event
      </Text>
      <TextInput
        style={styles.rectangle}
        placeholder="..."
        keyboardType="default"
      />
      <TextInput
        style={[
          styles.rectangle1,
          styles.rectangleLayout,
          styles.rectangleLayout1,
        ]}
        placeholder="..."
        keyboardType="default"
      />
      <Text style={[styles.addDescription, styles.timeTypo]}>
        Add description:
      </Text>
      <Text style={[styles.startTime, styles.timeTypo]}>Start Time:</Text>
      <TextInput
        style={[
          styles.rectangle2,
          styles.rectangleLayout,
          styles.rectangleLayout1,
        ]}
        placeholder="..."
        keyboardType="default"
      />
      <Text style={[styles.endTime, styles.timeTypo]}>End Time:</Text>
      <TextInput
        style={[styles.rectangle3, styles.rectangleLayout]}
        placeholder="..."
        keyboardType="default"
      />
      <Text style={[styles.venue, styles.timeTypo]}>Venue:</Text>
      <TouchableOpacity
        style={[styles.group, styles.groupLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Events")}
      >
        <View
          style={[
            styles.rectangle395,
            styles.rectangle395Position,
            styles.groupLayout,
          ]}
        />
        <Text
          style={[
            styles.publishEvent,
            styles.rectangle395Position,
            styles.publishEventFlexBox,
          ]}
        >
          Publish Event
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  publishEventFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 1,
  },
  rectangleLayout: {
    height: 29,
    left: 56,
    backgroundColor: Color.gray_500,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  rectangleLayout1: {
    width: 100,
    height: 29,
    left: 56,
  },
  timeTypo: {
    left: "15.85%",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.gray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    width: "64.39%",
    height: "2.15%",
    letterSpacing: 1,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 186,
  },
  rectangle395Position: {
    left: 0,
    position: "absolute",
  },
  addEvent1: {
    top: 74,
    left: 33,
    fontSize: FontSize.size_3xl,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.skyblue_100,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleIcon: {
    top: 126,
    height: 150,
    width: 296,
    left: 57,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  addCoverPhoto: {
    top: "22.91%",
    left: "26.1%",
    textAlign: "left",
    color: Color.gray_400,
    fontSize: FontSize.size_sm,
    width: "64.39%",
    height: "2.15%",
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  rectangle: {
    top: 347,
    height: 79,
    backgroundColor: Color.gray_500,
    width: 296,
    borderRadius: Border.br_3xs,
    left: 57,
    position: "absolute",
  },
  rectangle1: {
    top: 469,
  },
  addDescription: {
    top: "36.4%",
  },
  startTime: {
    top: "52.74%",
  },
  rectangle2: {
    top: 539,
  },
  endTime: {
    top: "61.1%",
  },
  rectangle3: {
    top: 616,
    width: 297,
    height: 29,
    left: 56,
  },
  venue: {
    top: "70.29%",
  },
  rectangle395: {
    top: 0,
    backgroundColor: Color.deepskyblue,
    borderStyle: "solid",
    borderColor: "#03a9f1",
    borderWidth: 1,
    left: 0,
    borderRadius: Border.br_3xs,
    height: 40,
    width: 186,
  },
  publishEvent: {
    top: 11,
    fontSize: FontSize.size_mini,
    color: Color.white,
    textAlign: "right",
    width: 146,
    display: "flex",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
  },
  group: {
    top: 708,
    left: 112,
    height: 40,
    width: 186,
    position: "absolute",
  },
  addEvent: {
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
    width: "100%",
    height: 838,
    overflow: "hidden",
  },
});

export default AddEvent;
