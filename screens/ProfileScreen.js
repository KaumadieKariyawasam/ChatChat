import React, { Component } from 'react';
import { View,Text ,StyleSheet,TextInput,TouchableOpacity,Image,StatusBar,LayoutAnimation} from 'react-native';
import * as firebase from 'firebase'

class ProfileScreen extends Component {
  
    render() { 
        return ( 
            <View style={styles.container}>
                <Text>Profile Screen</Text>

            </View>
         );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});
 
