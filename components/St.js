import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const St = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.st, style]}>
      <View style={styles.iconsHead}>
        <TouchableOpacity
          style={[styles.home, styles.homeFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ForumsTab")}
        >
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/home03.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={[styles.forum1Typo, styles.text3Typo]}>Forum</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeFlexBox}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Events")}
        >
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/iconoutlinespeaker.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={styles.text3Typo}>Events</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.homeFlexBox}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Socials")}
        >
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/box.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={styles.text3Typo}>Social</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.homeFlexBox}>
          <TouchableOpacity
            style={styles.home03Icon}
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
            <Text style={styles.forum1Typo}>
              <Text style={styles.study}>Study</Text>
              <Text style={styles.text3Typo}>{` `}</Text>
              <Text style={styles.study}>Group</Text>
            </Text>
          </View>
          <Image
            style={[styles.home03Icon, styles.mt2]}
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
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/morehorizontal.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={styles.text3Typo}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  homeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_2xl,
    width: 76,
    backgroundColor: Color.gray_300,
  },
  text3Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  home03Icon: {
    width: 24,
    height: 24,
  },
  forum1Typo: {
    textAlign: "left",
    color: Color.white,
    fontSize: FontSize.size_xs,
  },
  forum: {
    flexDirection: "row",
  },
  home: {
    borderTopLeftRadius: Border.br_11xs,
  },
  icon: {
    width: "100%",
    height: "100%",
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
    width: 380,
  },
});

export default St;
