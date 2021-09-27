import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Text} from 'react-native';

const GoalInput = ({onAddGoal, modalVisible, toggleModal}) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    if (enteredGoal.trim()) {
      onAddGoal(enteredGoal);
      toggleModal(false);
      setEnteredGoal('');
    }
  }

  return (
    <Modal visible={modalVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} value={enteredGoal} onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={[styles.button, styles.add]}>
            <Button title="ADD" onPress={addGoalHandler} color="#fff"/>
          </View>
          <View style={[styles.button, styles.cancel]}>
            <Button title="CANCEL" color="red" onPress={() => toggleModal(false)} color="#fff"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eee'
  },
  input: {
    borderColor: 'darkgrey',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '80%'
  },
  button: {
    flex: 1,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  add: {
    backgroundColor: 'rgb(50, 173, 230)',
    marginRight: 20,
  },
  cancel: {
    backgroundColor: 'rgb(255, 45, 85)',
  }
})

export default GoalInput;
