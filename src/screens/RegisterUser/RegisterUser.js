import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import PhoneInput from "react-native-phone-number-input";
import Header from "../../components/Header/Header";
import Button from "../../components/UserRegLogin/Button";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import COLORS from "../../theme/colors";

export default function RegisterUser() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const formHeader = ["Personal", "Contact", "Address"];
  const formBody = () => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo data={formData} />;
      case 2:
        return <StepThree data={formData} />;
    }
  };
  const handleValue = (data) => {
    setFormData({ ...formData, ...data });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <View style={{ flex: 1 }}>
      <Header screenName={"Registration"} />
      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(90),
          borderWidth: 1,
          borderColor: "red",
          alignSelf: "center",
          marginTop: responsiveHeight(3),
        }}
      >
        <View
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(8),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontWeight: "500", fontSize: responsiveFontSize(2.5) }}
          >
            {formHeader[step]}
          </Text>
        </View>
        <View>{formBody()}</View>
        <View
          style={{
            width: responsiveWidth(90),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {step < 1 ? null : (
            <Button
              btnColor={COLORS.grey}
              btnWidth={"40%"}
              title={"← Back"}
              onPress={() => setStep((currentStep) => currentStep - 1)}
            />
          )}
          {step < formHeader.length - 1 ? (
            <Button
              btnColor={COLORS.blue}
              btnWidth={"40%"}
              title={"Next Step →"}
              onPress={() => setStep((currentStep) => currentStep + 1)}
            />
          ) : (
            <Button
              btnColor={COLORS.blue}
              btnWidth={"40%"}
              title={"Submit"}
              // onPress={() => setStep((currentStep) => currentStep + 1)}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const StepOne = ({ onNext }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z]{2,30}$/, "Only Alphabets please...")
      .matches(
        /^(?!.*(\w)\1\1)[\w\d]+$/,
        "No character repeat more than two times please..."
      )
      .min(2, "At least Two characters.")
      .max(30, "Too long name.")
      .required("Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputValue, formik.errors.name && styles.inputError]}
        placeholder="Your name please..."
        value={formik.values.name}
        onChangeText={formik.handleChange("name")}
        onBlur={formik.handleBlur("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <Text style={styles.errorText}>{formik.errors.name}</Text>
      ) : null}
      <Button title={"Next Step →"} onPress={formik.handleSubmit} />
    </View>
  );
};

const StepTwo = ({ data, onNext }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-z0-9_.]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?$/,
        "Please check again..."
      )
      .email("Invalid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onNext({ ...data, ...values });
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputValue, formik.errors.email && styles.inputError]}
        placeholder="Your email please..."
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.errorText}>{formik.errors.email}</Text>
      ) : null}
      <Button title={"Next Step →"} onPress={formik.handleSubmit} />
    </View>
  );
};

const StepThree = ({ data, onConfirm }) => {
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "Please check again..."
      )
      .required("Phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onConfirm({ ...data, ...values });
    },
  });

  return (
    <View style={styles.container}>
      <PhoneInput
        style={[styles.inputValue, formik.errors.phone && styles.inputError]}
        placeholder="Your phone please..."
        value={formik.values.phone}
        onChangeText={formik.handleChange("phone")}
        onBlur={formik.handleBlur("phone")}
        keyboardType="phone-pad"
      />
      {formik.touched.phone && formik.errors.phone ? (
        <Text style={styles.errorText}>{formik.errors.phone}</Text>
      ) : null}
      <Button title={"Final Step"} onPress={formik.handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(80),
    alignSelf: "center",
    marginTop: responsiveHeight(10),
  },
  inputValue: {
    fontWeight: "bold",
    fontSize: responsiveFontSize(3),
    height: responsiveHeight(6),
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
