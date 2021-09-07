import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const Button = ({text, onPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        backgroundColor: '#0E8BFF',
        opacity: disabled ? 0.75 : 1,
        borderRadius: 20,
        elevation: 10,
        width: width * 0.35,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: height * 0.025,
          color: 'white',
          marginVertical: width * 0.035,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
