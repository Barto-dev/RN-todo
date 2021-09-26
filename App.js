import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalItem from './components/GoalItem/GoalItem';
import GoalInput from './components/GoalInput/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    if (enteredGoal.trim()) {
      setCourseGoals(currentGoals => [...currentGoals, {uid: Math.random().toString(), value: enteredGoal}]);
    }
  }

  const renderItem = (itemData) => (<GoalItem title={itemData.item.value} index={itemData.index} setCourseGoals={setCourseGoals}/>)

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} />
      <GoalInput onAddGoal={addGoalHandler}/>
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
  }
});

export default App;
