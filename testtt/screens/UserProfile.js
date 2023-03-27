import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UserProfile = () => {
  return (
    <View style={styles.userProfile}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image20.png")}
      />
      <Text style={[styles.ahmedLuqman, styles.aCsJuniorLayout]}>
        Ahmed Luqman
      </Text>
      <Text style={[styles.aCsJunior, styles.aCsJuniorLayout]}>
        A CS Junior, who loves playing football and chess!!!
      </Text>
      <Text style={[styles.myProfile, styles.myProfileTypo]}>My Profile</Text>
      <Text style={[styles.myInterests, styles.myProfileTypo]}>
        My Interests
      </Text>
      <View style={styles.gradYear}>
        <Text style={styles.graduation2024}>Graduation: 2024</Text>
        <Image
          style={styles.iconoutlinecalendar}
          resizeMode="cover"
          source={require("../assets/iconoutlinecalendar.png")}
        />
      </View>
      <View style={styles.interests}>
        <View
          style={[
            styles.rectangle,
            styles.rectangleLayout2,
            styles.rectangleLayout3,
          ]}
        />
        <Text style={[styles.football, styles.gymTypo]}>Football</Text>
        <View style={[styles.rectangle1, styles.rectangleLayout1]} />
        <Text style={[styles.gym, styles.gymTypo]}>Gym</Text>
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <View style={[styles.rectangle3, styles.rectangleLayout]} />
        <View style={[styles.editProfileParent, styles.rectangleLayout2]}>
          <Text style={[styles.editProfile, styles.gymTypo]}>Edit Profile</Text>
          <View style={styles.rectangle4} />
        </View>
        <Text style={[styles.cooking, styles.gymTypo]}>Cooking</Text>
        <Text style={[styles.chess, styles.gymTypo]}>Chess</Text>
        <View
          style={[
            styles.rectangle5,
            styles.rectangleLayout2,
            styles.rectangleLayout3,
          ]}
        />
        <Text style={[styles.reading, styles.gymTypo]}>Reading</Text>
        <View style={[styles.rectangle6, styles.rectangleLayout1]} />
        <Text style={[styles.longWalks, styles.gymTypo]}>Long Walks</Text>
      </View>
      <Image
        style={[styles.userProfileChild, styles.userLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.userProfileItem, styles.userLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aCsJuniorLayout: {
    height: 38,
    width: 192,
    color: Color.white,
    textAlign: "left",
    left: 31,
    position: "absolute",
  },
  myProfileTypo: {
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    height: 38,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout2: {
    height: 40,
    position: "absolute",
  },
  rectangleLayout3: {
    width: 101,
    backgroundColor: Color.skyblue_200,
    left: 116,
    height: 40,
    borderRadius: Border.br_xl,
  },
  gymTypo: {
    width: 92,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    height: 40,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  rectangleLayout1: {
    left: 234,
    height: 40,
    width: 101,
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleLayout: {
    left: 1,
    height: 40,
    width: 101,
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  userLayout: {
    height: 1,
    width: 410,
    left: 1,
    position: "absolute",
  },
  imageIcon: {
    top: 82,
    left: 11,
    borderRadius: Border.br_31xl,
    width: 106,
    height: 106,
    position: "absolute",
  },
  ahmedLuqman: {
    top: 174,
    fontSize: 23,
    fontWeight: "800",
    fontFamily: FontFamily.robotoExtrabold,
  },
  aCsJunior: {
    top: 208,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  myProfile: {
    top: 66,
    left: 155,
    width: 97,
  },
  myInterests: {
    top: 293,
    width: 142,
    left: 31,
  },
  graduation2024: {
    top: 3,
    left: 24,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkgray_100,
    width: 143,
    height: 21,
    textAlign: "left",
    position: "absolute",
  },
  iconoutlinecalendar: {
    width: 18,
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  gradYear: {
    top: 255,
    width: 167,
    height: 24,
    left: 31,
    position: "absolute",
  },
  rectangle: {
    top: -48,
  },
  football: {
    left: 142,
    top: -48,
  },
  rectangle1: {
    top: -48,
  },
  gym: {
    left: 274,
    top: -48,
  },
  rectangle2: {
    top: 4,
  },
  rectangle3: {
    top: -48,
  },
  editProfile: {
    left: 13,
    top: 0,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  rectangle4: {
    top: 7,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: 95,
    height: 26,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  editProfileParent: {
    top: -161,
    left: 239,
    width: 105,
  },
  cooking: {
    left: 28,
    top: 4,
  },
  chess: {
    top: -48,
    left: 31,
  },
  rectangle5: {
    top: 4,
  },
  reading: {
    left: 143,
    top: 4,
  },
  rectangle6: {
    top: 4,
  },
  longWalks: {
    left: 249,
    top: 4,
  },
  interests: {
    top: 377,
    left: 29,
    width: 367,
    height: 43,
    position: "absolute",
  },
  userProfileChild: {
    top: 96,
  },
  userProfileItem: {
    top: 431,
  },
  userProfile: {
    borderRadius: Border.br_21xl,
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

export default UserProfile;
