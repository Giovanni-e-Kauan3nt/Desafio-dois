import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (

   <View style={styles.container}>
      <Text style={styles.H1}>Animes favoritos</Text>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/images/bluelook.jpg')} style={styles.image} />
        <Image source={require('./assets/images/bokunohero.jpg')} style={styles.image} />
        <Image source={require('./assets/images/charuto.jpg')} style={styles.image} />
        <Image source={require('./assets/images/chesomen.jpg')} style={styles.image} />
        <Image source={require('./assets/images/deafnote.jpg')} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/images/koroco.jpg')} style={styles.image} />
        <Image source={require('./assets/images/nanatisu.jpg')} style={styles.image} />
        <Image source={require('./assets/images/onepiace.jpg')} style={styles.image} />
        <Image source={require('./assets/images/onepuchmem.jpg')} style={styles.image} />
        <Image source={require('./assets/images/tokyorevergers.jpg')} style={styles.image} />
</View>
<StatusBar style="auto" />
</View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    backgroundColor: 'darkred'
  },

  image: {
    width: 300,
    height: 500,
    border: '3px solid black',
    borderRadius: 15,
    margin: 20
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  H1: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900'
  }
});


