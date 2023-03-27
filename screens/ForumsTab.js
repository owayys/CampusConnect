import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const ForumsTab = () => {
  return (
    <View style={styles.forumsTab}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image21.png")}
      />
      <Image
        style={[styles.iconoutlinemessageCircle, styles.home03IconLayout]}
        resizeMode="cover"
        source={require("../assets/iconoutlinemessagecircle.png")}
      />
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
        <Image
          style={[styles.downArrowIcon, styles.downIconLayout]}
          resizeMode="cover"
          source={require("../assets/down-arrow-icon.png")}
        />
        <Text style={[styles.asherJavaidAnd, styles.ccPosition]}>
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
          <Text style={[styles.text1, styles.stPosition, styles.textTypo]}>
            28
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>21</Text>
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
          <Text style={[styles.text1, styles.stPosition, styles.textTypo]}>
            19
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>37</Text>
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-116.png")}
      />
      <View style={styles.lineParent}>
        <View style={[styles.frameChild, styles.rectangleBorder]} />
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/line-20.png")}
        />
        <View style={styles.frameInner} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.frameChild1, styles.lineViewLayout]} />
        <Text style={[styles.cc, styles.ccClr, styles.ccPosition]}>CC</Text>
      </View>
      <View style={[styles.st, styles.stPosition]}>
        <View style={styles.iconsHead}>
          <View style={[styles.home, styles.homeFlexBox]}>
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/home03.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.forum1, styles.text8Typo, styles.ccClr]}>
                Forum
              </Text>
            </View>
          </View>
          <View style={styles.homeFlexBox}>
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/iconoutlinespeaker.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.events, styles.text8Typo]}>Events</Text>
            </View>
          </View>
          <View style={styles.homeFlexBox}>
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/box.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.events, styles.text8Typo]}>Social</Text>
            </View>
          </View>
          <View style={styles.homeFlexBox}>
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/iconoutlinebookopen.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={styles.studyGroup}>
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
          <View style={[styles.more, styles.homeFlexBox]}>
            <Image
              style={styles.home03IconLayout}
              resizeMode="cover"
              source={require("../assets/morehorizontal.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.events, styles.text8Typo]}>More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.addFriendsToSeeMorePostsParent, styles.addLayout]}>
        <Text style={[styles.addFriendsTo, styles.addLayout]}>
          Add Friends to see more posts
        </Text>
        <View style={[styles.rectangle, styles.rectangleBorder]} />
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
  tweetPosition: {
    left: "0%",
    right: "-0.98%",
    width: "100.98%",
    position: "absolute",
    overflow: "hidden",
  },
  backgroundShadowBox: {
    width: 414,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#ced5dc",
    backgroundColor: Color.gray_300,
    left: 0,
    top: 0,
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
  ccPosition: {
    letterSpacing: 0,
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
  stPosition: {
    left: 19,
    position: "absolute",
  },
  textTypo: {
    bottom: 0,
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  forumsLayout: {
    width: 410,
    left: 1,
    height: 1,
    position: "absolute",
  },
  rectangleBorder: {
    borderColor: "#4ec6e0",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  lineViewLayout: {
    height: 8,
    width: 1,
    borderRightWidth: 1,
    borderColor: "#4ec6e0",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  ccClr: {
    color: Color.skyblue_100,
    textAlign: "left",
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
  addLayout: {
    height: 29,
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
  downArrowIcon: {
    top: 35,
  },
  asherJavaidAnd: {
    top: 10,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.silver,
    fontFamily: FontFamily.poppinsRegular,
    left: 83,
    letterSpacing: 0,
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
    fontSize: FontSize.size_xs,
  },
  text2: {
    left: 68,
    fontSize: FontSize.size_xs,
    position: "absolute",
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
    height: 1,
  },
  forumsTabInner: {
    top: 408,
    height: 1,
  },
  vectorIcon: {
    top: 746,
    height: 1,
  },
  forumsTabChild1: {
    top: 317,
    height: 1,
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
  frameChild: {
    borderTopWidth: 1,
    height: 1,
    top: 0,
    width: 24,
    borderStyle: "solid",
  },
  frameItem: {
    top: 18,
    width: 22,
    height: 1,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    left: 22,
    height: 20,
    width: 1,
    borderRightWidth: 1,
    borderColor: "#4ec6e0",
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  lineView: {
    top: 0,
  },
  frameChild1: {
    top: 12,
  },
  cc: {
    top: 3,
    left: 4,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.robotoRegular,
    width: 34,
    height: 10,
  },
  lineParent: {
    top: 70,
    left: 192,
    width: 23,
    height: 19,
    position: "absolute",
  },
  forum1: {
    fontSize: FontSize.size_xs,
  },
  forum: {
    flexDirection: "row",
  },
  home: {
    borderTopLeftRadius: Border.br_11xs,
  },
  events: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "left",
  },
  study: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  studyGroup: {
    fontSize: FontSize.size_xs,
    color: Color.white,
    textAlign: "left",
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
    top: 749,
    width: 380,
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
  },
  rectangle: {
    top: 5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderWidth: 1,
    width: 228,
    height: 19,
  },
  addFriendsToSeeMorePostsParent: {
    top: 422,
    left: 84,
    width: 255,
  },
  forumsTab: {
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

export default ForumsTab;
