import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList, TextInput } from "react-native";
import Buttonback from "./buttonback";

export default () => {

    const DATA = [
        {
            id: 0,
            image: require('../assets/via.png'),
            placeholder: 'Via sms',

        },
        {
            id: 1,
            image: require('../assets/via2.png'),
            placeholder: 'Via email',
        },
    ]



    return(
        <SafeAreaView>
            <Buttonback />
            <View style={styles.box}>
                <Text style={styles.forgot} >Forgot password?</Text>
                <Text style={styles.select}>Select which contact details should we use to reset your password</Text>
            </View>
            <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Box DATA={item} />}
                />
        </SafeAreaView>
    )
}

const Box = ({ DATA }) => {
    return (
        <View style={{alignItems:'center'}}>
            <TextInput style={{height:105, width: 347, backgroundColor:'white', borderRadius: 22, marginTop: 20, alignItems:'center'}}
            placeholder={DATA.placeholder}
            >
                <Image source={DATA.image} /> 
            </TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginLeft: 20,
    },
    forgot:{
        fontSize: 25,
        fontWeight: '400',
        color:'#22242E',
        marginTop: 20,
    },
    select: {
        fontSize: 12,
        fontWeight: '400',
        color:'#22242E',
        marginTop: 20,
    },
})