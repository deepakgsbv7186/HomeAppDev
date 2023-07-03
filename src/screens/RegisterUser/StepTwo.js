import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../../components/UserRegLogin/Button';
import Input from '../../components/UserRegLogin/Input';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function StepTwo() {
  return (
    <View style={styles.container}>
      <Input
        iconName="email-outline"
        label="Email"
        placeholder="Enter your email address"
        error={'Invalid Email.'}
      />
      <Button title={'Next Step →'} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
  },
});
