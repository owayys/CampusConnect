import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const EventsExtended = () => {
  return (
    <View style={[styles.eventsExtended, styles.rectangleShadowBox]}>
      <Image
        style={[styles.imageIcon, styles.imageIconPosition]}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <Image
        style={styles.iconoutlinemessageCircle}
        resizeMode="cover"
        source={require("../assets/iconoutlinemessagecircle.png")}
      />
      <Image
        style={styles.eventsExtendedChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.eventsExtendedItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <View
        style={[
          styles.rectangle,
          styles.imageIconPosition,
          styles.rectangleShadowBox,
        ]}
      />
      <Image
        style={styles.eventsExtendedInner}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Text style={styles.basketballLeague}>Basketball League</Text>
      <Text
        style={styles.doYouThink}
      >{`Do you think your team has what it takes to be crowned the basketball champions of LUMS? If so, register now for the LUMS Sports Fest Basketball League.

Dates: 15th March - 20th March

Timing: 6:00pm - 7:00 pm

Team Size: 5 Players and 2 substitutes per team`}</Text>
      <View
        style={[
          styles.tcikButton,
          styles.groupIconLayout,
          styles.groupIconLayout1,
        ]}
      >
        <Image
          style={[
            styles.groupIcon,
            styles.groupIconLayout,
            styles.groupIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/group6.png")}
        />
        <Text style={[styles.going, styles.goingTypo]}>Going</Text>
      </View>
      <Image
        style={[styles.rectangle395Icon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle3952.png")}
      />
      <Text style={[styles.interested, styles.goingTypo]}>Interested</Text>
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group7.png")}
      />
      <Text style={[styles.notGoing, styles.goingTypo]}>{`Not 
Going`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  imageIconPosition: {
    left: 27,
    position: "absolute",
  },
  groupIconLayout: {
    height: 40,
    position: "absolute",
  },
  groupIconLayout1: {
    width: 86,
    height: 40,
  },
  goingTypo: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  imageIcon: {
    top: 58,
    borderRadius: Border.br_31xl,
    width: 38,
    height: 38,
  },
  iconoutlinemessageCircle: {
    top: 66,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
  },
  eventsExtendedChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  eventsExtendedItem: {
    top: 101,
    left: 1,
    width: 410,
    height: 1,
    position: "absolute",
  },
  rectangle: {
    top: 127,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.gray_600,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowRadius: 34,
    elevation: 34,
    width: 354,
    height: 650,
  },
  eventsExtendedInner: {
    top: 204,
    left: 41,
    borderRadius: Border.br_4xs,
    width: 327,
    height: 211,
    position: "absolute",
  },
  basketballLeague: {
    top: 152,
    left: 22,
    fontSize: FontSize.size_6xl,
    color: Color.skyblue_100,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 363,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  doYouThink: {
    top: 438,
    left: 46,
    width: 322,
    height: 306,
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupIcon: {
    top: 0,
    left: 0,
  },
  going: {
    top: 11,
    left: 21,
    textAlign: "left",
  },
  tcikButton: {
    left: 38,
    top: 704,
  },
  rectangle395Icon: {
    left: 159,
    borderRadius: Border.br_3xs,
    width: 90,
    top: 704,
  },
  interested: {
    top: 715,
    left: 165,
    textAlign: "left",
  },
  groupIcon1: {
    left: 281,
    width: 77,
    top: 704,
  },
  notGoing: {
    top: 708,
    left: 298,
    textAlign: "center",
  },
  eventsExtended: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowRadius: 100,
    elevation: 100,
    flex: 1,
    width: "100%",
    height: 838,
    overflow: "hidden",
  },
});

export default EventsExtended;
