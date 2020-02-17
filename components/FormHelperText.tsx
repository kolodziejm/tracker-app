// import { AppRegistry } from 'react-native';
import styled from '@emotion/native';

const FormHelperText = styled.Text(
  {
    paddingLeft: 16,
    marginTop: 4,
  },
  (props: any) => (
    { color: props.color }
  ),
);

export default FormHelperText;
