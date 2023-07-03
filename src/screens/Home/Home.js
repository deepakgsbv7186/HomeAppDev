import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Home = () => {
  const imgURL =
    'https://images.unsplash.com/photo-1687372626415-6f98c4eb4cd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80';
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/astro.jpg')}
        style={{
          objectFit: 'cover',
          width: responsiveWidth(100),
          height: responsiveHeight(100),
        }}
        blurRadius={6}
      />
      <View style={{position: 'absolute', justifyContent: 'flex-start'}}>
        <View
          style={{
            width: responsiveWidth(100),
            marginHorizontal: 'auto',
            marginVertical: responsiveHeight(5),
          }}>
          <Image
            source={{uri: imgURL}}
            style={{
              objectFit: 'contain',
              width: responsiveWidth(80),
              height: responsiveHeight(20),
              alignSelf: 'center',
              borderRadius: 10,
              marginVertical: responsiveHeight(2),
            }}
          />

          <Image
            source={{uri: imgURL}}
            style={{
              objectFit: 'contain',
              width: responsiveWidth(80),
              height: responsiveHeight(20),
              alignSelf: 'center',
              borderRadius: 10,
              marginVertical: responsiveHeight(2),
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            marginTop: responsiveHeight(2),
          }}>
          LandScape View
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
