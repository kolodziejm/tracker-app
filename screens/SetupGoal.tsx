import React, { useState, useContext } from 'react';
import {
  Form, Item, Input, Label, Button, Text,
} from 'native-base';
import * as ROUTES from '../constants/routes';
import LayoutContainer from '../components/LayoutContainer';
import FirebaseContext from '../context/FirebaseContext';

interface Props {
  navigation: any;
}

const SetupGoal: React.FC<Props> = ({ navigation }) => {
  const [goalValue, setGoalValue] = useState('');

  const firebase = useContext(FirebaseContext);

  const setGoalHandler = async () => {
    if (!goalValue) {
      return;
    }

    try {
      const currentUserId = firebase.auth.currentUser.uid;

      await firebase.goalsCollection.add({
        userId: currentUserId,
        days: Number.parseInt(goalValue, 10),
        dateOfStart: new Date(),
      });

      navigation.replace(ROUTES.PROGRESS);
    } catch (err) {
      console.log(err);
    }
  };

  const goalValueHandler = (value: string) => setGoalValue(value);

  return (
    <LayoutContainer>
      <Form>
        <Item floatingLabel>
          <Label>How many days?</Label>
          <Input value={goalValue} onChangeText={goalValueHandler} keyboardType="numeric" maxLength={3} />
        </Item>
        <Button transparent block onPress={setGoalHandler}>
          <Text>Set goal</Text>
        </Button>
      </Form>
    </LayoutContainer>
  );
};

export default SetupGoal;
