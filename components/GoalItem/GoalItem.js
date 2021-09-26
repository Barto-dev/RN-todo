import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const GoalItem = ({title,index, setCourseGoals}) => {

  const removeGoalHandler = (idx) => {
    setCourseGoals(currentGoals => [...currentGoals.slice(0, idx), ...currentGoals.slice(idx + 1)]);
  }

  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
      <Button title="Remove" onPress={() => removeGoalHandler(index)} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default GoalItem;
