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
  confirmPassword: null,
};

const CreateAccount: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(initialErrorObject);

  const firebase = useContext(FirebaseContext);

  const emailHandler = (value: any) => setEmail(value);
  const passwordHandler = (value: any) => setPassword(value);
  const confirmPasswordHandler = (value: any) => setConfirmPassword(value);

  const registerHandler = async () => {
    setErrors({ ...initialErrorObject });

    if (password !== confirmPassword) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        confirmPassword: 'Passwords don\'t match',
      }));
      return;
    }

    try {
      await firebase.createUserWithEmailAndPassword(email, password);

      navigation.navigate(ROUTES.APP_NAVIGATOR, { screen: ROUTES.SETUP_GOAL });
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
          <Input value={email} onChangeText={emailHandler} onSubmitEditing={registerHandler} autoCapitalize="none" />
        </Item>
        <FormHelperText color="red">{errors.email}</FormHelperText>
        <Item floatingLabel error={!!errors.password}>
          <Label>Password</Label>
          <Input value={password} onChangeText={passwordHandler} autoCapitalize="none" secureTextEntry />
        </Item>
        <FormHelperText color="red">{errors.password}</FormHelperText>
        <Item floatingLabel last error={!!errors.confirmPassword}>
          <Label>Confirm password</Label>
          <Input value={confirmPassword} onChangeText={confirmPasswordHandler} autoCapitalize="none" secureTextEntry />
        </Item>
        <FormHelperText color="red" style={{ marginBottom: 32 }}>{errors.confirmPassword}</FormHelperText>
        <Button block dark style={{ marginBottom: 16 }} onPress={() => registerHandler()}>
          <Text>Sign up</Text>
        </Button>
        <Button transparent block onPress={() => navigation.replace(ROUTES.LOGIN)}>
          <Text>Log in instead</Text>
        </Button>
      </Form>
    </LayoutContainer>
  );
};

export default CreateAccount;
