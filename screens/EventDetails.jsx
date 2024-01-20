import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EventDetails = ({ navigation, route }) => {

	let {event} = route.params

	return (
		<View style={styles.container}>

		<View>
			<Text >Event Details...</Text>
				<Text style={styles.title}>{event.title}</Text>
				<Text style={styles.title}>Date: {event.date}</Text>
			</View>
		</View>
		);
	};
	
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			// other styles for container
		},
		backButton: {
			position: 'absolute',
			top: 5, // Adjust top and left as per your layout
			left: 5,
			width: 40,
			height: 40,
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#DDD', // Background color for the button
			borderRadius: 20, // Makes it round
		},
		backButtonText: {
			fontSize: 18,
			color: '#000', // Color of the back icon
		},
		title: {
			fontSize: 18,
			color: '#000', // Color of the back icon
		},
		// ... other styles
	});
	
export default EventDetails;
	