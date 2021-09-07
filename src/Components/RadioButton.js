import React from 'react';
import {TouchableOpacity, View, Text, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const RadioButton = ({value, label, onSelect}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onSelect}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.02,
        marginHorizontal: width * 0.05,
        width: '100%',
      }}>
      <View
        style={{
          padding: width * 0.01,
          borderRadius: 50,
          borderColor: '#0E8BFF',
          borderWidth: 1,
          elevation: 10,
          backgroundColor: 'white',
        }}>
        {value ? (
          <View
            style={{
              backgroundColor: '#0E8BFF',
              width: width * 0.04,
              height: width * 0.04,
              borderRadius: 50,
            }}
          />
        ) : (
          <View
            style={{
              width: width * 0.04,
              height: width * 0.04,
              borderRadius: 500,
            }}
          />
        )}
      </View>
      <Text
        numberOfLines={1}
        style={{
          textAlignVertical: 'center',
          fontSize: height * 0.0225,
          fontWeight: '700',
          color: '#0E8BFF',
          opacity: 0.75,
          marginLeft: width * 0.025,
          width: width * 0.65,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
