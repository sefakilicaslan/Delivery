import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground, TextInput } from "react-native";
import Buttonback from "./buttonback";

const Entrance = (props) => {
    return (
        <View>
            <TextInput
                style={{
                    height: 61,
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingLeft: 20,
                    marginHorizontal: 14,
                    borderRadius: 22,
                    marginTop: 20
                }}
                placeholder={props.placeholder}
            />
        </View>
    );
};

export default () => {
    return (
        <SafeAreaView>
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/background.png')}>
                <Buttonback />
                <View style={styles.box}>
                    <Text style={styles.get}>Fill in your bio to get started</Text>
                    <Text style={styles.data}>This data will be displayed in your account profile for security</Text>
                </View>
                <Entrance placeholder="First Name"/>
                <Entrance placeholder="Last Name" />
                <Entrance placeholder="Phone Number" />
                <View style={{alignItems:'center', marginTop: 220}}>
                <Pressable style={styles.next} onPress={() => {
                    navigation.navigate('page3');
                }}>
                    <Text style={styles.fontnext}>Next</Text>
                </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    box: {
        marginLeft: 25,
        marginTop: 20,
    },
    get: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#22242E',
    },
    data: {
        fontSize: 12,
        color: '#22242E',
        marginTop: 19,
    },
    next: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
        width: 157,
        borderRadius: 15,
        backgroundColor: '#6B50F6',
    },
    fontnext: {
        color: 'white',
        fontSize: 16,
    },
})