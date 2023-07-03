import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CounterControllers(props) {
  const {_setCounter} = props;
  const addCounterValue = () => {
    _setCounter(temp_value => temp_value + 1);
  };
  const subCounterValue = () => {
    _setCounter(temp_value => temp_value - 1);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
      }}>
      <TouchableOpacity
        onPress={addCounterValue}
        style={{
          backgroundColor: '#147EFB',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 30,
            fontWeight: 500,
          }}>
          ADD
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={subCounterValue}
        style={{
          backgroundColor: '#147EFB',
          padding: 10,
          borderRadius: 5,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 30,
            fontWeight: 500,
          }}>
          SUB
        </Text>
      </TouchableOpacity>
    </View>
  );
}
