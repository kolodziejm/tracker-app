import React from 'react';
import {
  Form, Textarea, Button, Text,
} from 'native-base';
import LayoutContainer from '../components/LayoutContainer';

interface Props {
  navigation: any;
}

const Note: React.FC<Props> = ({ navigation }) => (
  <LayoutContainer>
    <Form>
      <Textarea rowSpan={5} bordered placeholder="How did you feel today?" underline={false} />
      <Button block dark>
        <Text>
          Save note
        </Text>
      </Button>
    </Form>
  </LayoutContainer>
);

export default Note;
