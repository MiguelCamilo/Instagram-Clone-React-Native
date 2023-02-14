import { useContext  } from "react";
import { PostContext } from "../../App";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Post({ post, navigation }) {
    const { setCurrentPost } = useContext(PostContext)

    // this will pass the current post to the current post
    const handleTouhch = () => {
        setCurrentPost(post)
        navigation.navigate('Details')
    }

	return (
        <TouchableOpacity onPress={handleTouhch}>
		<View style={styles.post}>
			<Image style={styles.image} source={{ uri: post.photo }} />
            {/* <Text style={styles.likes}>{post.likes}</Text> */}
			<Text style={styles.title}>
				{post.description}
			</Text>
		</View>
        </TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	post: {
		margin: 30,
		padding: 13,
		borderRadius: 10,
		backgroundColor: "white",
        opacity: '90%',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        shadowColor: "black",
	},
	image: {
		width: "100%",
		height: 300,
		borderRadius: 10,
		marginBottom: 10,
	},
	title: {
        textAlign: 'center',
        fontSize: 14,
    },
    likes: {
        width: '10%',
        margin: 10,
        padding: 8,
        borderRadius: 10,
    }
});
