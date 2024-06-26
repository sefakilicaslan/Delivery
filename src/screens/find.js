import React from "react";
import { SafeAreaView, Text, View, Image, Pressable, FlatList, StyleSheet, TextInput } from "react-native";

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

        }
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
            <Pressable style={styles.image_deal}>
                <Image source={require('../assets/deal.png')} />
            </Pressable>
            <View style={styles.select}>
                <Text style={styles.title}>Nearest Restaurant</Text>
                <Pressable style={styles.more}>
                    <Text>View More</Text>
                </Pressable>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Box DATA={item}
                />
                }
                horizontal={true}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal: 25, marginTop: 20}}>
                <Text style={styles.popular}>Popular Menu</Text>
                <Pressable>
                    <Text style={styles.view}>View More</Text>
                </Pressable>
            </View>
            <Pressable style={styles.healthy}>
                <Image style={{marginLeft: 10, marginTop:11, marginRight:10 }} source={require('../assets/noodle.png')} />
                <View style={{ flexDirection: 'column', marginRight: 120, justifyContent: 'center' }}>
                    <Text style={styles.text_green}>Green Noddle</Text>
                    <Text style={styles.text_title}>Noodle Home</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.sell}>15$</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

const Box = ({ DATA }) => {
    return (

        <View style={{ height: 184, width: 147, borderWidth: 1, borderColor: 'white', marginTop: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 22, marginHorizontal: 25, marginRight: 10 }}>
            <Image source={DATA.image} />
            <Text>{DATA.Text}</Text>
            <Text>{DATA.Minute}</Text>
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
    image_deal: {
        alignItems: 'center',
        marginTop: 20,
    },
    select: {
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between',
        marginTop: 28,
    },
    title: {
        fontSize: 15,
        flexDirection:'row',
        color: '#22242E',
    },
    more: {
        fontSize: 12,
        color: '#6B50F6',
    },
    popular: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#22242E',
    },
    view: {
        fontSize: 12,
        color: '#6B50F6',
    },
    healthy: {
        flexDirection: 'row',
        marginHorizontal: 25,
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 22,
        height: 87,
        
    },
    text_green: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#22242E',
    },
    text_title: {
        fontSize: 14,
    },
    sell: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6B50F6',
        marginRight: 20,
    }
})