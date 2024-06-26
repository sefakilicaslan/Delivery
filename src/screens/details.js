import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import Buttonback from "./buttonback";

export default () => {
    return (
        <SafeAreaView>
            <Buttonback />
            <Text style={styles.text_chat}>Chat</Text>
            <View style={styles.container}>
                <Image source={require('../assets/louis.png')} />
                <Text>Louis Kelly</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text_chat: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#22242E',
        marginLeft: 25,
        marginTop: 19,
    },
    container: {
        height: 93,
        backgroundColor: 'white',
        borderRadius: 22,
        marginHorizontal: 20,
        flexDirection:'row',
        alignItems:'center',
    }
})