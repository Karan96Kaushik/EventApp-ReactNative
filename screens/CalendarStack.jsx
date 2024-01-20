import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from './Calendar';
import EventDetails from './EventDetails';

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarView" options={{ headerShown: false }} component={Calendar} />
      <Stack.Screen name="EventDetails" options={{ headerShown: false }} component={EventDetails} />
    </Stack.Navigator>
  );
};

export default CalendarStack;
