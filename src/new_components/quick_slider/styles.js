import styled from 'styled-components/native';
import {  TouchableRipple } from 'react-native-paper';

export const Container = styled.View`
  background: ${props => props.theme.background};
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  
`;


export const Spacing = styled.View`
  width: 10px;
  height: 16px;
`;


export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.bold};
  
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;



export const Label = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.medium};
  margin-top: 4px;
`;




export const Img = styled.View`
    width: 64px;
    height: 64px;
    border-radius: 100px;
    background: #00000020;
    align-self: center;
`


export const Card = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background-color: red;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: 140px;
  `


export const Div = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.color.off};

`

