import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Events = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.events}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <TouchableOpacity
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
      </TouchableOpacity>
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
      <Pressable
        style={styles.rectangle}
        onPress={() => navigation.navigate("EventsExtended")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-201.png")}
      />
      <Text
        style={[styles.basketballLeague, styles.foodStreetTypo]}
      >{`Basketball 
League`}</Text>
      <TouchableOpacity
        style={styles.details}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("EventsExtended")}
      >
        <Text style={styles.details1}>Details</Text>
      </TouchableOpacity>
      <View style={[styles.rectangle1, styles.rectangleShadowBox]} />
      <Text style={[styles.holiFestival, styles.foodStreetTypo]}>{`Holi 
Festival`}</Text>
      <Text style={[styles.details2, styles.detailsTypo]}>Details</Text>
      <View style={[styles.rectangle2, styles.rectangleShadowBox]} />
      <Text style={[styles.foodStreet, styles.foodStreetTypo]}>{`Food
 Street`}</Text>
      <Text style={[styles.details3, styles.detailsTypo]}>Details</Text>
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
      <View style={styles.st}>
        <View style={styles.iconsHead}>
          <TouchableOpacity
            style={[styles.home, styles.homeFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("ForumsTab")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/home03.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text
                style={[styles.forum1Typo, styles.forum1Clr, styles.text3Typo]}
              >
                Forum
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeFlexBox}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Events")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/iconoutlinespeaker.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.events2, styles.forum1Typo]}>Events</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeFlexBox}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Socials")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/box.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.forum1Clr, styles.text3Typo]}>Social</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.homeFlexBox}>
            <TouchableOpacity
              style={styles.home03IconLayout}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("StudyGroups")}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/iconoutlinebookopen.png")}
              />
            </TouchableOpacity>
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.forum1Typo, styles.forum1Clr]}>
                <Text style={styles.study}>Study</Text>
                <Text style={styles.text3Typo}>{` `}</Text>
                <Text style={styles.study}>Group</Text>
              </Text>
            </View>
            <Image
              style={[styles.home03IconLayout, styles.mt2]}
              resizeMode="cover"
              source={require("../assets/piggybank02.png")}
            />
          </View>
          <TouchableOpacity
            style={[styles.more, styles.homeFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/morehorizontal.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={styles.text3Typo}>Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  home03IconLayout: {
    height: 0,
    width: 0,
  },
  basePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
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
  },
  homeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_2xl,
    width: 76,
    backgroundColor: Color.gray_300,
  },
  forum1Clr: {
    color: Color.white,
    fontSize: FontSize.size_xs,
  },
  text3Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  forum1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  imageIcon: {
    top: 58,
    borderRadius: Border.br_31xl,
    width: 38,
    height: 38,
    left: 27,
    position: "absolute",
  },
  maskIcon: {
    width: 30,
    height: 30,
    right:10,
  },
  base: {
    backgroundColor: Color.white,
  },
  iconoutlinemessageCircle: {
    top: 66,
    left: 340,
    position: "absolute",
  },
  eventsChild: {
    top: 64,
    left: 355,
  },
  eventsItem: {
    top: 331,
    left: 251,
  },
  eventsInner: {
    top: 534,
    left: 251,
  },
  ellipseIcon: {
    top: 735,
    left: 248,
  },
  vectorIcon: {
    top: 101,
    left: 1,
    width: 410,
  },
  lineView: {
    top: 162,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderTopWidth: 1,
    width: 320,
    left: 44,
  },
  events1: {
    top: 116,
    left: 162,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 1,
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangle: {
    top: 189,
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
    top: 218,
    borderRadius: Border.br_4xs,
    width: 172,
    left: 44,
  },
  basketballLeague: {
    top: 227,
    left: 234,
  },
  details1: {
    textAlign: "left",
    textDecoration: "underline",
    fontSize: FontSize.size_mini,
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
  },
  details: {
    left: 262,
    top: 292,
    position: "absolute",
  },
  rectangle1: {
    top: 393,
  },
  holiFestival: {
    top: 431,
    left: 251,
  },
  details2: {
    top: 496,
  },
  rectangle2: {
    top: 589,
  },
  foodStreet: {
    top: 627,
    left: 257,
  },
  details3: {
    top: 692,
  },
  image3Icon: {
    top: 618,
    left: 48,
    width: 175,
  },
  going: {
    top: 326,
  },
  going1: {
    top: 529,
  },
  going2: {
    top: 729,
    left: 258,
  },
  image2Icon: {
    top: 419,
    left: 43,
    width: 173,
    height: 118,
    position: "absolute",
  },
  forum: {
    flexDirection: "row",
  },
  home: {
    borderTopLeftRadius: Border.br_11xs,
  },
  events2: {
    fontSize: FontSize.size_xs,
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  study: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  more: {
    borderTopRightRadius: Border.br_11xs,
  },
  iconsHead: {
    flexDirection: "row",
    borderTopRightRadius: Border.br_11xs,
    borderTopLeftRadius: Border.br_11xs,
  },
  st: {
    top: 778,
    left: 15,
    width: 380,
    position: "absolute",
  },
  events: {
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowRadius: 100,
    elevation: 100,
    flex: 1,
    height: 838,
    overflow: "hidden",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
});

export default Events;
