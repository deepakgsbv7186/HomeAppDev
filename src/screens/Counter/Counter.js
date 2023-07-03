import {View} from 'react-native';
import React, {useState} from 'react';
import CounterDisplay from '../../components/CounterDisplay';
import CounterControllers from '../../components/CounterControllers';

export default function Counter() {
  const [counter, setCounter] = useState(100);
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2D4356',
        }}>
        <CounterDisplay _counter={counter} />
        <CounterControllers _setCounter={setCounter} />
      </View>
    </>
  );
}
