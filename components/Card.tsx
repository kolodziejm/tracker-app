import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Card, CardItem, Body, Text,
} from 'native-base';

interface Props {
  title: string;
  navigation?: any;
  onPressHandler(): any
}

const CustomCard: React.FC<Props> = ({ title, onPressHandler }) => (
  <TouchableOpacity onPress={onPressHandler}>
    <Card>
      <CardItem>
        <Body style={{ padding: 16 }}>
          <Text style={{ textAlign: 'center', width: '100%' }}>
            {title}
          </Text>
        </Body>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

export default CustomCard;
