import React from "react";
import { SafeAreaView, Text, View, Image, StyleSheet, ImageBackground, TextInput, FlatList } from "react-native";


export default () => {

    const DATA = [
        {
            id: 0,
            image: require('../assets/profile.png'),
            placeholder: 'madeofzero . . |',

        },
        {
            id: 1,
            image: require('../assets/mail.png'),
            placeholder: 'Email',

        },
        {
            id: 2,
            image: require('../assets/password.png'),
            image2: require('../assets/password2.png'),
            placeholder: 'Password',

        }
    ]

    return (
        <SafeAreaView>
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/background.png')}>
                <View style={styles.img} >
                    <Image source={require('../assets/deliverl.png')} />
                </View>
                <Text style={styles.login}>Sign Up For Free</Text>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Box DATA={item} />}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const Box = ({ DATA }) => {
    return (
        <View >
            <TextInput style={{height: 57, width: 325, borderRadius: 15, borderWidth: 1, borderColor: 'gray', }}>
                <Image source={DATA.image} />
                {DATA.image2 && <Image source={DATA.image2} />}
                <View style={{ flex: 1 }}>
                    <TextInput style={{ height: '100%' }} placeholder={DATA.placeholder} />
                </View>
            </TextInput>
        </View>
    );
};



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
        marginTop: 46,
        backgroundColor: 'red',
        fontWeight: 'bold',
    },
})