import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import Post from "./Post";

export default function Feed() {
	const [post, setPost] = useState();

	useEffect(() => {
		fetch(`https://express-ts-c8.web.app/photos`)
			.then((res) => res.json())
			.then(setPost)
			.catch((err) => console.error(err));
	}, []);

	return (
		<ScrollView style={styles.feed}>
			{!post ? (
				<Text>Loading...</Text>
			) : (
				post.map((posts) => (
                    <Post key={posts.photoId} post={posts} likes={likes}/>
				))
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	feed: {
		backgroundColor: "#f4f5f6",
		marginTop: 40,
		width: "100%",
	},
});
