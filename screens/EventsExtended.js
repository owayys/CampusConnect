// import * as React from "react";
// import {
//   Image,
//   StyleSheet,
//   Pressable,
//   TouchableOpacity,
//   View,
//   Text,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

// const EventsExtended = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.eventsExtended}>
//       <Image
//         style={[styles.imageIcon, styles.imageIconPosition]}
//         resizeMode="cover"
//         source={require("../assets/image21.png")}
//       />
//       <View style={styles.iconoutlinemessageCircle}>
//         <Image
//           style={styles.maskIcon}
//           resizeMode="cover"
//           source={require("../assets/mask.png")}
//         />
//         <TouchableOpacity
//           style={styles.basePosition}
//           activeOpacity={0.2}
//           onPress={() => {}}
//         >
//           <TouchableOpacity
//             style={[styles.base, styles.basePosition]}
//             activeOpacity={0.2}
//             onPress={() => navigation.navigate("OuterChatInterface")}
//           />
//         </TouchableOpacity>
//       </View>
//       <Image
//         style={styles.eventsExtendedChild}
//         resizeMode="cover"
//         source={require("../assets/ellipse-5.png")}
//       />
//       <Image
//         style={styles.eventsExtendedItem}
//         resizeMode="cover"
//         source={require("../assets/vector-1.png")}
//       />
//       <View style={[styles.rectangle, styles.imageIconPosition]} />
//       <Image
//         style={styles.eventsExtendedInner}
//         resizeMode="cover"
//         source={require("../assets/rectangle-20.png")}
//       />
//       <Text style={styles.basketballLeague}>Basketball League</Text>
//       <Text
//         style={styles.doYouThink}
//       >{`Do you think your team has what it takes to be crowned the basketball champions of LUMS? If so, register now for the LUMS Sports Fest Basketball League.

// Dates: 15th March - 20th March

// Timing: 6:00pm - 7:00 pm

// Team Size: 5 Players and 2 substitutes per team`}</Text>
//       <Pressable
//         style={[
//           styles.tcikButton,
//           styles.groupIconLayout,
//           styles.groupIconLayout1,
//         ]}
//       >
//         <Image
//           style={[
//             styles.groupIcon,
//             styles.groupIconLayout,
//             styles.groupIconLayout1,
//           ]}
//           resizeMode="cover"
//           source={require("../assets/group6.png")}
//         />
//         <Text style={[styles.going, styles.goingTypo]}>Going</Text>
//       </Pressable>
//       <Image
//         style={[styles.rectangle395Icon, styles.groupIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/rectangle3952.png")}
//       />
//       <Text style={[styles.interested, styles.goingTypo]}>Interested</Text>
//       <Image
//         style={[styles.groupIcon1, styles.groupIconLayout]}
//         resizeMode="cover"
//         source={require("../assets/group7.png")}
//       />
//       <Text style={[styles.notGoing, styles.goingTypo]}>{`Not 
// Going`}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imageIconPosition: {
//     left: 27,
//     position: "absolute",
//   },
//   basePosition: {
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     top: "0%",
//     height: "100%",
//     position: "absolute",
//     width: "100%",
//   },
//   groupIconLayout: {
//     height: 40,
//     position: "absolute",
//   },
//   groupIconLayout1: {
//     width: 86,
//     height: 40,
//   },
//   goingTypo: {
//     fontFamily: FontFamily.robotoRegular,
//     color: Color.white,
//     fontSize: FontSize.size_mini,
//     textTransform: "capitalize",
//     letterSpacing: 1,
//     position: "absolute",
//   },
//   imageIcon: {
//     top: 58,
//     borderRadius: Border.br_31xl,
//     width: 38,
//     height: 38,
//   },
//   maskIcon: {
//     width: 20,
//     height: 20,
//   },
//   base: {
//     backgroundColor: Color.white,
//   },
//   iconoutlinemessageCircle: {
//     top: 66,
//     left: 340,
//     width: 24,
//     height: 24,
//     position: "absolute",
//   },
//   eventsExtendedChild: {
//     top: 64,
//     left: 355,
//     width: 7,
//     height: 7,
//     position: "absolute",
//   },
//   eventsExtendedItem: {
//     top: 101,
//     left: 1,
//     width: 410,
//     height: 1,
//     position: "absolute",
//   },
//   rectangle: {
//     top: 127,
//     borderRadius: Border.br_10xl,
//     backgroundColor: Color.gray_600,
//     shadowColor: "rgba(0, 0, 0, 0.45)",
//     shadowRadius: 34,
//     elevation: 34,
//     width: 354,
//     height: 650,
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 40,
//       height: 40,
//     },
//     left: 27,
//   },
//   eventsExtendedInner: {
//     top: 204,
//     left: 41,
//     borderRadius: Border.br_4xs,
//     width: 327,
//     height: 211,
//     position: "absolute",
//   },
//   basketballLeague: {
//     top: 152,
//     left: 22,
//     fontSize: FontSize.size_6xl,
//     color: Color.skyblue_100,
//     display: "flex",
//     alignItems: "flex-end",
//     justifyContent: "center",
//     width: 363,
//     textAlign: "center",
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//     textTransform: "capitalize",
//     letterSpacing: 1,
//     position: "absolute",
//   },
//   doYouThink: {
//     top: 438,
//     left: 46,
//     width: 322,
//     height: 306,
//     textAlign: "left",
//     color: Color.white,
//     fontSize: FontSize.size_mini,
//     fontFamily: FontFamily.robotoMedium,
//     fontWeight: "500",
//     position: "absolute",
//   },
//   groupIcon: {
//     top: 0,
//     left: 0,
//   },
//   going: {
//     top: 11,
//     left: 21,
//     textAlign: "left",
//   },
//   tcikButton: {
//     left: 38,
//     top: 704,
//   },
//   rectangle395Icon: {
//     left: 159,
//     borderRadius: Border.br_3xs,
//     width: 90,
//     top: 704,
//   },
//   interested: {
//     top: 715,
//     left: 165,
//     textAlign: "left",
//   },
//   groupIcon1: {
//     left: 281,
//     width: 77,
//     top: 704,
//   },
//   notGoing: {
//     top: 708,
//     left: 298,
//     textAlign: "center",
//   },
//   eventsExtended: {
//     backgroundColor: Color.gray_200,
//     shadowColor: "rgba(24, 48, 63, 0.5)",
//     shadowRadius: 100,
//     elevation: 100,
//     flex: 1,
//     height: 838,
//     overflow: "hidden",
//     width: "100%",
//     shadowOpacity: 1,
//     shadowOffset: {
//       width: 40,
//       height: 40,
//     },
//   },
// });

// export default EventsExtended;

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const EventsExtended= ({navigation, route}) => {
  const {event} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.detailsContainer}>
          <Image
            source={{uri: event.image}}
            style={styles.eventImage}
            resizeMode="cover"
          />
          <Text style={styles.eventName}>{event.name}</Text>
          <Text style={styles.eventDate}>{event.date}</Text>
          <Text style={styles.eventLocation}>{event.location}</Text>
          <Text style={styles.eventDescription}>{event.description}</Text>
          <Text style={styles.eventDescription}>{event.time}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.goingButton]}>
            <Text style={styles.buttonText}>Going</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={[styles.button, styles.interestedButton]}>
            <Text style={styles.buttonText}>Interested</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={[styles.button, styles.notGoingButton]}>
            <Text style={styles.buttonText}>Not Going</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1936',
  },
  content: {
    padding: 16,
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4EC6E0',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 16,
    color: 'white',
    marginTop: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
  },
  goingButton: {
    backgroundColor: '#00C853',
  },
  interestedButton: {
    backgroundColor: '#FFC107',
  },
  notGoingButton: {
    backgroundColor: '#F44336',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default EventsExtended;

