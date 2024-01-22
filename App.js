import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed")
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello bluehike!</Text>
      <Button title='click me' onPress={() => console.log("button")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
