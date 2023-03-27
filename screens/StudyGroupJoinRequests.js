import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const StudyGroupJoinRequests = () => {
  return (
    <View style={[styles.studyGroupJoinRequests, styles.rectangleShadowBox]}>
      <View style={[styles.rectangle, styles.rectangleShadowBox]} />
      <Text style={styles.mcBastek}>MC Bastek</Text>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Text style={[styles.shehryarKhan, styles.mustafaAliTypo]}>
        Shehryar Khan
      </Text>
      <Image
        style={[styles.imageIcon1, styles.imageIconLayout1]}
        resizeMode="cover"
        source={require("../assets/image1.png")}
      />
      <Text style={[styles.owaisAhsan, styles.owaisAhsanTypo]}>
        Owais Ahsan
      </Text>
      <Image
        style={[styles.imageIcon2, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image2.png")}
      />
      <Text style={[styles.mustafaAli, styles.mustafaAliTypo]}>
        Mustafa Ali
      </Text>
      <Image
        style={[styles.imageIcon3, styles.imageIconLayout1]}
        resizeMode="cover"
        source={require("../assets/image3.png")}
      />
      <Text style={[styles.asherJavaid, styles.mustafaAliTypo]}>
        Asher Javaid
      </Text>
      <Image
        style={[styles.imageIcon4, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image4.png")}
      />
      <Text style={[styles.jafferIqbal, styles.mustafaAliTypo]}>
        Jaffer Iqbal
      </Text>
      <Image
        style={[styles.imageIcon5, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image5.png")}
      />
      <Text style={[styles.joinRequests, styles.owaisAhsanTypo]}>
        Join Requests
      </Text>
      <Text style={[styles.seStudyGroup, styles.owaisAhsanTypo]}>
        SE Study Group
      </Text>
      <View style={styles.homeBar} />
      <Image
        style={[styles.tcikButtonIcon, styles.buttonIconLayout]}
        resizeMode="cover"
        source={require("../assets/tcik-button.png")}
      />
      <Image
        style={[styles.crossButtonIcon, styles.buttonIconLayout]}
        resizeMode="cover"
        source={require("../assets/cross-button.png")}
      />
      <Image
        style={[styles.tcikButtonIcon, styles.buttonIconLayout]}
        resizeMode="cover"
        source={require("../assets/tcik-button.png")}
      />
      <Image
        style={[styles.crossButtonIcon, styles.buttonIconLayout]}
        resizeMode="cover"
        source={require("../assets/cross-button.png")}
      />
      <Image
        style={[styles.tcikButtonIcon2, styles.buttonIconPosition3]}
        resizeMode="cover"
        source={require("../assets/tcik-button.png")}
      />
      <Image
        style={[styles.crossButtonIcon2, styles.buttonIconPosition3]}
        resizeMode="cover"
        source={require("../assets/cross-button.png")}
      />
      <Image
        style={[styles.tcikButtonIcon3, styles.buttonIconPosition2]}
        resizeMode="cover"
        source={require("../assets/tcik-button.png")}
      />
      <Image
        style={[styles.crossButtonIcon3, styles.buttonIconPosition2]}
        resizeMode="cover"
        source={require("../assets/cross-button.png")}
      />
      <Image
        style={[styles.tcikButtonIcon4, styles.buttonIconPosition1]}
        resizeMode="cover"
        source={require("../assets/tcik-button.png")}
      />
      <Image
        style={[styles.crossButtonIcon4, styles.buttonIconPosition1]}
        resizeMode="cover"
        source={require("../assets/cross-button.png")}
      />
      <Image
        style={[styles.tcikButtonIcon5, styles.buttonIconPosition]}
        resizeMode="cover"
        source={require("../assets/tcik-button.png")}
      />
      <Image
        style={[styles.crossButtonIcon5, styles.buttonIconPosition]}
        resizeMode="cover"
        source={require("../assets/cross-button.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 40,
      height: 40,
    },
  },
  mustafaAliTypo: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 118,
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  imageIconLayout1: {
    height: 116,
    width: 116,
    left: 32,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  owaisAhsanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  imageIconLayout: {
    height: 96,
    width: 96,
    left: 26,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  buttonIconLayout: {
    height: 40,
    width: 43,
    top: 216,
    position: "absolute",
  },
  buttonIconPosition3: {
    top: 303,
    height: 40,
    width: 43,
    position: "absolute",
  },
  buttonIconPosition2: {
    top: 378,
    height: 40,
    width: 43,
    position: "absolute",
  },
  buttonIconPosition1: {
    top: 462,
    height: 40,
    width: 43,
    position: "absolute",
  },
  buttonIconPosition: {
    top: 550,
    height: 40,
    width: 43,
    position: "absolute",
  },
  rectangle: {
    top: 124,
    left: 18,
    borderRadius: Border.br_10xl,
    backgroundColor: Color.gray_600,
    shadowColor: "rgba(0, 0, 0, 0.45)",
    shadowRadius: 34,
    elevation: 34,
    width: 362,
    height: 590,
    position: "absolute",
  },
  mcBastek: {
    top: 871,
    left: 271,
    fontSize: FontSize.size_mini,
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  imageIcon: {
    top: 838,
    left: 23,
    width: 92,
    height: 44,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  shehryarKhan: {
    top: 556,
    width: 146,
    height: 23,
  },
  imageIcon1: {
    top: 536,
  },
  owaisAhsan: {
    top: 472,
    fontSize: FontSize.size_lg,
    left: 118,
    textAlign: "left",
    color: Color.white,
  },
  imageIcon2: {
    top: 443,
  },
  mustafaAli: {
    top: 388,
    width: 165,
  },
  imageIcon3: {
    top: 371,
  },
  asherJavaid: {
    top: 313,
    width: 162,
  },
  imageIcon4: {
    top: 279,
  },
  jafferIqbal: {
    top: 227,
    width: 169,
  },
  imageIcon5: {
    top: 195,
  },
  joinRequests: {
    top: 168,
    left: 43,
    fontSize: FontSize.size_xl,
    color: Color.white,
  },
  seStudyGroup: {
    top: 69,
    left: 35,
    fontSize: FontSize.size_3xl,
    color: Color.skyblue_100,
  },
  homeBar: {
    marginLeft: -77,
    bottom: 7,
    left: "50%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.white,
    width: 139,
    height: 5,
    position: "absolute",
  },
  tcikButtonIcon: {
    left: 267,
  },
  crossButtonIcon: {
    left: 317,
  },
  tcikButtonIcon2: {
    left: 267,
  },
  crossButtonIcon2: {
    left: 317,
  },
  tcikButtonIcon3: {
    left: 267,
  },
  crossButtonIcon3: {
    left: 317,
  },
  tcikButtonIcon4: {
    left: 267,
  },
  crossButtonIcon4: {
    left: 317,
  },
  tcikButtonIcon5: {
    left: 267,
  },
  crossButtonIcon5: {
    left: 317,
  },
  studyGroupJoinRequests: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.gray_200,
    shadowColor: "rgba(24, 48, 63, 0.5)",
    shadowRadius: 100,
    elevation: 100,
    flex: 1,
    width: "100%",
    height: 838,
    overflow: "hidden",
  },
});

export default StudyGroupJoinRequests;
