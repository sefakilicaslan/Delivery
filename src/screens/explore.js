import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, StyleSheet, FlatList, TextInput } from "react-native";

export default () => {

    const DATA = [
        {
            id: 0,
            image: require('../assets/resto.png'),
            Text: 'Vegan Resto',
            Minute: '12 Mins',

        },
        {
            id: 1,
            image: require('../assets/healthy.png'),
            Text: 'Healthy Food',
            Minute: '8 Mins',

        },
        {
            id: 2,
            image: require('../assets/gfood.png'),
            Text: 'Good Food',
            Minute: '12 Mins',
        },
        {
            id: 3,
            image: require('../assets/smart.png'),
            Text: 'Smart Resto',
            Minute: '8 Mins',

        },
        {
            id: 4,
            image: require('../assets/vresto.png'),
            Text: 'Vegan Resto',
            Minute: '12 Mins',
        },
        
        {
            id: 5,
            image: require('../assets/hfood.png'),
            Text: 'Healthy Food',
            Minute: '8 Mins',
        },
    ]

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text_find}>Find Your Favorite Food</Text>
                <Pressable>
                    <Image style={styles.img} source={require('../assets/notifications.png')} />
                </Pressable>
            </View>
            <Pressable style={styles.box}>
                <TextInput
                    placeholder="What do you want to order?"
                    style={styles.order}>
                </TextInput>
                <Image source={require('../assets/iconfilter.png')} />
            </Pressable>
            <Text style={styles.popular}>Popular Restaurant</Text>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Box DATA={item}/>}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

const Box = ({ DATA }) => {
    return (

        <View style={{ height: 184, width: 147, borderWidth: 1, borderColor: 'white', marginTop: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 22, marginHorizontal: 20,}}>
            <Image source={DATA.image} />
            <Text style={styles.next}>{DATA.Text}</Text>
            <Text style={styles.title}>{DATA.Minute}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 60,
    },
    text_find: {
        fontSize: 31,
        fontWeight: 'bold',
        color: '#22242E',
        width: 232,
    },
    img: {
        marginTop: 19,
        width: 45,
        height: 45,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 18,
    },
    order: {
        borderWidth: 1,
        borderColor: '#6B50F6',
        backgroundColor: '#6B50F6',
        height: 50,
        width: 267,
        borderRadius: 15,
    },
    popular: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#22242E',
        marginTop: 20,
        marginLeft: 20,
    },
    next: {
        fontSize: 16,
        fontWeight:'bold',
        color:'#22242E',
        marginTop: 17,
    },
    title: {
        fontSize: 13,
        color:'#22242E',
        marginTop: 4,
    }
})