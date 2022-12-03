import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  padding-top: 30px;
  background: ${props => props.theme.background};

`

export const Title = styled.Text`

  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`;
export const Subtitle = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 14px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
`;


export const LengthLabel = styled.Text`
  color:#FFF;
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
  margin-top: -2px;
`;


export const Length = styled.View`
  position: absolute;
  right: 35px;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  justify-content: center;
  background: ${props => props.theme.color.primary};
`



export const HeaderMain = styled.SafeAreaView`
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  align-items: center;
`;


export const Back = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 100px;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-content: center;
`