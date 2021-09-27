import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = ({title,index, onDelete}) => {

  return (
    <TouchableOpacity underlayColor={'blue'} onLongPress={onDelete.bind(null, index)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 15,
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
