import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Events = () => {
  return (
    <View style={styles.events}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <Image
        style={styles.iconoutlinemessageCircle}
        resizeMode="cover"
        source={require("../assets/iconoutlinemessagecircle.png")}
      />
      <Image
        style={[styles.eventsChild, styles.eventsLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.eventsItem, styles.eventsLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.eventsInner, styles.eventsLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.eventsLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.lineViewLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={styles.events1}>EVENTS</Text>
      <View style={styles.rectangle} />
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-201.png")}
      />
      <Text
        style={[styles.basketballLeague, styles.foodStreetTypo]}
      >{`Basketball 
League`}</Text>
      <Text style={styles.details}>Details</Text>
      <View style={[styles.rectangle1, styles.rectangleShadowBox]} />
      <Text style={[styles.holiFestival, styles.foodStreetTypo]}>{`Holi 
Festival`}</Text>
      <Text style={[styles.details1, styles.detailsTypo]}>Details</Text>
      <View style={[styles.rectangle2, styles.rectangleShadowBox]} />
      <Text style={[styles.foodStreet, styles.foodStreetTypo]}>{`Food
 Street`}</Text>
      <Text style={[styles.details2, styles.detailsTypo]}>Details</Text>
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <Text style={[styles.going, styles.goingTypo, styles.goingTypo1]}>
        50 going
      </Text>
      <Text style={[styles.going1, styles.goingTypo, styles.goingTypo1]}>
        60 going
      </Text>
      <Text style={[styles.going2, styles.goingTypo]}>100 going</Text>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventsLayout: {
    height: 7,
    width: 7,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 111,
    position: "absolute",
  },
  foodStreetTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.skyblue_100,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleShadowBox: {
    left: 28,
    height: 169,
    width: 354,
    elevation: 34,
    shadowRadius: 34,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    backgroundColor: Color.gray_600,
    borderRadius: Border.br_10xl,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  detailsTypo: {
    left: 263,
    textAlign: "left",
    color: Color.white,
    textDecoration: "underline",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  goingTypo: {
    fontFamily: FontFamily.latoRegular,
    textTransform: "uppercase",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  goingTypo1: {
    left: 261,
    fontFamily: FontFamily.latoRegular,
    textTransform: "uppercase",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  imageIcon: {
    top: 58,
    borderRadius: Border.br_31xl,
    width: 38,
    height: 38,
    left: 27,
    position: "absolute",
  },
  iconoutlinemessageCircle: {
    top: 66,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
  },
  eventsChild: {
    top: 64,
    left: 355,
  },
  eventsItem: {
    top: 343,
    left: 251,
  },
  eventsInner: {
    top: 546,
    left: 251,
  },
  ellipseIcon: {
    top: 747,
    left: 248,
  },
  vectorIcon: {
    top: 101,
    left: 1,
    width: 410,
  },
  lineView: {
    top: 174,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderTopWidth: 1,
    width: 320,
    left: 44,
  },
  events1: {
    top: 128,
    left: 162,
    fontSize: FontSize.size_3xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    color: Color.skyblue_100,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle: {
    top: 201,
    height: 169,
    width: 354,
    elevation: 34,
    shadowRadius: 34,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    backgroundColor: Color.gray_600,
    borderRadius: Border.br_10xl,
    left: 27,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  rectangleIcon: {
    top: 230,
    borderRadius: Border.br_4xs,
    width: 172,
    left: 44,
  },
  basketballLeague: {
    top: 239,
    left: 234,
  },
  details: {
    top: 304,
    left: 262,
    textAlign: "left",
    color: Color.white,
    textDecoration: "underline",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle1: {
    top: 405,
  },
  holiFestival: {
    top: 443,
    left: 251,
  },
  details1: {
    top: 508,
  },
  rectangle2: {
    top: 601,
  },
  foodStreet: {
    top: 639,
    left: 257,
  },
  details2: {
    top: 704,
  },
  image3Icon: {
    top: 630,
    left: 48,
    width: 175,
  },
  going: {
    top: 338,
  },
  going1: {
    top: 541,
  },
  going2: {
    top: 741,
    left: 258,
  },
  image2Icon: {
    top: 431,
    left: 43,
    width: 173,
    height: 118,
    position: "absolute",
  },
  events: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowRadius: 100,
    elevation: 100,
    flex: 1,
    width: "100%",
    height: 838,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
});

export default Events;
