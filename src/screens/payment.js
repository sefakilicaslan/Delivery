import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import Buttonback from "./buttonback";
import NextButton from "./NextButton";

const Entrance = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{
                width: 335, height: 73, marginTop: 20, backgroundColor: 'red',
                borderRadius: 20, justifyContent: 'center', alignItems: 'center'
            }}>
            </TouchableOpacity>
        </View>
    );
};


export default ({ navigation }) => {
    return (
        <SafeAreaView>
            <Buttonback />
            <Text style={styles.text_bold}>Payment Method</Text>
            <Text style={styles.text_data}>This data will be displayed in your account profile for security</Text>
            <Entrance>
                <Image source={require('../assets/paypal.png')}
                    style={{ height: 23, width: 86 }} />
            </Entrance>
            <Entrance>
                <Image source={require('../assets/visa.png')}
                    style={{ height: 60, width: 60 }} />
            </Entrance>
            <Entrance>
                <Image source={require('../assets/payoneer.png')}
                    style={{ height: 32, width: 83 }} />
            </Entrance>
            <View style={{ alignItems: 'center', marginTop: 36 }}>
                <Pressable style={styles.next} onPress={() => {
                    navigation.navigate('upload');
                }}>
                    <Text style={styles.fontnext}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text_bold: {
        fontWeight: '400',
        fontSize: 25,
        fontWeight: 'bold',
    },
    text_data: {
        fontSize: 12,
        lineHeight: 21,
        color: 'red',
    },
    next: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
        width: 157,
        borderRadius: 15,
        backgroundColor: '#6B50F6',
        marginTop: 219,
        borderColor: '#6B50F6',
    },
    fontnext: {
        color: 'white',
        fontSize: 16,
    },
})