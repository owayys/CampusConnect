import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const UserProfile = () => {
  const navigation = useNavigation();


  const studentInterests = [
    'Coding',
    'Playing video games',
    'Basketball',
    'Drawing',
    'Hiking',
    'Reading',
    'Singing',
    'Cooking',
    'Watching movies',
    'Dancing',
    'Traveling',
    'Listening to music',
  ];
  


  const Interests = () => {
    const rows = [];
    let row = [];
  
    for (let i = 0; i < studentInterests.length; i++) {
      const interest = studentInterests[i];
  
      if (i % 3 === 0 && i !== 0) {
        rows.push(
          <View style={styles.row} key={i}>
            {row}
          </View>
        );
        row = [];
      }
  
      row.push(
        <View style={styles.interest} key={i}>
          <Text style={styles.interestText}>{interest}</Text>
        </View>
      );
    }
  
    if (row.length > 0) {
      rows.push(
        <View style={styles.row} key={studentInterests.length}>
          {row}
        </View>
      );
    }
  
    return <View style={styles.container}>{rows}</View>;
  };








  return (
    <View style={styles.userProfile}>
      <View style={styles.backButton}>
           <Button 
             title="My Chats" 
             onPress={() => navigation.navigate("OuterChatInterface")}
             style={{backgroundColor:'navy blue'}} 
             color={"#4ec6e0"}
           />
      </View>
      
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image20.png")}
      />
      <Text style={[styles.ahmedLuqman, styles.aCsJuniorLayout]}>
        Ahmed Luqman
      </Text>
      <Text
        style={[styles.aCsJunior, styles.text3Typo, styles.aCsJuniorLayout]}
      >
        A CS Junior, who loves playing football and chess!!!
      </Text>
      <Text style={[styles.myProfile, styles.myProfileTypo]}>My Profile</Text>
      <Text style={[styles.myInterests, styles.myProfileTypo]}>
        My Interests
      </Text>
      <View style={styles.gradYear}>
        <Text style={[styles.graduation2024, styles.forum1Typo]}>
          Graduation: 2024
        </Text>
        <Image
          style={styles.iconoutlinecalendar}
          resizeMode="cover"
          source={require("../assets/iconoutlinecalendar.png")}
        />
      </View>
      {Interests()}
      {/* <View style={styles.interests}>
        <View
          style={[
            styles.rectangle,
            styles.rectangleLayout2,
            styles.rectangleLayout3,
          ]}
        />
        <Text style={[styles.football, styles.gymTypo]}>Football</Text>
        <View style={[styles.rectangle1, styles.rectangleLayout1]} />
        <Text style={[styles.gym, styles.gymTypo]}>Gym</Text>
        <View style={[styles.rectangle2, styles.rectangleLayout]} />
        <View style={[styles.rectangle3, styles.rectangleLayout]} />
        <Pressable style={[styles.editProfileParent, styles.rectangleLayout2]}>
          <Text style={[styles.editProfile, styles.gymTypo]}>Edit Profile</Text>
          <View style={styles.rectangle4} />
        </Pressable>
        <Text style={[styles.cooking, styles.gymTypo]}>Cooking</Text>
        <Text style={[styles.chess, styles.gymTypo]}>Chess</Text>
        <View
          style={[
            styles.rectangle5,
            styles.rectangleLayout2,
            styles.rectangleLayout3,
          ]}
        />
        <Text style={[styles.reading, styles.gymTypo]}>Reading</Text>
        <View style={[styles.rectangle6, styles.rectangleLayout1]} />
        <Text style={[styles.longWalks, styles.gymTypo]}>Long Walks</Text>
      </View> */}
      <Image
        style={[styles.userProfileChild, styles.userLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={[styles.userProfileItem, styles.userLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={styles.st}>
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
              <Text
                style={[styles.forum1Typo, styles.text3Typo, styles.forum1Clr]}
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
              style={styles.home03Icon}
              resizeMode="cover"
              source={require("../assets/iconoutlinespeaker.png")}
            />
            <View style={[styles.forum, styles.mt2]}>
              <Text style={[styles.text3Typo, styles.forum1Clr]}>Events</Text>
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
              <Text style={styles.forum1Clr}>Social</Text>
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
              <Text style={[styles.forum1Typo, styles.forum1Clr]}>
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
              <Text
                style={[styles.profile, styles.forum1Typo, styles.text3Typo]}
              >
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
  container: {
    paddingHorizontal: 15, // Add horizontal padding
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  interest: {
    backgroundColor: '#4ec6e0',
    borderRadius: 12,
    padding: 7.5,
    paddingVertical: 10,
    flexBasis: '30%',
    alignItems: 'center',
    top: 340
  },
  interestText: {
    fontSize: 14,
  },

  backButton: {
    fontFamily: FontFamily.robotoSemibold,
    top: 720,
    fontSize: FontSize.size_xl,
    flex: 1, 
    alignSelf:"center",
    textTransform: "capitalize",
    color: Color.white,
    letterSpacing: 2,
    position: "absolute",
    width:"55%",
  },
  mt2: {
    marginTop: 2,
  },
  aCsJuniorLayout: {
    height: 38,
    width: 192,
    textAlign: "left",
    color: Color.white,
    left: 31,
    position: "absolute",
  },
  text3Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  myProfileTypo: {
    fontFamily: FontFamily.robotoSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    color: Color.skyblue_100,
    height: 38,
    textAlign: "left",
    position: "absolute",
  },
  forum1Typo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  rectangleLayout2: {
    height: 40,
    position: "absolute",
  },
  rectangleLayout3: {
    width: 101,
    backgroundColor: Color.skyblue_200,
    left: 116,
    height: 40,
    borderRadius: Border.br_xl,
  },
  gymTypo: {
    width: 92,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
    height: 40,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  rectangleLayout1: {
    left: 234,
    height: 40,
    width: 101,
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleLayout: {
    left: 1,
    height: 40,
    width: 101,
    backgroundColor: Color.skyblue_200,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  userLayout: {
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
    backgroundColor: Color.gray_300,
    alignItems: "center",
  },
  forum1Clr: {
    color: Color.white,
    fontSize: FontSize.size_xs,
  },
  imageIcon: {
    top: 82,
    left: 11,
    borderRadius: Border.br_31xl,
    width: 106,
    height: 106,
    position: "absolute",
  },
  ahmedLuqman: {
    top: 174,
    fontSize: 23,
    fontWeight: "800",
    fontFamily: FontFamily.robotoExtrabold,
  },
  aCsJunior: {
    top: 208,
    fontSize: FontSize.size_mini,
  },
  myProfile: {
    top: 66,
    left: 155,
    width: 97,
    color: Color.skyblue_100,
  },
  myInterests: {
    top: 293,
    width: 142,
    color: Color.skyblue_100,
    left: 31,
  },
  graduation2024: {
    top: 3,
    left: 24,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkgray_100,
    width: 143,
    height: 21,
    position: "absolute",
  },
  iconoutlinecalendar: {
    width: 18,
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  gradYear: {
    top: 255,
    width: 167,
    height: 24,
    left: 31,
    position: "absolute",
  },
  rectangle: {
    top: -48,
  },
  football: {
    left: 142,
    top: -48,
  },
  rectangle1: {
    top: -48,
  },
  gym: {
    left: 274,
    top: -48,
  },
  rectangle2: {
    top: 4,
  },
  rectangle3: {
    top: -48,
  },
  editProfile: {
    left: 13,
    top: 0,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    letterSpacing: 1,
    fontSize: FontSize.size_smi,
  },
  rectangle4: {
    top: 7,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#4ec6e0",
    borderWidth: 1,
    width: 95,
    height: 26,
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  editProfileParent: {
    top: -161,
    left: 239,
    width: 105,
  },
  cooking: {
    left: 28,
    top: 4,
  },
  chess: {
    top: -48,
    left: 31,
  },
  rectangle5: {
    top: 4,
  },
  reading: {
    left: 143,
    top: 4,
  },
  rectangle6: {
    top: 4,
  },
  longWalks: {
    left: 249,
    top: 4,
  },
  interests: {
    top: 377,
    left: 29,
    width: 367,
    height: 43,
    position: "absolute",
  },
  userProfileChild: {
    top: 96,
  },
  userProfileItem: {
    top: 431,
  },
  home03Icon: {
    width: 24,
    height: 24,
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
  profile: {
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
    top: 771,
    left: 17,
    width: 380,
    position: "absolute",
  },
  userProfile: {
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

export default UserProfile;
