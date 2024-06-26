import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, TextInput } from "react-native";

export default () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.img}>
                <Image source={require('../assets/order.png')} />
            </View>
            <View style={styles.container}>
                <Text style={styles.order} >Thank You! Order Completed</Text>
            </View>
            <Pressable style={styles.box}>
                <View style={styles.feedback} >
                    <Image source={require('../assets/feedback.png')} />
                </View>
                <TextInput placeholder="Leave Feedback"></TextInput>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        alignItems: 'center',
        marginTop: 185,
    },
    container: {
        alignItems: 'center',
        marginTop: 50,
    },
    order: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#22242E',
    },
    box: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 22,
        height: 55,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 150,
    },
    feedback: {
        justifyContent:'center',
        alignItems:'center',
        paddingLeft: 20,
    }
})