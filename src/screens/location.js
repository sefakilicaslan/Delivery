import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground } from "react-native";
import Buttonback from "./buttonback";

export default ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Buttonback />
            <View style={styles.text_view}>
                <Text style={styles.text_location}>Set Your Location</Text>
                <Text style={styles.text_data}>This data will be displayed in your account profile for security</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image source={require('../assets/location.png')} />
                    <Text style={styles.title}>Your Location</Text>
                </View>
                <View style={styles.location}>
                    <Text style={styles.set}>Set Location</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 36 }}>
                <Pressable style={styles.next} onPress={() => {
                    navigation.navigate('success');
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
    text_location: {
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
    container: {
        marginHorizontal: 16,
        borderColor: 'gray',
        height: 147,
        borderRadius: 22,
        backgroundColor: 'white',
        marginTop: 20,
    },
    box: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 11,
    },
    title: {
        marginTop: 5,
        marginLeft: 14,
        fontSize: 15,
        fontWeight: '400',
        color: '#22242E',
    },
    location: {
        borderWidth: 1,
        borderColor: '#5A6CEA12',
        borderRadius: 15,
        backgroundColor: '#5A6CEA12',
        height: 57,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 27,
        marginHorizontal: 10,
    },
    set: {
        fontSize: 14,
        color: '#22242E',
    },
    next: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
        width: 157,
        borderRadius: 15,
        backgroundColor: '#6B50F6',
        marginTop: 220,
        borderColor: '#6B50F6',
    },
    fontnext: {
        color: 'white',
        fontSize: 16,
    },
})