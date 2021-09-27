import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem/GoalItem';
import GoalInput from './components/GoalInput/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, {uid: Math.random().toString(), value: enteredGoal}]);
  }

  const removeGoalHandler = (idx) => {
    // setCourseGoals(currentGoals => [...currentGoals.slice(0, idx), ...currentGoals.slice(idx + 1)]);
    setCourseGoals(currentGoals => currentGoals.filter((item, index) => index !== idx))
  }

  const renderItem = (itemData) => (
    <GoalItem title={itemData.item.value} index={itemData.index} onDelete={removeGoalHandler} />)

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.button}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} color="#fff"/>
      </View>
      <GoalInput onAddGoal={addGoalHandler} modalVisible={isAddMode} toggleModal={setIsAddMode} />
      {/*Метод keyExtractor в FlatList указывает как из перебираемого массива извлечь правильно ключ,
      или в объекте явно должен быть ключ с именем key || id*/}
      <FlatList keyExtractor={(item) => item.uid} data={courseGoals} renderItem={renderItem} />
    </View>
  );
}

// Здесь мы можем использовать обычный JS объект но этот метод может оптимизировать код стилей
const styles = StyleSheet.create({
  screen: {
    paddingVertical: '20%',
    paddingHorizontal: 30,
    backgroundColor: '#eee',
    height: '100%'
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgb(50, 173, 230)',
    height: 50,
    justifyContent: 'center',
    marginBottom: 20
  }
});

export default App;
