import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet,Image } from 'react-native';

export default function App() {
  return (
  <ScrollView>
    <Image style = {styles.container}
    source={{uri:'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2022/12/22/302703535-napoleao.jpg'}}
    />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
