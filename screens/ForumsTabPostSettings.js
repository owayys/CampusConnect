import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ForumsTabPostSettings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forumsTabPostSettings}>
      <View style={styles.retweetMenu}>
        <View style={styles.background} />
        <View style={styles.rectangle} />
        <Pressable style={[styles.row, styles.rowLayout]}>
          <View style={styles.background1} />
          <Text style={[styles.deletePost, styles.cancelTypo]}>
            Delete Post
          </Text>
          <View style={styles.color}>
            <View style={[styles.base, styles.basePosition]} />
          </View>
          <Image
            style={[styles.iconoutlinetrash2, styles.iconoutlinetrash2Layout]}
            resizeMode="cover"
            source={require("../assets/iconoutlinetrash2.png")}
          />
        </Pressable>
        <Pressable style={[styles.row1, styles.rowLayout]}>
          <View style={styles.background1} />
          <Image
            style={[styles.penStrokeIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/pen-stroke-icon.png")}
          />
          <Text style={[styles.deletePost, styles.cancelTypo]}>Edit Post</Text>
        </Pressable>
      </View>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <TouchableOpacity
        style={[
          styles.iconoutlinemessageCircle,
          styles.iconoutlinetrash2Layout,
        ]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("OuterChatInterface")}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <TouchableOpacity
          style={styles.basePosition}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <TouchableOpacity
            style={[styles.base1, styles.basePosition]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("OuterChatInterface")}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <Image
        style={styles.forumsTabPostSettingsChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={[styles.tweet, styles.tweetPosition]}>
        <View style={[styles.background3, styles.backgroundShadowBox]} />
        <Image
          style={styles.heartSolidIcon}
          resizeMode="cover"
          source={require("../assets/heart-solid-icon.png")}
        />
        <Image
          style={[styles.imageIcon1, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image22.png")}
        />
        <Image
          style={[styles.imageIcon2, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image23.png")}
        />
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={[styles.downArrowIcon, styles.downIconLayout]}
          resizeMode="cover"
          source={require("../assets/down-arrow-icon.png")}
        />
        <Text style={styles.asherJavaidAnd}>
          Asher Javaid and Owais Ahsan liked
        </Text>
        <Text
          style={[styles.jafferIqbalJafferIqbalContainer, styles.jafferTypo]}
        >
          <Text style={styles.jafferIqbal}>Jaffer Iqbal</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.jafferIqbal9h}>@jaffer_iqbal ·9h</Text>
        </Text>
        <Text
          style={[styles.uxruxYouCanContainer, styles.yallReadyForPosition]}
        >
          <Text
            style={styles.uxruxYouCan}
          >{`UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? `}</Text>
          <Text style={styles.tellmeaboutyou}>#TellMeAboutYou</Text>
        </Text>
        <Text style={[styles.showThisThread, styles.jafferTypo]}>
          Show this thread
        </Text>
        <View style={[styles.actionButtons, styles.actionLayout]}>
          <Image
            style={[styles.heartStrokeIcon, styles.strokeIconPosition]}
            resizeMode="cover"
            source={require("../assets/heart-stroke-icon.png")}
          />
          <Image
            style={[styles.commentStrokeIcon, styles.strokeIconPosition]}
            resizeMode="cover"
            source={require("../assets/comment-stroke-icon.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>28</Text>
          <Text style={[styles.text2, styles.textTypo]}>21</Text>
        </View>
      </View>
      <Image
        style={[styles.forumsTabPostSettingsItem, styles.forumsLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.forumsTabPostSettingsInner, styles.forumsLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={[styles.tweet1, styles.tweetPosition]}>
        <View style={[styles.background4, styles.backgroundShadowBox]} />
        <Image
          style={[styles.downArrowIcon1, styles.downIconLayout]}
          resizeMode="cover"
          source={require("../assets/down-arrow-icon.png")}
        />
        <Text
          style={[styles.jafferIqbalJafferIqbalContainer, styles.jafferTypo]}
        >
          <Text style={styles.jafferIqbal}>Mustafa Ali</Text>
          <Text style={styles.mustafa24612h}>
            <Text>{` `}</Text>
            <Text style={styles.mustafa24612h1}>@mustafa_246 ·12h</Text>
          </Text>
        </Text>
        <Text style={[styles.yallReadyFor, styles.yallReadyForPosition]}>
          Y’all ready for this next post?
        </Text>
        <Image
          style={[styles.imageIcon3, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image24.png")}
        />
        <View style={[styles.actionButtons1, styles.actionLayout]}>
          <Image
            style={[styles.heartStrokeIcon, styles.strokeIconPosition]}
            resizeMode="cover"
            source={require("../assets/heart-stroke-icon1.png")}
          />
          <Image
            style={[styles.commentStrokeIcon, styles.strokeIconPosition]}
            resizeMode="cover"
            source={require("../assets/comment-stroke-icon1.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>19</Text>
          <Text style={[styles.text2, styles.textTypo]}>37</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.rectangle395}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("ForumsTab")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle3953.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowLayout: {
    height: 60,
    left: 0,
    width: 414,
    position: "absolute",
    overflow: "hidden",
  },
  cancelTypo: {
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
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
  iconoutlinetrash2Layout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  tweetPosition: {
    right: "-0.98%",
    width: "100.98%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  backgroundShadowBox: {
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#ced5dc",
    backgroundColor: Color.gray_300,
    left: 0,
    top: 0,
    width: 414,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  imageIconLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  downIconLayout: {
    height: 6,
    width: 10,
    left: 384,
    position: "absolute",
  },
  jafferTypo: {
    fontSize: FontSize.size_base,
    left: 83,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  yallReadyForPosition: {
    top: 50,
    fontSize: FontSize.size_base,
    left: 83,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  actionLayout: {
    height: 18,
    position: "absolute",
  },
  strokeIconPosition: {
    width: 15,
    bottom: 3,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    bottom: 0,
    position: "absolute",
  },
  forumsLayout: {
    height: 1,
    width: 410,
    left: 1,
    position: "absolute",
  },
  background: {
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.slategray,
    top: 0,
    left: 0,
    height: 235,
    width: 414,
    position: "absolute",
  },
  rectangle: {
    top: 6,
    left: 189,
    borderRadius: 3,
    backgroundColor: "#e7ecf0",
    width: 36,
    height: 5,
    position: "absolute",
  },
  background1: {
    right: 0,
    bottom: 0,
    backgroundColor: Color.slategray,
    left: 0,
    top: 0,
    position: "absolute",
  },
  deletePost: {
    top: 19,
    color: Color.gainsboro_100,
    left: 68,
  },
  base: {
    backgroundColor: "#0d1c2e",
  },
  color: {
    height: "40%",
    width: "5.8%",
    top: "148.33%",
    right: "47.1%",
    bottom: "-88.33%",
    left: "47.1%",
    position: "absolute",
  },
  iconoutlinetrash2: {
    top: 21,
    left: 25,
  },
  row: {
    top: 16,
  },
  penStrokeIcon: {
    top: 20,
    left: 26,
    position: "absolute",
  },
  row1: {
    top: 76,
  },
  retweetMenu: {
    top: 603,
    height: 235,
    width: 414,
    left: 1,
    position: "absolute",
  },
  imageIcon: {
    top: 57,
    left: 27,
    borderRadius: Border.br_31xl,
    width: 38,
    height: 38,
    position: "absolute",
  },
  base1: {
    backgroundColor: Color.white,
  },
  iconoutlinemessageCircle: {
    top: 66,
    left: 340,
  },
  forumsTabPostSettingsChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  background3: {
    height: 199,
  },
  heartSolidIcon: {
    top: 13,
    left: 62,
    width: 12,
    height: 11,
    position: "absolute",
  },
  imageIcon1: {
    top: 31,
    left: 18,
    width: 58,
    height: 58,
  },
  imageIcon2: {
    top: 159,
    left: 30,
    width: 33,
    height: 33,
  },
  lineIcon: {
    top: 90,
    left: 46,
    width: 2,
    height: 68,
    position: "absolute",
  },
  downArrowIcon: {
    top: 35,
  },
  asherJavaidAnd: {
    top: 10,
    fontSize: FontSize.size_sm,
    color: Color.silver,
    left: 83,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  jafferIqbal: {
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.white,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.red_200,
  },
  jafferIqbal9h: {
    color: Color.silver,
    fontFamily: FontFamily.poppinsRegular,
  },
  jafferIqbalJafferIqbalContainer: {
    top: 29,
  },
  uxruxYouCan: {
    color: Color.white,
  },
  tellmeaboutyou: {
    color: Color.cornflowerblue,
  },
  uxruxYouCanContainer: {
    lineHeight: 21,
    width: 302,
    height: 82,
  },
  showThisThread: {
    top: 168,
    color: Color.cornflowerblue,
    fontFamily: FontFamily.poppinsRegular,
  },
  heartStrokeIcon: {
    left: 49,
    height: 14,
  },
  commentStrokeIcon: {
    height: 15,
    left: 0,
    width: 15,
    bottom: 3,
  },
  text1: {
    left: 19,
  },
  text2: {
    left: 68,
  },
  actionButtons: {
    bottom: 40,
    left: 85,
    width: 79,
  },
  tweet: {
    height: "23.87%",
    top: "13.48%",
    bottom: "62.65%",
  },
  forumsTabPostSettingsItem: {
    top: 101,
  },
  forumsTabPostSettingsInner: {
    top: 317,
  },
  background4: {
    height: 105,
  },
  downArrowIcon1: {
    top: 36,
  },
  mustafa24612h1: {
    fontFamily: FontFamily.poppinsRegular,
  },
  mustafa24612h: {
    color: Color.silver,
  },
  yallReadyFor: {
    color: Color.white,
  },
  imageIcon3: {
    top: 27,
    left: 17,
    width: 59,
    height: 59,
  },
  actionButtons1: {
    bottom: 8,
    left: 88,
    width: 82,
  },
  tweet1: {
    height: "12.65%",
    top: "35.44%",
    bottom: "51.91%",
  },
  icon: {
    borderRadius: Border.br_3xs,
    height: "100%",
    width: "100%",
  },
  rectangle395: {
    left: 51,
    top: 753,
    width: 313,
    height: 40,
    position: "absolute",
  },
  cancel: {
    top: 759,
    left: 173,
    width: 106,
    height: 21,
    color: Color.white,
  },
  forumsTabPostSettings: {
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

export default ForumsTabPostSettings;
