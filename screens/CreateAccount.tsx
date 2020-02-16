import React from 'react';
import {
  Form, Item, Input, Label, Button, Text, Container, Content,
} from 'native-base';
import * as ROUTES from '../constants/routes';
import LayoutContainer from '../components/LayoutContainer';

interface Props {
  navigation: any;
}

const CreateAccount: React.FC<Props> = ({ navigation }) => (
  <LayoutContainer>
    <Form>
      <Item floatingLabel>
        <Label>Username</Label>
        <Input />
      </Item>
      <Item floatingLabel>
        <Label>Password</Label>
        <Input />
      </Item>
      <Item floatingLabel last style={{ marginBottom: 32 }}>
        <Label>Confirm password</Label>
        <Input />
      </Item>
      <Button block dark style={{ marginBottom: 16 }} onPress={() => navigation.navigate(ROUTES.APP_NAVIGATOR)}>
        <Text>Sign up</Text>
      </Button>
      <Button transparent block onPress={() => navigation.replace(ROUTES.LOGIN)}>
        <Text>Log in instead</Text>
      </Button>
    </Form>
  </LayoutContainer>
);

export default CreateAccount;
