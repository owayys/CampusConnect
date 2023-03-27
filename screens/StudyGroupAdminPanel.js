import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const StudyGroupAdminPanel = () => {
  return (
    <View style={styles.studyGroupAdminPanel}>
      <Text style={styles.mcBastek}>MC Bastek</Text>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Text style={[styles.shehryarKhan, styles.jafferIqbalTypo]}>
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
      <Text style={[styles.mustafaAliMirza, styles.jafferIqbalTypo]}>
        Mustafa Ali Mirza
      </Text>
      <Image
        style={[styles.imageIcon3, styles.imageIconLayout1]}
        resizeMode="cover"
        source={require("../assets/image3.png")}
      />
      <Text style={[styles.asherJavaid, styles.owaisAhsanTypo]}>
        Asher Javaid
      </Text>
      <Image
        style={[styles.imageIcon4, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image4.png")}
      />
      <View style={styles.rectangle395} />
      <View style={styles.rectangle395} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.studyGroupAdminPanelChild, styles.studyGroupPosition]}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.studyGroupAdminPanelItem, styles.studyGroupPosition]}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.studyGroupAdminPanelInner, styles.studyGroupPosition]}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.studyGroupAdminPanelChild1, styles.studyGroupPosition]}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={[styles.jafferIqbal, styles.jafferIqbalTypo]}>
        Jaffer Iqbal
      </Text>
      <Image
        style={[styles.imageIcon5, styles.imageIconLayout]}
        resizeMode="cover"
        source={require("../assets/image5.png")}
      />
      <Text
        style={[
          styles.participants,
          styles.participantsFlexBox,
          styles.participantsTypo,
        ]}
      >
        Participants
      </Text>
      <View style={[styles.group, styles.groupLayout]}>
        <View
          style={[
            styles.rectangle3952,
            styles.rectangleBorder,
            styles.groupLayout,
            styles.rectanglePosition,
          ]}
        />
        <Text style={[styles.deleteStudyGroup, styles.changeSettingsTypo]}>
          Delete Study Group
        </Text>
      </View>
      <View style={[styles.group1, styles.group1Layout]}>
        <View
          style={[
            styles.rectangle3953,
            styles.group1Layout,
            styles.rectangleBorder,
            styles.rectanglePosition,
          ]}
        />
        <Text style={[styles.changeSettings, styles.changeSettingsTypo]}>
          Change Settings
        </Text>
      </View>
      <Text
        style={[
          styles.seStudyGroup,
          styles.participantsFlexBox,
          styles.participantsTypo,
        ]}
      >
        SE Study Group
      </Text>
      <View style={styles.homeBar} />
      <View style={styles.viewRequestsParent}>
        <Text style={[styles.viewRequests, styles.participantsFlexBox]}>
          View Requests
        </Text>
        <View style={[styles.rectangle, styles.rectangleBorder]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jafferIqbalTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  imageIconLayout1: {
    height: 116,
    width: 116,
    left: 27,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  owaisAhsanTypo: {
    left: 237,
    fontSize: FontSize.size_lg,
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    letterSpacing: 1,
    position: "absolute",
  },
  imageIconLayout: {
    height: 96,
    width: 96,
    left: 21,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  studyGroupPosition: {
    left: 42,
    height: 40,
    width: 320,
    position: "absolute",
  },
  participantsFlexBox: {
    textAlign: "left",
    color: Color.white,
    letterSpacing: 1,
    position: "absolute",
  },
  participantsTypo: {
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
    textAlign: "left",
    left: 38,
  },
  groupLayout: {
    width: 185,
    height: 40,
    position: "absolute",
  },
  rectangleBorder: {
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rectanglePosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  changeSettingsTypo: {
    top: 11,
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  group1Layout: {
    width: 130,
    height: 40,
    position: "absolute",
  },
  mcBastek: {
    top: 871,
    left: 271,
    textAlign: "right",
    color: Color.white,
    letterSpacing: 1,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoRegular,
    textTransform: "capitalize",
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
    top: 726,
    left: 223,
  },
  imageIcon1: {
    top: 704,
  },
  owaisAhsan: {
    top: 602,
  },
  imageIcon2: {
    top: 570,
  },
  mustafaAliMirza: {
    top: 474,
    left: 194,
  },
  imageIcon3: {
    top: 452,
  },
  asherJavaid: {
    top: 346,
  },
  imageIcon4: {
    top: 314,
  },
  rectangle395: {
    top: 267,
    left: 43,
    backgroundColor: Color.darkslategray_100,
    borderColor: "#f18303",
    height: 40,
    width: 320,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupIcon: {
    top: 279,
    left: 187,
    width: 15,
    height: 18,
    position: "absolute",
  },
  studyGroupAdminPanelChild: {
    top: 399,
  },
  studyGroupAdminPanelItem: {
    top: 771,
  },
  studyGroupAdminPanelInner: {
    top: 651,
  },
  studyGroupAdminPanelChild1: {
    top: 524,
  },
  jafferIqbal: {
    top: 218,
    left: 249,
  },
  imageIcon5: {
    top: 186,
  },
  participants: {
    top: 169,
    fontSize: FontSize.size_xl,
    left: 38,
  },
  rectangle3952: {
    backgroundColor: "rgba(255, 77, 77, 0.6)",
    borderColor: "#d12727",
    top: 0,
  },
  deleteStudyGroup: {
    left: 20,
  },
  group: {
    left: 178,
    top: 106,
  },
  rectangle3953: {
    backgroundColor: Color.deepskyblue,
    borderColor: "#03a9f1",
    top: 0,
  },
  changeSettings: {
    left: 3,
  },
  group1: {
    top: 106,
    left: 38,
  },
  seStudyGroup: {
    top: 59,
    fontSize: FontSize.size_3xl,
    left: 38,
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
  viewRequests: {
    left: 13,
    fontSize: FontSize.size_smi,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    display: "flex",
    alignItems: "center",
    width: 112,
    top: 0,
    height: 40,
  },
  rectangle: {
    top: 7,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderColor: "#4ec6e0",
    width: 119,
    height: 26,
    position: "absolute",
  },
  viewRequestsParent: {
    top: 160,
    left: 243,
    width: 125,
    height: 40,
    position: "absolute",
  },
  studyGroupAdminPanel: {
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

export default StudyGroupAdminPanel;
