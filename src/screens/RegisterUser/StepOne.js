import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Button from '../../components/UserRegLogin/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import COLORS from '../../theme/colors';

export default StepOne = ({onNext}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z]$/, 'Only Alphabets please...')
      .min(2, 'At least Two characters.')
      .max(30, 'Too long name.')
      .required('Name is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      onNext(values);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputValue, formik.errors.name && styles.inputError]}
        placeholder="Your name please..."
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
      />
      {formik.touched.name && formik.errors.name ? (
        <Text style={styles.errorText}>{formik.errors.name}</Text>
      ) : null}
      <Button title={'Next Step →'} onPress={formik.handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
  },
  inputValue: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    backgroundColor: COLORS.grey,
    borderRadius: responsiveWidth(2),
    paddingLeft: responsiveWidth(4),
  },
  inputError: {
    borderColor: COLORS.red,
    borderWidth: 1,
  },
  errorText: {
    color: COLORS.red,
    fontSize: responsiveFontSize(1.8),
    marginTop: 5,
  },
});
