import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, TextInput, StyleSheet } from "react-native";
import Buttonback from "./buttonback";
import NextButton from "./NextButton";

export default () => {
    return(
        <SafeAreaView>
            <Buttonback />
            <View style={styles.container}>
            <Text style={styles.enter}>Enter 4-digit Verification code</Text>
            <Text style={styles.send}>Code send to +123456**** . This code will expired in 01:30</Text>
            </View>
            <View style={styles.title}>
                <TextInput style={styles.input}></TextInput>
            </View>
            <NextButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 25
    },
    enter:{
        fontSize: 25,
        fontWeight:'400',
        color:'#22242E',
        marginRight: 143,
        marginTop: 20,
    },
    send: {
        fontSize: 12,
        fontWeight:'400',
        color:'#22242E',
        marginRight: 111,
        marginTop: 19,
    },
    title: {
        height: 103,
        width: 347,
        backgroundColor:'white',  
        marginHorizontal: 14,
        justifyContent:'center',
        marginTop: 38,
        borderRadius: 22,
    },
    input: {
        fontSize: 33,
        fontWeight:'400',
        color:'#22242E',
        paddingHorizontal: 37,
        letterSpacing: 70,
    }
})