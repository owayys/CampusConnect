import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const InteractiveMap = () => {
  return (
    <View style={[styles.interactiveMap, styles.heatmap5Layout]}>
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <View style={styles.heatmap} />
      <View style={[styles.heatmap1, styles.heatmapPosition1]} />
      <View style={[styles.heatmap2, styles.heatmapPosition1]} />
      <View style={[styles.heatmap3, styles.heatmapPosition]} />
      <View style={[styles.heatmap4, styles.heatmapPosition]} />
      <View style={[styles.heatmap5, styles.heatmap5Layout]} />
      <View style={[styles.keyParent, styles.keyLayout]}>
        <Text style={[styles.key, styles.keyLayout]}>Key</Text>
        <View style={styles.rectangle} />
      </View>
      <Image
        style={styles.goBackIcon}
        resizeMode="cover"
        source={require("../assets/go-back.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heatmap5Layout: {
    overflow: "hidden",
    borderRadius: Border.br_21xl,
  },
  heatmapPosition1: {
    left: 164,
    right: 166,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_21xl,
  },
  heatmapPosition: {
    bottom: 527,
    top: 231,
    backgroundColor: Color.red_100,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_21xl,
  },
  keyLayout: {
    height: 29,
    position: "absolute",
  },
  image4Icon: {
    width: 1425,
    height: 849,
    left: 0,
    top: 0,
    position: "absolute",
  },
  heatmap: {
    top: 606,
    bottom: 184,
    left: 174,
    backgroundColor: Color.red_100,
    right: 166,
    position: "absolute",
    overflow: "hidden",
    borderRadius: Border.br_21xl,
  },
  heatmap1: {
    top: 550,
    bottom: 208,
    backgroundColor: "#ff0900",
  },
  heatmap2: {
    top: 566,
    bottom: 192,
    backgroundColor: Color.red_100,
  },
  heatmap3: {
    right: 330,
    left: 0,
  },
  heatmap4: {
    right: 345,
    left: -15,
  },
  heatmap5: {
    top: 422,
    right: 70,
    bottom: 336,
    left: 260,
    backgroundColor: "#061aec",
    position: "absolute",
  },
  key: {
    left: 26,
    fontSize: FontSize.size_smi,
    letterSpacing: 1,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 74,
    top: 0,
  },
  rectangle: {
    top: 5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.skyblue_300,
    borderStyle: "solid",
    borderColor: "#000506",
    borderWidth: 1,
    width: 76,
    height: 19,
    left: 0,
    position: "absolute",
  },
  keyParent: {
    top: 67,
    left: 315,
    width: 100,
  },
  goBackIcon: {
    top: 56,
    left: 5,
    width: 58,
    height: 58,
    position: "absolute",
  },
  interactiveMap: {
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
  },
});

export default InteractiveMap;
