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
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  const handlePress = () => console.log("Text Pressed")

  console.log(Dimensions.get('screen'))

  return <WelcomeScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
