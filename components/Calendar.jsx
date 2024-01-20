// CalendarComponent.jsx
import React from 'react';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = () => {
  return (
    <Calendar
        // Initially visible month. Default = now
        current={'2024-01-17'}
        // Callback that gets called on day press
        onDayPress={(day) => {
        console.log('selected day', day);
        }}
        // Month format in calendar title
        monthFormat={'yyyy MM'}
        // Do not show arrows to switch between months
        hideArrows={false}
        // Replace default arrows with custom ones
        // renderArrow={(direction) => (<Arrow />)}
        // Handler which gets executed when visible month changes in calendar
        onMonthChange={(month) => {
        console.log('month changed', month);
        }}
        // Hide day names
        hideDayNames={false}
        // Show week numbers to the left
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right
        onPressArrowRight={addMonth => addMonth()}
  />
  );
};

export default CalendarComponent;
