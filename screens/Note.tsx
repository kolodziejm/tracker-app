import React, { useState, useContext } from 'react';
import {
  Form, Textarea, Button, Text,
} from 'native-base';
import LayoutContainer from '../components/LayoutContainer';
import FirebaseContext from '../context/FirebaseContext';

interface Props {
  navigation: any;
  route: any;
}

const Note: React.FC<Props> = ({ navigation, route }) => {
  const [noteContent, setNoteContent] = useState('');

  const firebase = useContext(FirebaseContext);

  const { currentDayNumber, viewOnly, savedNoteContent } = route.params;

  const noteSaveHandler = async () => {
    if (!noteContent) {
      return;
    }

    try {
      const currentUserId = firebase.auth.currentUser.uid;

      await firebase.notesCollection.add({
        noteContent,
        dayNumber: currentDayNumber,
        date: new Date(),
        userId: currentUserId,
      });

      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const noteContentHandler = (content: string) => setNoteContent(content);

  return (
    <LayoutContainer>
      <Form>
        <Textarea value={savedNoteContent || noteContent} onChangeText={noteContentHandler} rowSpan={5} bordered placeholder="How did you feel today?" underline={false} disabled={viewOnly} />
        {!viewOnly && <Button block dark onPress={noteSaveHandler}>
          <Text>
            Save note
          </Text>
        </Button>}
      </Form>
    </LayoutContainer>
  );
};

export default Note;
