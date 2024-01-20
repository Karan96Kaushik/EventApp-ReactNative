// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const SettingsScreen = () => {
	const [settings, setSetting] = useState({});
	const name = useSelector((state) => state.profile.name);
	const dispatch = useDispatch();
	
	return (
		<View style={styles.container}>
			<View style={styles.inputGroup}>
				<Text style={styles.label}>Name</Text>
				<TextInput
					style={styles.input}
					value={name}
					editable={false}
					// onChangeText={setName}
					placeholder="Enter your name"
					/>
			</View>
			
			<View style={styles.setting}>
				<Text style={styles.settingText}>Notifications</Text>
				<Switch
					value={!!settings['notifications']}
					onValueChange={() => setSetting(!settings['notifications'])}
				/>
			</View>
		</View>
		);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	setting: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	settingText: {
		fontSize: 18,
		color: 'black',
	},
	inputGroup: {
		color: 'black',
		marginVertical: 10,
	},
	label: {
		marginBottom: 5,
		color: 'black',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
		color: 'black',
		height: 40,
	},
});

export default SettingsScreen;
	