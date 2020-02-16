import React from 'react';
import {
  Container, Content,
} from 'native-base';

interface Props {

}

const LayoutContainer: React.FC<Props> = ({ children }) => (
  <Container>
    <Content padder>
      {children}
    </Content>
  </Container>
);

export default LayoutContainer;
