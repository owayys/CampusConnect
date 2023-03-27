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
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const ForumsTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forumsTab}>
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
        style={styles.forumsTabChild}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={[styles.tweet, styles.tweetPosition]}>
        <View style={[styles.background, styles.backgroundShadowBox]} />
        <Image
          style={styles.heartSolidIcon}
          resizeMode="cover"
          source={require("../assets/heart-solid-icon.png")}
        />
        <Image
          style={[styles.imageIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image22.png")}
        />
        <Image
          style={styles.imageIcon2}
          resizeMode="cover"
          source={require("../assets/image23.png")}
        />
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line.png")}
        />
        <TouchableOpacity
          style={[styles.downArrowIcon, styles.downIconLayout]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ForumsTabPostSettings")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/down-arrow-icon.png")}
          />
        </TouchableOpacity>
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
          <Text style={[styles.text1, styles.textTypo, styles.textPosition]}>
            28
          </Text>
          <Text style={[styles.text2, styles.textTypo, styles.textPosition]}>
            21
          </Text>
        </View>
      </View>
      <Image
        style={[styles.forumsTabItem, styles.forumsLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.forumsTabInner, styles.forumsLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.forumsLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.forumsTabChild1, styles.forumsLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={[styles.tweet1, styles.tweetPosition]}>
        <View style={[styles.background1, styles.backgroundShadowBox]} />
        <TouchableOpacity
          style={[styles.downArrowIcon1, styles.downIconLayout]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ForumsTabPostSettings")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/down-arrow-icon.png")}
          />
        </TouchableOpacity>
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
          style={styles.imageIcon3}
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
          <Text style={[styles.text1, styles.textTypo, styles.textPosition]}>
            19
          </Text>
          <Text style={[styles.text2, styles.textTypo, styles.textPosition]}>
            37
          </Text>
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-116.png")}
      />
      <TouchableOpacity
        style={styles.addFriendsToSeeMorePostsParent}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Socials")}
      >
        <Text style={styles.addFriendsTo}>Add Friends to see more posts</Text>
        <View style={styles.rectangle} />
      </TouchableOpacity>
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
              source={require("../assets/home031.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.forum1, styles.text8Typo, styles.textTypo]}>
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
              <Text style={[styles.events, styles.text8Typo, styles.textTypo]}>
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
              <Text style={[styles.events, styles.text8Typo, styles.textTypo]}>
                Social
              </Text>
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
              <Text style={[styles.studyGroup, styles.textTypo]}>
                <Text style={styles.study}>Study</Text>
                <Text style={styles.text8Typo}>{` `}</Text>
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
              <Text style={[styles.events, styles.text8Typo, styles.textTypo]}>
                Profile
              </Text>
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
  tweetPosition: {
    right: "-0.98%",
    width: "100.98%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  backgroundShadowBox: {
    width: 414,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#ced5dc",
    backgroundColor: Color.gray_300,
    top: 0,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  iconLayout: {
    height: 58,
    width: 58,
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
    textAlign: "left",
    letterSpacing: 0,
    left: 83,
    position: "absolute",
  },
  yallReadyForPosition: {
    top: 50,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    left: 83,
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
    textAlign: "left",
  },
  textPosition: {
    bottom: 0,
    fontSize: FontSize.size_xs,
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  forumsLayout: {
    height: 1,
    width: 410,
    left: 1,
    position: "absolute",
  },
  homeFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_2xl,
    width: 76,
    alignItems: "center",
    backgroundColor: Color.gray_300,
  },
  text8Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  imageIcon: {
    top: 57,
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
  forumsTabChild: {
    top: 64,
    left: 355,
    width: 7,
    height: 7,
    position: "absolute",
  },
  background: {
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
    borderRadius: Border.br_11xl,
  },
  imageIcon2: {
    top: 159,
    left: 30,
    width: 33,
    height: 33,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  lineIcon: {
    top: 90,
    left: 46,
    width: 2,
    height: 68,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  downArrowIcon: {
    top: 35,
  },
  asherJavaidAnd: {
    top: 10,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: 0,
    left: 83,
    color: Color.silver,
    fontFamily: FontFamily.poppinsRegular,
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
  forumsTabItem: {
    top: 101,
  },
  forumsTabInner: {
    top: 408,
  },
  vectorIcon: {
    top: 746,
  },
  forumsTabChild1: {
    top: 317,
  },
  background1: {
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
    borderRadius: Border.br_11xl,
    position: "absolute",
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
  frameIcon: {
    top: 682,
    left: 333,
  },
  addFriendsTo: {
    left: 13,
    fontSize: FontSize.size_smi,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    display: "flex",
    width: 242,
    alignItems: "center",
    height: 29,
    color: Color.white,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  rectangle: {
    top: 5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: 228,
    height: 19,
    left: 0,
    position: "absolute",
  },
  addFriendsToSeeMorePostsParent: {
    top: 422,
    left: 84,
    width: 255,
    height: 29,
    position: "absolute",
  },
  forum1: {
    color: Color.skyblue_100,
  },
  forum: {
    flexDirection: "row",
  },
  home: {
    borderTopLeftRadius: Border.br_11xs,
  },
  events: {
    color: Color.white,
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
    top: 768,
    left: 14,
    width: 380,
    position: "absolute",
  },
  forumsTab: {
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

export default ForumsTab;
