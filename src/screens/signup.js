import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground, TextInput } from "react-native";
import NextButton from "./NextButton";

const Entrance = (props) => {
    return (
        <View>
            <TextInput
                style={{
                    height: 57,
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingLeft: 28,
                    marginHorizontal: 25,
                    borderRadius: 15,
                    marginTop: props.marginTop
                }}
                placeholder={props.placeholder}
            />
        </View>
    );
};

const Box = (props) => {
    return (
        <Pressable style={{ height: 57, width: 152, }}>
            <Image source={require('../assets/facebook.png')} />
        </Pressable>
    );
};

export default ({ navigation }) => {
    return (
        <SafeAreaView>
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/background.png')}>
                <View style={styles.img} >
                    <Image source={require('../assets/deliverl.png')} />
                </View>
                <Text style={styles.login}>Login To Your Account</Text>
                <Entrance marginTop={40} placeholder={"Email"} />
                <Entrance marginTop={12} placeholder={"Password"} />
                <Text style={styles.continue}>Or Continue With</Text>
                <View style={styles.button2}>
                    <Pressable style={styles.button}>
                        <Image source={require('../assets/facebook.png')} />
                        <Text>Facebook</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Image source={require('../assets/google.png')} />
                        <Text>Google</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.password}>
                    <Text style={styles.fontpassword} >Forgot Your Password</Text>
                </Pressable>
                <View style={{alignItems:'center', marginTop: 36}}>
                <Pressable style={styles.next} onPress={() => {
                    navigation.navigate('payment');
                }}>
                    <Text style={styles.fontnext}>Next</Text>
                </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        alignItems: 'center',
        marginTop: 48,
    },
    login: {
        textAlign: 'center',
        fontSize: 20,
        color: '#22242E',
        fontFamily: 'Regular',
        marginTop: 47,
        fontWeight: 'bold',
    },
    continue: {
        fontSize: 12,
        textAlign: 'center',
        color: '#22242E',
        fontWeight: 'bold',
        marginTop: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 57,
        width: 152,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'space-evenly'
    },
    button2: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
    },
    password: {
        alignItems: 'center',
        marginTop: 20,
    },
    fontpassword: {
        fontSize: 12,
        color: '#6B50F6',
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
    }
})