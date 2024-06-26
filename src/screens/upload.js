import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Buttonback from "./buttonback";
import NextButton from "./NextButton";
import { useNavigation } from '@react-navigation/native';



const Entrance = (props) => {
    return (
        <View style={{ marginHorizontal: 30 }}>
            <TouchableOpacity style={{
                width: 325, 
                height: 129, 
                backgroundColor: 'red',
                borderRadius: 22, 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginTop: 20,
            }}>
            </TouchableOpacity>
        </View>
    );
};


export default ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/backg.png')} style={{flex: 1}}>
            <Buttonback />
            <View style={styles.text_view}>
                <Text style={styles.text_upload}>Upload Your Photo Profile</Text>
                <Text style={styles.text_data}>This data will be displayed in your account profile for security</Text>
            </View>
            <Entrance />
            <Entrance />
            <View style={{ alignItems: 'center', justifyContent:'center' }}>
                <Pressable style={styles.next} onPress={() => {
                    navigation.navigate('preview');
                }}>
                    <Text style={styles.fontnext}>Next</Text>
                </Pressable>
            </View>
        </ImageBackground>
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
    },
    text_data: {
        fontSize: 12,
        color: '#22242E',
        width: 239,
    },
    next: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
        width: 157,
        borderRadius: 15,
        backgroundColor: '#6B50F6',
        borderColor: '#6B50F6',
        marginTop: 165,
    },
    fontnext: {
        color: 'white',
        fontSize: 16,
    },

})