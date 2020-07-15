import React, { Component } from 'react';
import { View,Text ,StyleSheet,LayoutAnimation} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'
export default class HomeScreen extends React.Component {
    state={
        email:"",
        displayName:""
    };
    componentDidMount(){
        const {email,displayName}=firebase.auth().currentUser;
        this.setState({email,displayName});
    }
    signOutUser=()=>{
        firebase.auth().signOut();
    } 
   
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Text>Hi {this.state.email}!</Text>
                <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
                    <Text>Log Out </Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
    
})