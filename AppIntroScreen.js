import React, { PureComponent } from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Dimensions,
  Flatlist
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  sliderImage
} from  './src/constants/Static';


 const width = Dimensions.get('window').width;
 const height = Dimensions.get('window').height;

class AppIntroScreen extends PureComponent {
console.log('hello');
  render(){
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>

      <View style={styles.mainViewStyle}>

      </View>
      </LinearGradient>

    )
  }

}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  mainViewStyle: {
    height:'70%',
    width:'95%',
    backgroundColor:'white',
    marginTop:'30%',
    marginBottom:'30%',
    marginLeft:10,
    marginRight:10
  }
})
export default AppIntroScreen;
