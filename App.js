import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  LayoutAnimation,
  Modal,
  ScrollView,
  Text,
  UIManager,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BackgroundWave} from './src/Components/BackgroundWave';
import {Button} from './src/Components/Button';
import {Card} from './src/Components/Card';
import {ResultCard} from './src/Components/ResultCard';
import data from './src/questions.json';
import RandomizeTheQuestions from './src/Components/RandomizeTheQuestions';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const {width, height} = Dimensions.get('window');

const App = () => {
  const [ques_no, set_ques_no] = useState(0);
  const listRef = useRef();
  const [user_answer, set_user_answer] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [instructionModal, setInstructionModal] = useState(true);
  const [questions, setQuestions] = useState(RandomizeTheQuestions(data));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {!isSubmitted ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <FlatList
            data={questions}
            horizontal
            ref={listRef}
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            scrollEnabled={false}
            getItemLayout={(data, index) => {
              return {length: height / 1.5, index, offset: index * width};
            }}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
            renderItem={({item, index}) => {
              return (
                <Card
                  data={item}
                  question_no={ques_no + 1}
                  user_answer={user_answer[item.question_no]}
                  set_user_answer={answer =>
                    set_user_answer({
                      ...user_answer,
                      [item.question_no]: answer,
                    })
                  }
                />
              );
            }}
          />
          <View
            style={{
              width,
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: height * 0.025,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: height * 0.025,
                alignItems: 'center',
              }}>
              {data.map((data, index) => (
                <View
                  key={index}
                  style={{
                    backgroundColor: '#0E8BFF',
                    opacity: index !== ques_no ? 0.5 : 1,
                    borderRadius: 20,
                    height: index === ques_no ? 15 : 10,
                    width: index === ques_no ? 15 : 10,
                    marginRight: index < 9 ? width * 0.01 : 0,
                    elevation: 5,
                  }}
                />
              ))}
            </View>
            <View
              style={{
                flexDirection: 'row',
                width,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Button
                text={'Prev'}
                disabled={ques_no === 0}
                onPress={() => {
                  listRef.current.scrollToIndex({
                    animated: true,
                    index: ques_no - 1,
                    offset: width * (ques_no - 1),
                  });
                  set_ques_no(ques_no - 1);
                  LayoutAnimation.easeInEaseOut();
                }}
              />
              <Button
                text={ques_no === 9 ? 'Submit' : 'Next'}
                onPress={() => {
                  if (ques_no === 9) {
                    setIsSubmitted(true);
                    LayoutAnimation.easeInEaseOut();
                    setQuestions(RandomizeTheQuestions(data));
                  } else {
                    listRef.current.scrollToIndex({
                      animated: true,
                      index: ques_no + 1,
                      offset: width * (ques_no + 1),
                    });
                    set_ques_no(ques_no + 1);
                    LayoutAnimation.easeInEaseOut();
                  }
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'flex-start', alignItems: 'center'}}>
          <ResultCard user_answer={isSubmitted ? user_answer : {}} />
          <Button
            text={'Retry'}
            onPress={() => {
              setIsSubmitted(false);
              set_user_answer({});
              set_ques_no(0);
              LayoutAnimation.easeInEaseOut();
            }}
          />
        </View>
      )}
      <BackgroundWave style={{zIndex: -1, position: 'absolute', bottom: 0}} />
      <Modal
        transparent
        statusBarTranslucent
        animationType="fade"
        visible={instructionModal}>
        <View
          style={{
            backgroundColor: '#00000055',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              elevation: 10,
              paddingVertical: height * 0.025,
              width: width * 0.75,
              paddingHorizontal: width * 0.05,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#0E8BFF',
                fontWeight: 'bold',
                fontSize: height * 0.02,
                marginBottom: height * 0.025,
              }}>
              <Text style={{fontSize: height * 0.03}}>Instructions</Text>{' '}
              {'\n\n'}1. There are ten questions.{'\n'}2. For each question,
              there are four options.{'\n'}3. You can navigate to any question
              by the buttom two buttons.
            </Text>
            <Button
              text="Start Test"
              onPress={() => setInstructionModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;
