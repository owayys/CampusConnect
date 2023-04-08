import * as React from "react";
import {
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Socials = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.socials}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <View style={[styles.iconoutlinemessageCircle, styles.home03IconLayout]}>
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
        style={styles.socialsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.socialsItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Pressable style={[styles.group, styles.groupLayout]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.socials1Position]}>
          Add Friend
        </Text>
      </Pressable>
      <Text
        style={[styles.socials1, styles.socialTypo, styles.socials1Position]}
      >
        Socials
      </Text>
      <Image
        style={styles.imageIcon1}
        resizeMode="cover"
        source={require("../assets/image22.png")}
      />
      <Text
        style={[
          styles.jafferIqbal,
          styles.suggestedTypo,
          styles.jafferIqbalPosition,
        ]}
      >
        <Text style={styles.jafferIqbal1}>Jaffer Iqbal</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Text
        style={[
          styles.suggested,
          styles.suggestedPosition,
          styles.suggestedTypo,
        ]}
      >
        Suggested
      </Text>
      <Text
        style={[
          styles.interestsAnimeCoding,
          styles.interestsTypo1,
          styles.interestsTypo2,
        ]}
      >
        Interests: Anime, Coding
      </Text>
      <Pressable style={[styles.group1, styles.groupLayout]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.socials1Position]}>
          Add Friend
        </Text>
      </Pressable>
      <Text
        style={[
          styles.asherJavaid,
          styles.suggestedTypo,
          styles.jafferIqbalPosition,
        ]}
      >
        Asher Javaid
      </Text>
      <Text
        style={[
          styles.interestsCricketGym,
          styles.interestsTypo1,
          styles.interestsTypo2,
        ]}
      >
        Interests: Cricket, Gym
      </Text>
      <Pressable style={[styles.group2, styles.groupPosition]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.socials1Position]}>
          Add Friend
        </Text>
      </Pressable>
      <Text
        style={[
          styles.shehryarKhan,
          styles.suggestedTypo,
          styles.jafferIqbalPosition,
        ]}
      >
        Shehryar Khan
      </Text>
      <Text style={[styles.interestsHazriCoding, styles.interestsTypo1]}>
        Interests: Hazri, Coding
      </Text>
      <View style={[styles.group3, styles.groupPosition]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.socials1Position]}>
          Add Friend
        </Text>
      </View>
      <Text style={[styles.owaisAhsan, styles.owaisAhsanTypo]}>
        Owais Ahsan
      </Text>
      <Text style={[styles.interestsFootballReading, styles.interestsTypo]}>
        Interests: Football, Reading
      </Text>
      <Image
        style={[styles.imageIcon2, styles.imageIconLayout1]}
        resizeMode="cover"
        source={require("../assets/image4.png")}
      />
      <Image
        style={[styles.imageIcon3, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image1.png")}
      />
      <Image
        style={[styles.imageIcon4, styles.imageIconLayout1]}
        resizeMode="cover"
        source={require("../assets/image2.png")}
      />
      <View style={[styles.group4, styles.groupPosition]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.socials1Position]}>
          Add Friend
        </Text>
      </View>
      <Text style={[styles.mustafaAliMirza, styles.owaisAhsanTypo]}>
        Mustafa Ali Mirza
      </Text>
      <Text
        style={[styles.interestsFootballGym, styles.interestsTypo]}
      >{`Interests: Football, Gym
`}</Text>
      <Image
        style={[styles.imageIcon5, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image3.png")}
      />
      <TextInput
        style={[
          styles.rectangle,
          styles.suggestedPosition,
          styles.rectangleLayout,
        ]}
        placeholder="Search for friends..."
        keyboardType="default"
      />
      <View style={styles.st}>
        <View style={styles.iconsHead}>
          <TouchableOpacity
            style={[styles.home, styles.homeFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("ForumsTab")}
          >
            {/*
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/home03.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text
                style={[styles.forum1, styles.forum1Typo, styles.text4Typo]}
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
              <Text
                style={[styles.forum1, styles.forum1Typo, styles.text4Typo]}
              >
                Events
              </Text>
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
              <Text style={[styles.forum1Typo, styles.socialTypo]}>Social</Text>
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
              <Text style={[styles.studyGroup, styles.forum1Typo]}>
                <Text style={styles.study}>Study</Text>
                <Text style={styles.text4Typo}>{` `}</Text>
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
              <Text
                style={[styles.forum1, styles.forum1Typo, styles.text4Typo]}
              >
                Profile
              </Text>
            </View>
            */}
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
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
  groupLayout: {
    height: 40,
    width: 130,
    left: 269,
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_3xs,
    height: 40,
  },
  socials1Position: {
    letterSpacing: 1,
    position: "absolute",
  },
  socialTypo: {
    color: Color.skyblue_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  suggestedTypo: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  jafferIqbalPosition: {
    left: 116,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  suggestedPosition: {
    left: 19,
    position: "absolute",
  },
  interestsTypo1: {
    height: 43,
    width: 185,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  interestsTypo2: {
    left: 84,
    width: 185,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
  },
  groupPosition: {
    left: 266,
    height: 40,
    width: 130,
    position: "absolute",
  },
  owaisAhsanTypo: {
    left: 113,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.white,
    position: "absolute",
  },
  interestsTypo: {
    left: 81,
    height: 43,
    width: 185,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  imageIconLayout1: {
    height: 96,
    width: 93,
    borderRadius: Border.br_11xl,
    left: 0,
    position: "absolute",
  },
  imageIconLayout: {
    height: 116,
    width: 116,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  homeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_2xl,
    width: 76,
    backgroundColor: Color.gray_300,
  },
  forum1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  text4Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
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
  socialsChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  socialsItem: {
    top: 101,
    left: 1,
    width: 410,
    height: 1,
    position: "absolute",
  },
  rectangle395: {
    top: 0,
    backgroundColor: Color.deepskyblue,
    borderStyle: "solid",
    borderColor: "#03a9f1",
    borderWidth: 1,
    left: 0,
    borderRadius: Border.br_3xs,
    width: 130,
    position: "absolute",
  },
  addFriend: {
    top: 11,
    left: 28,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "right",
    color: Color.white,
    fontSize: FontSize.size_mini,
    letterSpacing: 1,
  },
  group: {
    top: 300,
  },
  socials1: {
    top: 127,
    left: 26,
    fontSize: FontSize.size_3xl,
    textTransform: "capitalize",
    textAlign: "center",
  },
  imageIcon1: {
    top: 284,
    left: 12,
    width: 58,
    height: 58,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  jafferIqbal1: {
    color: Color.white,
  },
  text: {
    color: Color.red_200,
  },
  jafferIqbal: {
    top: 298,
  },
  suggested: {
    top: 237,
    color: Color.white,
  },
  interestsAnimeCoding: {
    top: 320,
  },
  group1: {
    top: 404,
  },
  asherJavaid: {
    top: 402,
    color: Color.white,
  },
  interestsCricketGym: {
    top: 424,
  },
  group2: {
    top: 519,
  },
  shehryarKhan: {
    top: 511,
    color: Color.white,
  },
  interestsHazriCoding: {
    top: 538,
    left: 94,
  },
  group3: {
    top: 622,
  },
  owaisAhsan: {
    top: 620,
  },
  interestsFootballReading: {
    top: 642,
  },
  imageIcon2: {
    top: 373,
  },
  imageIcon3: {
    top: 496,
    left: 3,
  },
  imageIcon4: {
    top: 591,
  },
  group4: {
    top: 726,
  },
  mustafaAliMirza: {
    top: 724,
  },
  interestsFootballGym: {
    top: 746,
  },
  imageIcon5: {
    top: 706,
    left: 8,
  },
  rectangle: {
    top: 177,
    backgroundColor: Color.darkslategray_200,
    width: 340,
  },
  forum1: {
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
    color: Color.white,
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
    top: 777,
    left: 14,
    width: 380,
    position: "absolute",
  },
  socials: {
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

export default Socials;
