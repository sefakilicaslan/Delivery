import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TouchableOpacity } from "react-native";

export default () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.img}>
                <Image source={require('../assets/richard.png')} />
            </View>
            <View style={styles.container}>
                <Text style={styles.richard}>Richard Lewis</Text>
                <Text style={styles.text_ring}>Ringing . . .</Text>
            </View>
            <View style={styles.box}>
                <Pressable style={styles.button}>
                    <Image source={require('../assets/voice.png')} />
                </Pressable>
                <Pressable style={styles.button}>
                    <Image source={require('../assets/close.png')} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        alignItems: 'center',
        marginTop: 200,
    },
    container: {
        alignItems: 'center',
        marginTop: 59,
    },
    richard: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#22242E',
    },
    text_ring: {
        marginTop: 20,
        fontSize: 19,
    },
    box: {
        flexDirection: 'row',
        justifyContent:'center',
        marginTop: 140,
    },
    button: {
        marginRight: 20,
        
    }
})