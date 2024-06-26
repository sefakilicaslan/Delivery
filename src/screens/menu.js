import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TextInput } from "react-native";

export default () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text_find}>Find Your Favorite Food</Text>
                <Pressable>
                    <Image style={styles.img} source={require('../assets/notifications.png')} />
                </Pressable>
            </View>
            <Pressable style={styles.box}>
                <TextInput
                    placeholder="What do you want to order?"
                    style={styles.order}>
                </TextInput>
                <Image source={require('../assets/iconfilter.png')} />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 60,
    },
    text_find: {
        fontSize: 31,
        fontWeight: 'bold',
        color: '#22242E',
        width: 232,
    },
    img: {
        marginTop: 19,
        width: 45,
        height: 45,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 18,
    },
    order: {
        borderWidth: 1,
        borderColor: '#6B50F6',
        backgroundColor: '#6B50F6',
        height: 50,
        width: 267,
        borderRadius: 15,
    },
})