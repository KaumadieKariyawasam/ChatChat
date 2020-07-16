import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import MessageScreen from './screens/MessageScreen'
import PostScreen from './screens/PostScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'
import { createBottomTabNavigator } from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons"


import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBrmoNwjKpAgtJ9iHeM8TiiybzDkObJpJQ",
  authDomain: "test123-ae77c.firebaseapp.com",
  databaseURL: "https://test123-ae77c.firebaseio.com",
  projectId: "test123-ae77c",
  storageBucket: "test123-ae77c.appspot.com",
  messagingSenderId: "998096796287",
  appId: "1:998096796287:web:2943de680fc381fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator =  createBottomTabNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-home" size={24} color={tintColor}/>
      }
    },
    Message: {
      screen:() => <MessageScreen/>,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-chatboxes" size={24} color={tintColor}/>
      }
    },
    Post: {
      screen:() => <PostScreen/>,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-add-circle" size={48} color="#E9446A" style={{shadowColor:"#E9446A",shadowOffset:{width:0,height:0},
        shadowRadius:10,shadowOpacity:0.3}}/>
      }
    },
    Notification: {
      screen:() => <NotificationScreen/>,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-notifications" size={24} color={tintColor} />
      }
    },
    Profile: {
      screen:() => <ProfileScreen/>,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Ionicons name="ios-person" size={24} color={tintColor}/>
      }
    }
  },
  { 
    tabBarOptions:{
      activeTintColor:"#161F3D",
      inactiveTintColor:"#BBBBC4",
      showLabel:false
    }
  }
 )

 const AuthStack= createStackNavigator({
  Login:LoginScreen,
  Register:RegisterScreen
});

const switchNav=createSwitchNavigator(
  {
    AuthLoading: LoadingScreen,
    App: AppTabNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default createAppContainer(switchNav);