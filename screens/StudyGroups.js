import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const StudyGroups = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    
    <View style={styles.studyGroups}>
      <View style={[styles.rectangle, styles.rectangleShadowBox]} />
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
      </TouchableOpacity>
      <Image
        style={styles.studyGroupsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.studyGroupsItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.studyGroups1, styles.text3Typo]}>Study Groups</Text>
      <Text
        style={[
          styles.advancedProgramming,
          styles.joinGroupTypo,
          styles.joinGroupTypo1,
        ]}
      >{`Advanced
Programming`}</Text>
      <Text
        style={[styles.daysMondays, styles.joinGroupTypo]}
      >{`Days: Mondays & Wednesdays
Timing:  5:00 pm - 6:00 pm
Current Members: 2
Max Capacity: 10`}</Text>
      <Image
        style={[styles.rectangle395Icon, styles.rectangle395IconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle3951.png")}
      />
      <Text
        style={[styles.joinGroup, styles.joinGroupTypo, styles.joinGroupTypo1]}
      >
        Join Group
      </Text>
      <TouchableOpacity
        style={styles.makeNewGroupParent}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MakeStudyGroup")}
      >
        <Text style={styles.makeNewGroup}>Make new group</Text>
        <View style={styles.rectangle1} />
      </TouchableOpacity>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle1.png")}
      />
      <View style={[styles.rectangle2, styles.rectangleShadowBox]} />
      <Text
        style={[
          styles.softwareEngineering,
          styles.rectangle395Icon1Position,
          styles.joinGroupTypo,
          styles.joinGroupTypo1,
        ]}
      >{`Software
Engineering`}</Text>
      <Text
        style={[styles.daysMondays1, styles.joinGroupTypo]}
      >{`Days: Mondays & Wednesdays
Timing:  5:00 pm - 6:00 pm
Current Members: 3
Max Capacity: 10`}</Text>
      <Image
        style={[
          styles.rectangle395Icon1,
          styles.rectangle395Icon1Position,
          styles.rectangle395IconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle3951.png")}
      />
      <Text
        style={[styles.joinGroup1, styles.joinGroupTypo, styles.joinGroupTypo1]}
      >
        Join Group
      </Text>
      <Text
        style={[styles.joinGroup1, styles.joinGroupTypo, styles.joinGroupTypo1]}
      >
        Join Group
      </Text>
  
      
      <Image
        style={[styles.rectangleIcon1, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle2.png")}
      />
      {/*
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
              <Text style={[styles.forum1, styles.text3Typo]}>Forum</Text>
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
              <Text style={[styles.forum1, styles.text3Typo]}>Events</Text>
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
              <Text style={[styles.forum1, styles.text3Typo]}>Social</Text>
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
              <Text style={styles.studyGroup}>
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
              <Text style={[styles.forum1, styles.text3Typo]}>Profile</Text>
            </View>
          </TouchableOpacity>
      
        </View>
      </View>
      */}
    </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  Content: {
    height: '400px', /* Or any fixed height that suits your design */
    overflow: 'auto' /* This will add a scrollbar to the container when the content exceeds the height */
  },
  mt2: {
    marginTop: 2,
  },
  rectangleShadowBox: {
    height: 207,
    width: 379,
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
  home03IconLayout: {
    height: 24,
    width: 24,
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
  text3Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  joinGroupTypo: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.white,
    textTransform: "capitalize",
    letterSpacing: 1,
  },
  joinGroupTypo1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
  },
  rectangle395IconLayout: {
    width: 98,
    borderRadius: Border.br_3xs,
    height: 40,
  },
  rectangleIconLayout: {
    height: 127,
    width: 135,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  rectangle395Icon1Position: {
    left: 236,
    position: "absolute",
  },
  homeFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_2xl,
    width: 76,
    backgroundColor: Color.gray_300,
    alignItems: "center",
  },
  rectangle: {
    top: 211,
    left: 15,
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
    position: "absolute",
  },
  studyGroupsChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  studyGroupsItem: {
    top: 101,
    left: 1,
    width: 410,
    height: 1,
    position: "absolute",
  },
  studyGroups1: {
    top: 127,
    left: 21,
    fontSize: FontSize.size_3xl,
    textAlign: "center",
    color: Color.skyblue_100,
    textTransform: "capitalize",
    letterSpacing: 1,
    fontFamily: FontFamily.robotoMedium,
    position: "absolute",
  },
  advancedProgramming: {
    top: 236,
    left: 224,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  daysMondays: {
    top: 293,
    left: 182,
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  rectangle395Icon: {
    top: 371,
    left: 231,
    height: 40,
    position: "absolute",
  },
  joinGroup: {
    top: 382,
    left: 238,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  makeNewGroup: {
    top: 10,
    left: 19,
    fontSize: FontSize.size_smi,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    display: "flex",
    width: 188,
    alignItems: "center",
    textAlign: "left",
    height: 40,
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  rectangle1: {
    top: 3,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: 148,
    height: 34,
    position: "absolute",
  },
  makeNewGroupParent: {
    top: 128,
    left: 242,
    width: 207,
    height: 40,
    position: "absolute",
  },
  rectangleIcon: {
    top: 250,
    left: 30,
  },
  rectangle2: {
    top: 461,
    left: 20,
  },
  softwareEngineering: {
    top: 486,
    color: Color.white,
    textAlign: "center",
  },
  daysMondays1: {
    top: 543,
    left: 187,
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  rectangle395Icon1: {
    top: 621,
    height: 40,
  },
  joinGroup1: {
    top: 632,
    left: 243,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  rectangleIcon1: {
    top: 500,
    left: 29,
  },
  forum1: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.white,
  },
  forum: {
    flexDirection: "row",
  },
  home: {
    borderTopLeftRadius: Border.br_11xs,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  study: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  studyGroup: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.skyblue_100,
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
    top: 773,
    left: 16,
    width: 380,
    position: "absolute",
  },
  studyGroups: {
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

export default StudyGroups;
