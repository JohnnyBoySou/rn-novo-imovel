
import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: #F1F3FF;
  border-radius: 6px;
  align-content: center;
  height: 44px;
  justify-content: center;
  padding: 12px;
`

export const Image = styled.Image`
  height: 28px;
  width: 28px;
`

export const Label = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 20px;
  margin-left: 10px;
  font-family: ${props => props.theme.font.medium};
`