import React, { useState, useContext } from 'react';
import {
  Form, Item, Input, Label, Button, Text,
} from 'native-base';
import * as ROUTES from '../constants/routes';
import LayoutContainer from '../components/LayoutContainer';
import FirebaseContext from '../context/FirebaseContext';
import FormHelperText from '../components/FormHelperText';

interface Props {
  navigation: any;
}

const initialErrorObject = {
  email: null,
  password: null,
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(initialErrorObject);

  const firebase = useContext(FirebaseContext);

  const emailHandler = (value: any) => setEmail(value);
  const passwordHandler = (value: any) => setPassword(value);

  const loginHandler = async () => {
    setErrors({ ...initialErrorObject });

    try {
      await firebase.signInWithEmailAndPassword(email, password);

      navigation.navigate(ROUTES.APP_NAVIGATOR);
    } catch (err) {
      const { code, message } = err;

      if (code.includes('email')) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          email: message,
        }));
        return;
      }

      if (code.includes('password')) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          password: message,
        }));
      }
    }
  };

  return (
    <LayoutContainer>
      <Form>
        <Item floatingLabel error={!!errors.email}>
          <Label>Email</Label>
          <Input value={email} onChangeText={emailHandler} onSubmitEditing={loginHandler} autoCapitalize="none" />
        </Item>
        <FormHelperText color="red">{errors.email}</FormHelperText>
        <Item floatingLabel error={!!errors.password}>
          <Label>Password</Label>
          <Input value={password} onChangeText={passwordHandler} autoCapitalize="none" secureTextEntry />
        </Item>
        <FormHelperText color="red">{errors.password}</FormHelperText>
        <Button block dark style={{ marginBottom: 16 }} onPress={() => loginHandler()}>
          <Text>Sign in</Text>
        </Button>
        <Button transparent block onPress={() => navigation.replace(ROUTES.REGISTER)}>
          <Text>Create account</Text>
        </Button>
      </Form>
    </LayoutContainer>
  );
};

export default Login;
