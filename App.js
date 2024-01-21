import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Habit from './components/habit';
export default function App() {
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
