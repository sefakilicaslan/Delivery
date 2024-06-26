import React, { useEffect } from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground } from "react-native";

export default ({ navigation }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('payment');
        }, 1000)

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <SafeAreaView style={{flex:1}}>
            
            <ImageBackground style={styles.background} source={require('../assets/background.png')}>
                <View style={styles.img}>
                    <Image style={styles.deliver} source={require('../assets/deliver.png')} />
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background:{
        width: '100%', 
        height: '100%',
    },
    img:{
        alignItems:'center',
        marginTop: 164,
    },
    deliver:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 164,
    }
})