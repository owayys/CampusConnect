import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserProfile = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");

  AsyncStorage.getItem("username").then((value) => {
    setUsername(value);
    console.log(value);
  });

  const user_name = "Ahmed Luqman"
  const description = "A CS Junior, who loves playing football and chess!!!"
  const grad_year = "2024"

  const studentInterests = [
    "Coding",
    "Playing video games",
    "Basketball",
    "Drawing",
    "Hiking",
    "Reading",
    "Singing",
    "Cooking",
    "Watching movies",
    "Dancing",
    "Traveling",
    "Listening to music",
  ];

  const [interests, setInterests] = useState([
    "Coding",
    "Playing video games",
    "Basketball",
    "Drawing",
  ]);

  const [newInterest, setNewInterest] = useState("");
  const [isAddingInterest, setIsAddingInterest] = useState(false);

  const handleAddInterest = () => {
    if (newInterest !== "") {
      if (interests.length >= 6) {
        setIsAddingInterest(false);
        return;
      }
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
    setIsAddingInterest(false);
  };

  const renderInterests = () => {
    const rows = [];
    for (let i = 0; i < interests.length; i += 3) {
      const row = (
        <View style={styles.interestsRow} key={i}>
          {interests.slice(i, i + 3).map((interest, index) => (
            <View style={styles.interest} key={index}>
              <Text>{interest}</Text>
            </View>
          ))}
        </View>
      );
      rows.push(row);
    }
    return rows;
  };

  const renderAddInterestButton = () => {
    if (interests.length >= 6) {
      return (
        <TouchableOpacity
          style={styles.addInterestButton}
        >
          <Text style={styles.addInterestButtonText}>You can't add any more interests</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.addInterestButton}
          onPress={() => setIsAddingInterest(true)}
        >
          <Text style={styles.addInterestButtonText}>Add interest</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.userProfile}>
      <ScrollView>
        <View style={styles.backButton}>
          <Button
            title="Log Out"
            onPress={() => navigation.navigate("Login")}
            style={{ backgroundColor: "navy blue" }}
            color={"#4ec6e0"}
          />
        </View>

        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image20.png")}
        />
        <Text style={[styles.ahmedLuqman, styles.aCsJuniorLayout]}>
          {username}
        </Text>
        <Text
          style={[styles.aCsJunior, styles.text3Typo, styles.aCsJuniorLayout]}
        >
          {description}
        </Text>
        <Text style={[styles.myProfile, styles.myProfileTypo]}>My Profile</Text>
        <Text style={[styles.myInterests, styles.myProfileTypo]}>
          My Interests
        </Text>
        <View style={styles.gradYear}>
          <Text style={[styles.graduation2024, styles.forum1Typo]}>
            Graduation: {grad_year}
          </Text>
          <Image
            style={styles.iconoutlinecalendar}
            resizeMode="cover"
            source={require("../assets/iconoutlinecalendar.png")}
          />
        </View>

        <TouchableWithoutFeedback onPress={() => setIsAddingInterest(false)}>
          <View>
            {renderInterests()}
            {isAddingInterest ? (
              <View style={styles.addInterestContainer}>
                <TextInput
                  style={styles.addInterestInput}
                  placeholder="Type your interest here"
                  value={newInterest}
                  onChangeText={setNewInterest}
                />
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={handleAddInterest}
                >
                  <Text style={styles.addButtonText}>Accept</Text>
                </TouchableOpacity>
              </View>
            ) : (
              renderAddInterestButton()
            )}
          </View>
        </TouchableWithoutFeedback>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    paddingHorizontal: 15, // Add horizontal padding
  },

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  interestsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  interest: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  addInterestButton: {
    backgroundColor: "#2c3e50",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
  },
  addInterestButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  addInterestContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 500,
  },
  addInterestInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: "#2c3e50",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  interest: {
    backgroundColor: "#4ec6e0",
    borderRadius: 12,
    padding: 7.5,
    paddingVertical: 10,
    flexBasis: "30%",
    alignItems: "center",
    top: 340,
  },
  interestText: {
    fontSize: 14,
  },

  backButton: {
    fontFamily: FontFamily.robotoSemibold,
    top: 720,
    fontSize: FontSize.size_xl,
    flex: 1,
    alignSelf: "center",
    textTransform: "capitalize",
    color: Color.white,
    letterSpacing: 2,
    position: "absolute",
    width: "55%",
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
    height: responsiveScreenHeight(100),
    overflow: "hidden",
    width: "100%",
  },
});

export default UserProfile;
