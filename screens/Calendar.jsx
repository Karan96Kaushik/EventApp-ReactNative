import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Calendar from '../components/Calendar'; // Assuming you have a Calendar component

const CalendarScreen = ({navigation}) => {
  // Example data for events
  const events = [
    { id: '1', title: 'Event 1', date: '2024-01-20' },
    { id: '2', title: 'Event 2', date: '2024-01-22' },
    // ... more events
  ];

    // Modify the renderEventItem function in CalendarScreen.jsx
    const renderEventItem = ({ item }) => (
        <TouchableOpacity 
        style={styles.eventItem}
        onPress={() => navigation.navigate('EventDetails', { event: item })}
        >
        <Text style={styles.icon}>🌟</Text>
        <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
        </View>
        </TouchableOpacity>
    );
  

  return (
    <View style={styles.container}>
      <Calendar />
      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0', // A slightly darker background
  },
  icon: {
    marginRight: 10,
    color: 'black', // Ensure the icon is black (if it's a text-based icon)
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Black text for the title
  },
  eventDate: {
    fontSize: 14,
    color: 'black', // Black text for the date
  },
});

export default CalendarScreen;
