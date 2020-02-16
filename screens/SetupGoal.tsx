import React from 'react';
import {
  Form, Item, Input, Label, Button, Text, Container, Content,
} from 'native-base';
import * as ROUTES from '../constants/routes';
import LayoutContainer from '../components/LayoutContainer';

interface Props {
  navigation: any;
}

const SetupGoal: React.FC<Props> = ({ navigation }) => (
  <LayoutContainer>
    <Form>
      <Item floatingLabel>
        <Label>How many days?</Label>
        <Input keyboardType="numeric" maxLength={3} />
      </Item>
      <Button transparent block onPress={() => navigation.replace(ROUTES.PROGRESS)}>
        <Text>Set goal</Text>
      </Button>
    </Form>
  </LayoutContainer>
);

export default SetupGoal;
