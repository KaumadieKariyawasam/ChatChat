import React, { Component } from 'react';
import { View,Text ,StyleSheet,TextInput,TouchableOpacity,Image,StatusBar,LayoutAnimation} from 'react-native';
import {Ionicons} from '@expo/vector-icons'; 
import * as firebase from 'firebase'

export default class RegisterScreen extends React.Component {
    static navigationOptions={
        haeder:null 
    };
    state={
        name:"",
        email:"",
        password:"",
        errorMessage:null
    };
    handleSignup=()=>{
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(userCredentials=>{
            return userCredentials.user.updateProfile({
                displayName:this.state.name
            });
        })
        .catch(error=>this.setState({errorMessage:error.message}));
            
    };
  
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                 <StatusBar barStyle="light-content"></StatusBar>
           

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()} >
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>
                
                <Text style={styles.greeting}>{'Create New Account'}</Text>
                

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
             

            <View style={styles.form}>
            <View>
                    <Text style={styles.inputTitle}>Full Name</Text>
                    <TextInput style={styles.input} autoCapitalize="none" onChangeText={name=>this.setState({name})} value={this.state.name}></TextInput>
                </View>
                <View>
                    <Text style={styles.inputTitle}>Email</Text>
                    <TextInput style={styles.input} autoCapitalize="none" onChangeText={email=>this.setState({email})} value={this.state.email}></TextInput>
                </View>
                <View style={{marginTop:32}}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText={password=>this.setState({password})} value={this.state.password}></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                <Text>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center", marginTop:32}} onPress={()=>this.props.navigation.navigate("Login")}>
                <Text style={{color:"#414959",fontWeight:"500"}} >
                    New to SocialApp?<Text style={{fontWeight:"500", color:"#E9446A"}}>Sign In</Text>
                </Text>
            </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    greeting:{
        marginTop:32,
        fontSize:18,
        fontWeight:"400",
        textAlign:"center"
    },
    form:{
        marginBottom:48,
        marginHorizontal:30
    },
    inputTitle:{
        color:"#8A8F9E",
        fontSize:10,
        textTransform:"uppercase"
    },
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    button:{
        marginHorizontal:30,
        backgroundColor:"#E9446A",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center"
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    error:{
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    },
    back:{
        position:"absolute",
        top:48,
        left:32,
        width:50,
        height:50,
        borderRadius:16,
        backgroundColor:"rgb(0,0,0)",
        alignItems:"center",
        justifyContent:"center"

    }


})