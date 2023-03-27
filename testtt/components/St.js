import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const St = ({ style }) => {
  return (
    <View style={[styles.st, style]}>
      <View style={styles.iconsHead}>
        <View style={[styles.home, styles.homeFlexBox]}>
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/home03.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={styles.forum1}>Forum</Text>
          </View>
        </View>
        <View style={styles.homeFlexBox}>
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/iconoutlinespeaker.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={[styles.eventsTypo, styles.text3Typo]}>Events</Text>
          </View>
        </View>
        <View style={styles.homeFlexBox}>
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/box.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={styles.text3Typo}>Social</Text>
          </View>
        </View>
        <View style={styles.homeFlexBox}>
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/iconoutlinebookopen.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={styles.eventsTypo}>
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
        <View style={[styles.more, styles.homeFlexBox]}>
          <Image
            style={styles.home03Icon}
            resizeMode="cover"
            source={require("../assets/morehorizontal.png")}
          />
          <View style={[styles.forum, styles.mt2]}>
            <Text style={styles.text3Typo}>More</Text>
          </View>
        </View>
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
  forum1: {
    color: Color.skyblue_100,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  forum: {
    flexDirection: "row",
  },
  home: {
    borderTopLeftRadius: Border.br_11xs,
  },
  eventsTypo: {
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_xs,
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
