import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddHabitForm = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddHabit = () => {
    // Perform any validation or additional logic if needed
    const newHabit = {
      habitId: Date.now(), // You may want to generate a unique ID
      name: habitName,
      dueDate: dueDate,
      isCompleted: false,
    };

    // Call the onAddHabit callback with the new habit
    onAddHabit(newHabit);

    // Clear the form
    setHabitName('');
    setDueDate('');
  };

  return (
    <View>
      <TextInput
        placeholder="Habit Name"
        value={habitName}
        onChangeText={setHabitName}
      />
      <TextInput
        placeholder="Due Date"
        value={dueDate}
        onChangeText={setDueDate}
      />
      <TextInput
        placeholder="Schedule"
        value={scheduleDates}
        onChangeText={setScheduleDates}
      />
      <Button title="Add Habit" onPress={handleAddHabit} />
    </View>
  );
};

export default AddHabitForm;