import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default () => {
    return(
        <Pressable style={{
            borderWidth: 1,
            justifyContent:'center',
            alignItems:'center',
            height: 57,
            width: 157,
            borderRadius: 15,
            backgroundColor:'#6B50F6',
        }}
        onPress={() =>{
            console.log("log ciktisi oldu");
            click && click ()
        }}>
            <Text style={{
                fontSize: 16,
            }}>Next</Text>
        </Pressable>
    )
}