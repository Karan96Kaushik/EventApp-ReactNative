import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text } from 'react-native';
import DrawerProfile from './DrawerProfile'

const CustomDrawerContent = (props) => {
	return (
		<DrawerContentScrollView 
			{...props} 
			style={styles.container}
			contentContainerStyle={styles.contentContainer} // Style the container of the items
			>
			<DrawerProfile />
			<DrawerItemList {...props} />
			{/* Add other custom components or views if needed */}
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding:0,
		margin:0,
		// Apply your custom styles for the overall drawer container here
	},
	contentContainer: {
		// Styles to affect the spacing of the items
		marginVertical: 0,
		paddingVertical: 0, // Remove vertical padding
	},
	text: {
		// Styles to affect the spacing of the items
		color: 'black', // Remove vertical margins
		paddingVertical: 0, // Remove vertical padding
	},
});

export default CustomDrawerContent;