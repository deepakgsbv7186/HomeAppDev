import {View, Text} from 'react-native';
import React from 'react';

export default function CounterDisplay(props) {
  const {_counter} = props;
  return (
    <View
      style={{
        margin: 20,
        backgroundColor: '#A2FF86',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '30%',
        borderRadius: 5,
      }}>
      <View>
        <Text style={{fontSize: 120, fontWeight: 500, color: 'white'}}>
          {_counter}
        </Text>
      </View>
    </View>
  );
}
