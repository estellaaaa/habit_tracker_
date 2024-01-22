import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Habit from './components/habit';
import SelectList from 'react-native-dropdown-select-list';
import habitTodayView from './components/habitTodayView';
import habitAllView from './components/habitAllView';
import settingView from './components/settingView';

const habitTodayView = () => {
    return (
        <View style={styles.container}>

        {/* Your Habits for today */}
        <View style={styles.habitsWrapper}>
        <Text style={styles.sectionTitle}>Today's Habits</Text>

        <View style={styles.items}>
            {/* This is where the habits wil go! */}
            <Habit text={'Habit 1'} />
            <Habit text={'Habit 2'} />
        </View>

        </View>

        {/* Choose a habit to add on today's list */}
        <View style={{paddingHorizontal: 20, paddingVertical: 50}}>
        <SelectList data={habits} setSelected={setSelected} />
        </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2E2929',
    },
  
    habitsWrapper: {
      paddingTop: 20,
      paddingHorizontal: 30,
    },
  
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  
    items: {
      marginTop: 30,
    }
  });