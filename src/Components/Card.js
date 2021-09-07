import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {RadioButton} from './RadioButton';
const {height, width} = Dimensions.get('window');

const getImage = no => {
  return no === 1
    ? require('../Assets/img_1.jpg')
    : no === 2
    ? require('../Assets/img_2.jpg')
    : no === 3
    ? require('../Assets/img_3.jpg')
    : no === 4
    ? require('../Assets/img_4.jpg')
    : no === 5
    ? require('../Assets/img_5.jpg')
    : no === 6
    ? require('../Assets/img_6.jpg')
    : no === 7
    ? require('../Assets/img_7.jpg')
    : no === 8
    ? require('../Assets/img_8.jpg')
    : no === 9
    ? require('../Assets/img_9.jpg')
    : no === 10
    ? require('../Assets/img_10.jpg')
    : null;
};

export const Card = ({data, set_user_answer, user_answer, question_no}) => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: 'white',
        // height: height / 1.5,
        width: width * 0.9,
        elevation: 10,
        marginTop: height * 0.075,
        padding: width * 0.025,
        alignItems: 'center',
        paddingTop: height * 0.055,
        marginHorizontal: width * 0.05,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          paddingVertical: width * 0.01,
          width: width * 0.25,
          borderRadius: 100,
          position: 'absolute',
          top: -height * 0.05,
          borderWidth: 2.5,
          borderColor: '#64B5F6',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: height * 0.05,
            flex: 1,
            width: width * 0.25,
            textAlign: 'center',
          }}
          numberOfLines={1}>
          {question_no}
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '500',
          fontSize: height * 0.0225,
          color: 'black',
          textAlign: 'left',
          marginBottom: height * 0.01,
          marginHorizontal: width * 0.025,
        }}>
        {data.question}
      </Text>
      <View
        style={{
          borderRadius: 20,
          elevation: 10,
          marginBottom: height * 0.02,
          backgroundColor: 'white',
        }}>
        <Image
          source={getImage(data.question_no)}
          resizeMode="stretch"
          style={{
            height: height * 0.25,
            width: width * 0.75,
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{alignSelf: 'flex-start', width: width * 0.75}}>
        <RadioButton
          label={data.options.option_1}
          value={user_answer === 'option_1'}
          onSelect={() => set_user_answer('option_1')}
        />
        <RadioButton
          label={data.options.option_2}
          value={user_answer === 'option_2'}
          onSelect={() => set_user_answer('option_2')}
        />
        <RadioButton
          label={data.options.option_3}
          value={user_answer === 'option_3'}
          onSelect={() => set_user_answer('option_3')}
        />
        <RadioButton
          label={data.options.option_4}
          value={user_answer === 'option_4'}
          onSelect={() => set_user_answer('option_4')}
        />
      </View>
    </View>
  );
};
