import styled from 'styled-components/native';
import { TouchableRipple } from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';

export const Valor = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  text-align: center;
  padding: 10px 14px;
  font-family: ${props => props.theme.font.medium};
  border-radius: 4px;

`


export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF30"
}))`
  margin-right: 15px;
  justify-content: flex-end;
  border-radius: 8px;
  width: 200px;
  height: 250px;
  `


export const Title = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 32px;
  font-family: ${props => props.theme.font.bold};
`;


export const SubTitle = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
`;

export const Spacing = styled.View`
  height: 120px;
  width: 10px;
`


export const QuickBt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  onPress: () => {}, 
  rippleColor: "#33333330"
}))`
  margin-right: 10px;
  justify-content: center;
  border-radius: 30px;
  padding: 12px 25px;
  background: ${props => props.theme.color.off};
  `

export const QuickButtons = styled.View`
  flex-direction: row;
  padding-left: 0px;
  margin-bottom: 20px;
`

export const BtLabel = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 16px;
  font-family: ${props => props.theme.font.medium};
`;

export const Gradient = styled(LinearGradient).attrs(() => ({
 
}))`
  height: 100px; 
  width: 100%; 
  position: absolute;
  

`

export const EmojiImg = styled.View`
  width: 24px;
  height: 24px;
  background: ${props => props.theme.color.secundary};
  align-self: center;
  border-radius: 4px;
  `

export const Emoji = styled.View`
  width: 40px;
  height: 50px;
  position: absolute; 
  top: 0px;
  justify-content: center;
  z-index: 99;
  right: 20px;
  background: #f1f1f1;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 2px;
`
