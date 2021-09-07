import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import data from '../questions.json';
const {width, height} = Dimensions.get('window');

export const ResultCard = ({user_answer}) => {
  const [res, setRes] = useState({});

  useEffect(() => {
    let temp_res = {correct: 0, incorrect: 0, not_attempted: 0};
    data.forEach(ele => {
      if (user_answer[ele.question_no]) {
        if (user_answer[ele.question_no] === ele.correct_option) {
          temp_res.correct++;
        } else {
          temp_res.incorrect++;
        }
      } else {
        temp_res.not_attempted++;
      }
    });
    setRes(temp_res);
  }, []);

  console.log(res);

  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: 'white',
        width: width * 0.9,
        elevation: 10,
        marginVertical: height * 0.1,
        padding: width * 0.05,
        // alignItems: 'center',
        marginHorizontal: width * 0.05,
      }}>
      <Text
        style={{
          fontSize: height * 0.04,
          color: '#0E8BFF',
          fontWeight: 'bold',
          alignSelf: 'center',
        }}>
        Your Result
      </Text>

      <Text
        style={{
          fontSize: height * 0.05,
          color: '#0E8BFF',
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: height * 0.025,
        }}>
        {((res.correct || 0) / data.length) * 100}%
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: height * 0.075,
        }}>
        <Icon
          name="check-circle"
          color="#00FF70"
          size={35}
          style={{marginRight: 10}}
        />
        <Text style={{fontSize: height * 0.025, color: '#0E8BFF'}}>
          Correct Answer: {res.correct || 0} / 10
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: height * 0.025,
        }}>
        <Icon
          name="error"
          color="#FFFF00"
          size={35}
          style={{marginRight: 10}}
        />
        <Text style={{fontSize: height * 0.025, color: '#0E8BFF'}}>
          Not Attempted: {res.not_attempted || 0} / 10
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: height * 0.025,
        }}>
        <Icon
          name="cancel"
          color="#ff0900"
          size={35}
          style={{marginRight: 10}}
        />
        <Text style={{fontSize: height * 0.025, color: '#0E8BFF'}}>
          Incorrect Answer: {res.incorrect || 0} / 10
        </Text>
      </View>
    </View>
  );
};
