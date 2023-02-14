import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { PostContext } from "../../App";
import Post from "./Post";

export default function Details() {
	const { currentPost } = useContext(PostContext);
	return (
		<View style={styles.post}>
			<Post post={currentPost}/>
		</View>
	);
}

const styles = StyleSheet.create({
    post: {
        backgroundColor: "#023047",
        height: '100%',
    }
})