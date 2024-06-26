import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList, TextInput } from "react-native";
import Buttonback from "./buttonback";

export default () => {

    const DATA = [
        {
            id: 0,
            image: require('../assets/louis.png'),
            text: 'Louis Kelly',
            title: 'Your Order Just Arrived!',
            minute: '20:00',
        },
        {
            id: 1,
            image: require('../assets/paul.png'),
            text: 'Paul Koch',
            title: 'Your Order Just Arrived!',
            minute: '20:00',
        },
        {
            id: 2,
            image: require('../assets/carla.png'),
            text: 'Carla Klein',
            title: 'Your Order Just Arrived!',
            minute: '20:00',
        },
    ]

    return (
        <SafeAreaView>
            <Buttonback />
            <Text style={styles.container}>Chat</Text>
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

        <Pressable style={{ height: 81, width: 335, borderRadius: 22, backgroundColor: 'white', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', marginTop: 20, marginHorizontal: 20 }}>
            <Image source={DATA.image} />
            <Pressable>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{DATA.text}</Text>
                <Text style={{ marginTop: 8, fontSize: 14 }}>{DATA.title}</Text>
            </Pressable>
            <Text>{DATA.minute}</Text>
        </Pressable>

    );
};

const styles = StyleSheet.create({
    container: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#22242E',
        marginLeft: 20,
        marginTop: 20,
    }
})