import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import Buttonback from "./buttonback";

export default ({navigation}) => {
    return (
        <SafeAreaView>
            <Buttonback />
            <View style={styles.text_view}>
                <Text style={styles.text_upload}>Upload Your Photo Profile</Text>
                <Text style={styles.text_data}>This data will be displayed in your account profile for security</Text>
            </View>
            <View style={styles.img}>
                <Image source={require('../assets/preview.png')} />
            </View>
            <View style={{ alignItems: 'center', }}>
                <Pressable style={styles.next} onPress={() => {
                    navigation.navigate('location');
                }}>
                    <Text style={styles.fontnext}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text_view: {
        marginLeft: 25,
    },
    text_upload: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#22242E',
        marginTop: 20,
    },
    text_data: {
        fontSize: 12,
        color: '#22242E',
        width: 239,
        marginTop: 19,
    },
    img: {
        alignItems: 'center',
        marginTop: 50,
    },
    next: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
        width: 157,
        borderRadius: 15,
        marginTop: 166,
        backgroundColor: '#6B50F6',
        borderColor: '#6B50F6',
    },
    fontnext: {
        color: 'white',
        fontSize: 16,
    },
})