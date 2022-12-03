import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


export const HeadTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`;



export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.medium};
`;


export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
`;



export const LabelBt = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;


export const Number = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 32px;
  text-align: center;
  padding: 12px;
  border-radius: 8px;
  background: ${props => props.theme.color.off}60;
  font-family: ${props => props.theme.font.bold};
`;


export const Img = styled.View`
  width: 62px;
  height: 62px;
  background-color: ${props => props.theme.color.primary};
  border-radius: 14px;
  justify-content: center;
`


export const Div = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.color.off};

`



