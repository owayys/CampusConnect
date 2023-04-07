// import React, { useCallback } from "react";
// import {
//   Image,
//   StyleSheet,
//   View,
//   Pressable,
//   Text,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

// const InteractiveMap = () => {
//   const navigation = useNavigation();

//   const onGroupButtonClick = useCallback(() => {
//     Alert.alert("Key", "placeholder", [
//       {
//         text: "OK",
//         onPress: () => console.log("OK pressed"),
//       },
//     ]);
//   }, []);

//   return (
//     <View style={styles.interactiveMap}>
//       <Image
//         style={styles.image4Icon}
//         resizeMode="cover"
//         source={require("../assets/image-4.png")}
//       />
//       <View style={[styles.heatmap, styles.heatmapLayout]} />
//       <View style={[styles.heatmap1, styles.heatmapPosition1]} />
//       <View style={[styles.heatmap2, styles.heatmapPosition1]} />
//       <View style={[styles.heatmap3, styles.heatmapPosition]} />
//       <View style={[styles.heatmap4, styles.heatmapPosition]} />
//       <View style={[styles.heatmap5, styles.heatmapLayout]} />
//       <TouchableOpacity
//         style={[styles.keyParent, styles.keyLayout]}
//         activeOpacity={0.2}
//         onPress={onGroupButtonClick}
//       >
//         <Text style={[styles.key, styles.keyLayout]}>Key</Text>
//         <View style={styles.rectangle} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   heatmapLayout: {
//     borderRadius: Border.br_21xl,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   heatmapPosition1: {
//     left: 164,
//     borderRadius: Border.br_21xl,
//     right: 166,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   heatmapPosition: {
//     bottom: 527,
//     top: 231,
//     backgroundColor: Color.red_100,
//     borderRadius: Border.br_21xl,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   keyLayout: {
//     height: 29,
//     position: "absolute",
//   },
//   image4Icon: {
//     width: 1425,
//     height: 849,
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   heatmap: {
//     top: 606,
//     bottom: 184,
//     left: 174,
//     backgroundColor: Color.red_100,
//     right: 166,
//     borderRadius: Border.br_21xl,
//   },
//   heatmap1: {
//     top: 550,
//     bottom: 208,
//     backgroundColor: "#ff0900",
//   },
//   heatmap2: {
//     top: 566,
//     bottom: 192,
//     backgroundColor: Color.red_100,
//   },
//   heatmap3: {
//     right: 330,
//     left: 0,
//   },
//   heatmap4: {
//     right: 345,
//     left: -15,
//   },
//   heatmap5: {
//     top: 422,
//     right: 70,
//     bottom: 336,
//     left: 260,
//     backgroundColor: "#061aec",
//   },
//   key: {
//     left: 26,
//     fontSize: FontSize.size_smi,
//     letterSpacing: 1,
//     fontWeight: "300",
//     fontFamily: FontFamily.robotoLight,
//     color: Color.white,
//     textAlign: "left",
//     display: "flex",
//     alignItems: "center",
//     width: 74,
//     top: 0,
//   },
//   rectangle: {
//     top: 5,
//     borderRadius: Border.br_xl,
//     backgroundColor: Color.skyblue_300,
//     borderStyle: "solid",
//     borderColor: "#000506",
//     borderWidth: 1,
//     width: 76,
//     height: 19,
//     left: 0,
//     position: "absolute",
//   },
//   keyParent: {
//     top: 67,
//     left: 315,
//     width: 100,
//   },
//   icon: {
//     height: "100%",
//     width: "100%",
//   },
//   goBack: {
//     left: 5,
//     top: 56,
//     width: 58,
//     height: 58,
//     position: "absolute",
//   },
//   interactiveMap: {
//     backgroundColor: Color.gray_200,
//     shadowColor: "rgba(24, 48, 63, 0.5)",
//     shadowOffset: {
//       width: 40,
//       height: 40,
//     },
//     shadowRadius: 100,
//     elevation: 100,
//     shadowOpacity: 1,
//     flex: 1,
//     height: 838,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Heatmap } from 'react-native-maps';
import io from 'socket.io-client';
import * as Location from 'expo-location';
import {
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const socket = io('https://campusconnect.herokuapp.com/');

const mapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
const InteractiveMap = ({route}) => {
  const [locations, setLocations] = useState([]);
  const navigation = useNavigation();
  const { name } = route.params;

  useEffect(() => {
    // (async () => {
    //   let { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status !== 'granted') {
    //     return;
    //   }

    //   let location = await Location.getCurrentPositionAsync({});
    //   const { latitude, longitude } = location.coords;
    //   socket.emit('location', { latitude, longitude });
      socket.on('location', (data) => {
        console.log(data)
        setLocations((prevLocations) => [...prevLocations, data]);
      });
    // })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocations([]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 31.470673,
          longitude: 74.410955,
          latitudeDelta: 0.0009,
          longitudeDelta: 0.0009,
        }}
        provider={"google"}
        customMapStyle={mapStyle}
      >
        <Heatmap points={locations} provider={"google"} maxIntensity={20} />
      </MapView>
       <TouchableOpacity
         style={styles.goBack}
         activeOpacity={0.2}
         onPress={() => navigation.navigate("HomeScreen", { name: name})}
       >
         <Image
           style={{ width: 60, height: 60 }}
           resizeMode="cover"
          source={require("../assets/go-back.png")}
         />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
    goBack: {
    left: 5,
    top: 56,
    width: 58,
    height: 58,
    position: "absolute",
  },

});



export default InteractiveMap;
