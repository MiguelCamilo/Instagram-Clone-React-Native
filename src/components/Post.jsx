import { View, Image, StyleSheet, Text } from "react-native";

export default function Post({post, likes}) {

    return (
        <View style={styles.post}>
            <Image style={styles.image} source={{uri: post.photo}}/>
            <Text style={styles.title}>{post.description} {likes.likes}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 2}
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        
    }
})