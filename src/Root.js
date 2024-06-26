import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import page from "./screens/page";
import page2 from "./screens/page2";
import signup from "./screens/signup";
import NextButton from "./screens/NextButton";
import sign_in from "./screens/sign_in";
import process from "./screens/process";
import payment from "./screens/payment";
import upload from "./screens/upload";
import preview from "./screens/preview";
import location from "./screens/location";
import success from "./screens/success";
import code from "./screens/code";
import method from "./screens/method";
import password from "./screens/password";
import notifications from "./screens/notifications";
import find from "./screens/find";
import explore from "./screens/explore";
import filter from "./screens/filter";
import menu from "./screens/menu";
import message from "./screens/message";
import details from "./screens/details";
import call from "./screens/call";
import finish from "./screens/finish";

const Stack = createNativeStackNavigator();


export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="page" component={page} />
                <Stack.Screen name="page2" component={page2} />
                <Stack.Screen name="signup" component={signup} />
                <Stack.Screen name="sign_in" component={sign_in} />
                <Stack.Screen name="process" component={process} />
                <Stack.Screen name="payment" component={payment} />
                <Stack.Screen name="upload" component={upload} />
                <Stack.Screen name="preview" component={preview} />
                <Stack.Screen name="location" component={location} />
                <Stack.Screen name="success" component={success} />
                <Stack.Screen name="code" component={code} />
                <Stack.Screen name="method" component={method} />
                <Stack.Screen name="password" component={password} />
                <Stack.Screen name="notifications" component={notifications} />
                <Stack.Screen name="find" component={find} />
                <Stack.Screen name="explore" component={explore} />
                <Stack.Screen name="filter" component={filter} />
                <Stack.Screen name="menu" component={menu} />
                <Stack.Screen name="message" component={message} />
                <Stack.Screen name="details" component={details} />
                <Stack.Screen name="call" component={call} />
                <Stack.Screen name="finish" component={finish} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}