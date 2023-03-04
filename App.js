import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native'; 

export default function App() {

  const handlePress = () => console.log("Text Pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        TEXTY TEXT
      </Text>

      <Image 
      blurRadius={10}
      source={{
        width:200,
        height:300,
        uri: "https://picsum.photos/200/300"}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
