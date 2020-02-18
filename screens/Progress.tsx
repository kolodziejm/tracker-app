import React, { useState, useEffect, useContext } from 'react';
import { Alert, View } from 'react-native';
import { Button, Text } from 'native-base';
import { addDays, differenceInCalendarDays, isEqual } from 'date-fns';
import * as ROUTES from '../constants/routes';
import LayoutContainer from '../components/LayoutContainer';
import Card from '../components/Card';
import FirebaseContext from '../context/FirebaseContext';


interface Props {
  navigation: any;
}

const Progress: React.FC<Props> = ({ navigation }) => {
  const [progressNotes, setProgressNotes] = useState([]);
  const [userGoal, setUserGoal] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  const [currentDayNumber, setCurrentDayNumber] = useState();

  const firebase = useContext(FirebaseContext);

  const currentUserId = firebase.auth.currentUser.uid;

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const goalQuerySnapshot = await firebase.goalsCollection.where('userId', '==', currentUserId).get();
        goalQuerySnapshot.forEach((doc) => {
          const savedUserGoal = doc.data();
          setUserGoal(savedUserGoal);
        });

        const notesQuerySnapshot = await firebase.notesCollection.where('userId', '==', currentUserId).get();
        notesQuerySnapshot.forEach((doc) => {
          const savedNotes = doc.data();
          setProgressNotes((currentNotes) => currentNotes.concat(savedNotes));
        });
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!isLoading && userGoal.hasOwnProperty.call(userGoal, 'days')) {
      const goalFinishDate = addDays(userGoal.dateOfStart.toDate(), userGoal.days);
      const difference = differenceInCalendarDays(goalFinishDate, userGoal.dateOfStart.toDate());

      setCurrentDayNumber((userGoal.days - difference) + 1);
    }
  }, [isLoading]);


  const failHandler = () => {
    const resetGoalStart = async () => {
      const goalQuerySnapshot = await firebase.goalsCollection.where('userId', '==', currentUserId).get();
      goalQuerySnapshot.forEach((doc) => {
        const savedUserGoal = doc.data();
        setUserGoal(savedUserGoal);

        firebase.goalsCollection.doc(doc.id).update({ dateOfStart: new Date() });
      });
    };

    Alert.alert('Are you sure', 'Did you really fail?', [
      { text: 'Yes', onPress: () => resetGoalStart() },
      { text: 'No', onPress: () => {} },
    ]);
  };

  const finishHandler = () => {
    navigation.push(ROUTES.NOTE, { currentDayNumber });
  };

  const cardPressHandler = (cardDate: any) => {
    const matchingNote = progressNotes.find((note) => isEqual(note.date.toDate(), cardDate.toDate()));
    navigation.push(ROUTES.NOTE, { savedNoteContent: matchingNote.noteContent, viewOnly: true });
  };

  const progressNotesList = progressNotes.length ? progressNotes.map(({ date, dayNumber }) => (
    <Card key={date.seconds} title={`Day ${dayNumber}`} onPressHandler={() => cardPressHandler(date)} />
  )) : <View />;

  return (
    <LayoutContainer>
      <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 16 }}>
        Day
        {' '}
        {currentDayNumber}
        {' '}
        of
        {' '}
        {userGoal.days}
      </Text>
      <Button onPress={finishHandler} success block style={{ marginBottom: 16 }}>
        <Text>
          Finish the day
        </Text>
      </Button>
      <Button danger block onPress={failHandler}>
        <Text>
          I&apos;ve failed
        </Text>
      </Button>
      <Text style={{ marginTop: 32, marginBottom: 8, textAlign: 'center' }}>Progress notes</Text>
      {progressNotesList}
    </LayoutContainer>
  );
};

export default Progress;
