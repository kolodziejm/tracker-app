import React from 'react';
import {
  Form, Item, Input, Label, Button, Text, Container, Content,
} from 'native-base';
import * as ROUTES from '../constants/routes';
import LayoutContainer from '../components/LayoutContainer';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => (
  <LayoutContainer>
    <Form>
      <Item floatingLabel>
        <Label>Username</Label>
        <Input />
      </Item>
      <Item floatingLabel last style={{ marginBottom: 32 }}>
        <Label>Password</Label>
        <Input />
      </Item>
      <Button block dark style={{ marginBottom: 16 }} onPress={() => navigation.navigate(ROUTES.APP_NAVIGATOR)}>
        <Text>Sign in</Text>
      </Button>
      <Button transparent block onPress={() => navigation.replace(ROUTES.REGISTER)}>
        <Text>Create account</Text>
      </Button>
    </Form>
  </LayoutContainer>
);

export default Login;
