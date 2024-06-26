import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, ImageBackground } from "react-native";

export default ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.background} source={require('../assets/background.png')}>
                <ImageBackground style={styles.background2} source={require('../assets/background2.png')}>
                    <View>
                        <Image source={require('../assets/food.png')} />
                        <Image source={require('../assets/food2.png')} />
                        <Image source={require('../assets/food3.png')} />
                    </View>
                </ImageBackground>
            </ImageBackground>
            <Pressable onPress={() => {
                navigation.navigate('page2');
            }}>
                <Text>Git</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    background2: {
        width: 374,
        height: 398,
        marginTop: 84,
    },
    box:{
        flexDirection:'row',
    }
});
