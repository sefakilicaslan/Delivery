import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground } from "react-native";

export default () => {
    return (
        <ImageBackground source={require('../assets/Pattern.png')}>
            <Image style={styles.img} source={require('../assets/complete.png')} />
            <View style={styles.box}>
                <Text style={styles.title}>Congrats</Text>
                <Text style={styles.use}>Your Profile Is Ready To Use</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    img: {
        marginHorizontal: 102,
        marginTop: 227,
    },
    box: {
        alignItems:'center',
        textAlign:'center'
    },
    title: {
        fontSize: 30,
        color: '#6B50F6',
        marginTop: 33,
    },
    use: {
        fontSize: 23,
        color: '#22242E',
        marginTop: 12,
    },
})