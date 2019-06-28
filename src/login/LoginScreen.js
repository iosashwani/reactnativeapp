import React,{PureComponent} from 'react'
import{
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import StyledText from 'react-native-styled-text';
class LoginScreen extends PureComponent{
  constructor(props) {
       super(props);
       this.state = { text: 'M123456' };
    }
   render(){
     return(
       <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
         <View style = {styles.mainViewStyle}>
          <StyledText
          style={{fontSize:16}}
          >

            { 'Enter Your <b> Client Code </b>' }
          </StyledText>
          <TextInput
            style={{height: 100,width:100 }}
            onChangeText ={(text) => this.setState({text})}
            value={this.state.text}

        />
         </View>
       </LinearGradient>
     )
   }
}

const styles = StyleSheet.create ({
   linearGradient:{
     flex: 1,
     paddingLeft: 15,
     paddingRight: 15,
     borderRadius: 5
   },
   mainViewStyle: {
     height:'50%',
     width:'80%',
     backgroundColor:'white',
     marginTop:'30%',
     marginBottom:'30%',
     marginLeft:10,
     marginRight:10,
     alignItems:'center',
     justifyContent: 'center',
     borderRadius: 6
   },

})
export default LoginScreen ;
