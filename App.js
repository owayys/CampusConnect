import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Button, 
  Dimensions
} from 'react-native'; 

export default function App() {

  const handlePress = () => console.log("Text Pressed")

  console.log(Dimensions.get('screen'))

  return (
    <View style={{
      backgroundColor : 'white',
      flex : 1,
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
    }}
    >
      <View style={{
        backgroundColor : 'darkblue',
        height : 100,
        width : 100,

      }}/>

      <View style={{
        backgroundColor : 'gold',
        height : 100,
        width : 100,
        flexBasis : 50,
        top: 6,
      }}/>
       
      <View style={{
        backgroundColor : 'tomato',
        height : 100,
        width : 100,
      }}/>


    {/* <Text onPress={handlePress}> Hello Danish! </Text> */}
    </View>
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
