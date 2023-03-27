import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Socials = () => {
  return (
    <View style={styles.socials}>
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
        style={styles.socialsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.socialsItem}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={[styles.group, styles.groupLayout]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.addFriendTypo]}>Add Friend</Text>
      </View>
      <Text style={styles.socials1}>Socials</Text>
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
      <View style={[styles.group1, styles.groupLayout]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.addFriendTypo]}>Add Friend</Text>
      </View>
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
      <View style={[styles.group2, styles.groupPosition]}>
        <View style={[styles.rectangle395, styles.rectangleLayout]} />
        <Text style={[styles.addFriend, styles.addFriendTypo]}>Add Friend</Text>
      </View>
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
        <Text style={[styles.addFriend, styles.addFriendTypo]}>Add Friend</Text>
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
        <Text style={[styles.addFriend, styles.addFriendTypo]}>Add Friend</Text>
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
      <View
        style={[
          styles.rectangle,
          styles.suggestedPosition,
          styles.rectangleLayout,
        ]}
      />
      <Text style={[styles.searchForFriends, styles.addFriendTypo]}>
        Search for friends...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  addFriendTypo: {
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 1,
    position: "absolute",
  },
  suggestedTypo: {
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  jafferIqbalPosition: {
    left: 116,
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
  imageIcon: {
    top: 58,
    left: 27,
    borderRadius: Border.br_31xl,
    width: 38,
    height: 38,
    position: "absolute",
  },
  iconoutlinemessageCircle: {
    top: 66,
    left: 340,
    width: 24,
    height: 24,
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
    textAlign: "right",
    color: Color.white,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
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
    color: Color.skyblue_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 1,
    position: "absolute",
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
    textAlign: "left",
  },
  suggested: {
    top: 237,
    textAlign: "left",
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
    textAlign: "left",
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
    textAlign: "left",
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
  searchForFriends: {
    height: "1.91%",
    width: "66.1%",
    top: "22.67%",
    left: "9.02%",
    fontSize: FontSize.size_sm,
    color: Color.gray_400,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "left",
  },
  socials: {
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

export default Socials;
