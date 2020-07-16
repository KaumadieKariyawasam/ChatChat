import React, { Component } from 'react';
import { View,Text ,StyleSheet,LayoutAnimation} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'
export default class MessageScreen extends React.Component {
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
           <View style={StyleSheet.container}><Text>Hello Msg</Text></View>
            
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
    