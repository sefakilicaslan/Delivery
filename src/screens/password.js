import React, {useState} from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TextInput } from "react-native";
import Buttonback from "./buttonback";



export default () => {
    return (
        <SafeAreaView>
            <Buttonback />
            <View style={styles.container}>
                <Text style={styles.forgot}>Forgot password?</Text>
                <Text style={styles.select}>Select which contact details should we use to reset your password</Text>
            </View>
            <View style={{flexDirection:'row', marginHorizontal: 20, marginTop:20, width:347, height:61, borderRadius:22, borderWidth:1, borderColor:'white', backgroundColor:'white', justifyContent:'space-between'}}>
                <TextInput placeholder="New Password"></TextInput>
                <Pressable style={{justifyContent:'center'}}>
                    <Image source={require('../assets/passwordicon.png')} />
                </Pressable>
            </View>
            <View style={{flexDirection:'row', marginHorizontal: 20, marginTop:20, width:347, height:61, borderRadius:22, borderWidth:1, borderColor:'white', backgroundColor:'white', justifyContent:'space-between'}}>
                <TextInput placeholder="Confirm Password"></TextInput>
                <Pressable style={{justifyContent:'center'}}>
                    <Image source={require('../assets/passwordicon.png')} />
                </Pressable>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    forgot: {
        fontSize: 25,
        fontWeight: '400',
        color: '#22242E',
        marginTop: 20,
    },
    select: {
        fontSize: 12,
        fontWeight: '400',
        color: '#22242E',
        marginTop: 20,
    },
    box1: {
        height: 61,
        width: 347,
        borderRadius: 22,
        marginTop: 40,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        paddingLeft: 18,
        justifyContent: 'center',
    },
    box2: {
        height: 61,
        width: 347,
        borderRadius: 22,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        paddingLeft: 18,
        justifyContent: 'center',
    },
    image: {
        height: 15,
        width: 22,
    }
})