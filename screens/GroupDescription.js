import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const GroupDescription = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupDescription}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <View style={styles.iconoutlinemessageCircle}>
        <Image
          style={styles.maskIcon}
          resizeMode="cover"
          source={require("../assets/mask.png")}
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
      </View>
      <Image
        style={styles.groupDescriptionChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.groupDescriptionItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={styles.groupDescription1}>Group Description</Text>
      <Text style={[styles.days, styles.daysTypo]}>Days:</Text>
      <Text style={[styles.timing, styles.daysTypo]}>Timing:</Text>
      <Text style={[styles.subject, styles.daysTypo]}>Subject:</Text>
      <Text style={[styles.description, styles.daysTypo]}>Description:</Text>
      <Text style={[styles.location, styles.daysTypo]}>Location:</Text>
      <Text style={[styles.name, styles.daysTypo]}>Name:</Text>
      <Text
        style={[styles.aGroupWhere, styles.aGroupWhereTypo]}
        numberOfLines={2}
      >
        A group where we can collborate and study advanced programming
      </Text>
      <Text style={[styles.libraryLawn, styles.aGroupWhereTypo]}>
        Library Lawn
      </Text>
      <Text style={[styles.advancedProgramming, styles.pm600PmTypo]}>
        Advanced Programming
      </Text>
      <Text style={[styles.pm600Pm, styles.pm600PmTypo]}>5:00PM-6:00 PM</Text>
      <Text style={[styles.apGroup, styles.pm600PmTypo]}>AP Group</Text>
      <Text style={[styles.mondayWednesday, styles.pm600PmTypo]}>
        Monday, Wednesday
      </Text>
      <ImageBackground
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <Pressable
        style={[
          styles.editParent,
          styles.editGroupLayout,
          styles.editGroupLayout1,
        ]}
      >
        <Text style={[styles.edit, styles.editGroupLayout]}>Edit</Text>
        <View style={styles.rectangle} />
      </Pressable>
      <Pressable
        style={[
          styles.editGroup,
          styles.editGroupLayout,
          styles.editGroupLayout1,
        ]}
      >
        <Text style={[styles.edit, styles.editGroupLayout]}>Edit</Text>
        <View style={styles.rectangle} />
      </Pressable>
      <Pressable
        style={[
          styles.editContainer,
          styles.editGroupLayout,
          styles.editGroupLayout1,
        ]}
      >
        <Text style={[styles.edit, styles.editGroupLayout]}>Edit</Text>
        <View style={styles.rectangle} />
      </Pressable>
      <Pressable
        style={[
          styles.groupPressable,
          styles.editGroupLayout,
          styles.editGroupLayout1,
        ]}
      >
        <Text style={[styles.edit, styles.editGroupLayout]}>Edit</Text>
        <View style={styles.rectangle} />
      </Pressable>
      <Pressable
        style={[
          styles.editParent1,
          styles.editGroupLayout,
          styles.editGroupLayout1,
        ]}
      >
        <Text style={[styles.edit, styles.editGroupLayout]}>Edit</Text>
        <View style={styles.rectangle} />
      </Pressable>
      <Pressable
        style={[
          styles.editParent2,
          styles.editGroupLayout,
          styles.editGroupLayout1,
        ]}
      >
        <Text style={[styles.edit, styles.editGroupLayout]}>Edit</Text>
        <View style={styles.rectangle} />
      </Pressable>
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
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  aGroupWhereTypo: {
    height: 43,
    width: 302,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  pm600PmTypo: {
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    left: 22,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  editGroupLayout: {
    height: 29,
    position: "absolute",
  },
  editGroupLayout1: {
    width: 100,
    left: 316,
    height: 29,
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
  groupDescriptionChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  groupDescriptionItem: {
    top: 101,
    left: 1,
    width: 410,
    height: 1,
    position: "absolute",
  },
  groupDescription1: {
    top: 127,
    left: 11,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  days: {
    left: 22,
    top: 432,
  },
  timing: {
    top: 495,
    left: 22,
  },
  subject: {
    top: 561,
    left: 25,
  },
  description: {
    top: 627,
    left: 25,
  },
  location: {
    top: 699,
    left: 22,
  },
  name: {
    top: 369,
    left: 18,
  },
  aGroupWhere: {
    top: 641,
    left: 22,
  },
  libraryLawn: {
    top: 698,
    left: 25,
  },
  advancedProgramming: {
    top: 596,
  },
  pm600Pm: {
    top: 530,
  },
  apGroup: {
    top: 403,
  },
  mondayWednesday: {
    top: 464,
  },
  rectangleIcon: {
    top: 192,
    left: 128,
    borderRadius: Border.br_11xl,
    width: 135,
    height: 127,
    position: "absolute",
  },
  edit: {
    top: 0,
    left: 26,
    fontSize: FontSize.size_smi,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    alignItems: "center",
    width: 74,
    height: 29,
    display: "flex",
    textAlign: "left",
    color: Color.white,
    letterSpacing: 1,
  },
  rectangle: {
    top: 5,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: 76,
    height: 19,
    position: "absolute",
  },
  editParent: {
    top: 371,
  },
  editGroup: {
    top: 432,
  },
  editContainer: {
    top: 493,
  },
  groupPressable: {
    top: 554,
  },
  editParent1: {
    top: 615,
  },
  editParent2: {
    top: 695,
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
    height: 838,
    overflow: "hidden",
    width: "100%",
  },
});

export default GroupDescription;
