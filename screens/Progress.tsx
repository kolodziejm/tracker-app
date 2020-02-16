import React from 'react';
import {
  Button, Text, Container, Content, Card, CardItem, Body,
} from 'native-base';
import * as ROUTES from '../constants/routes';
import LayoutContainer from '../components/LayoutContainer';

interface Props {
  navigation: any;
}

const Progress: React.FC<Props> = ({ navigation }) => (
  <LayoutContainer>
    <Text>Day x of Goal</Text>
    <Text>TODO: PROGRESS BAR</Text>
    <Button onPress={() => navigation.push(ROUTES.NOTE)}>
      <Text>
        Finish the day
      </Text>
    </Button>
    <Button>
      <Text>
        I&apos;ve failed
      </Text>
    </Button>
    <Text>Progress notes</Text>
    <Card>
      <CardItem>
        <Body>
          <Text>
            Day 2
          </Text>
        </Body>
      </CardItem>
    </Card>
    <Card>
      <CardItem>
        <Body>
          <Text>
            Day 1
          </Text>
        </Body>
      </CardItem>
    </Card>
  </LayoutContainer>
);

export default Progress;
