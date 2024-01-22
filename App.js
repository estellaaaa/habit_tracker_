import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Habit from './components/habit';
import SelectList from 'react-native-dropdown-select-list';
import habitTodayView from './components/habitTodayView';
import habitAllView from './components/habitAllView';
import settingView from './components/settingView';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HabitDueToday"> {/* Set initial route here */}
        <Stack.Screen name="HabitDueToday" component={HabitDueTodayView} />
        <Stack.Screen name="HabitAll" component={HabitAllView} />
        <Stack.Screen name="Settings" component={SettingsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;