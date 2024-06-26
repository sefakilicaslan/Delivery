import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground } from "react-native";

export default () => {
    return (
        <Pressable style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            width: 45,
            height: 45,
            borderRadius: 15, borderColor: '#C8BEFF',
            backgroundColor: '#C8BEFF',
            marginTop: 38,
            marginLeft: 25,
        }}>
            <Image source={require('../assets/back.png')} />
        </Pressable>
    )
}
