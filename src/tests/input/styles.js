import styled from 'styled-components/native';
import { TouchableRipple } from 'react-native-paper';


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
  rippleColor: "#33333330"
}))`
  margin-right: 15px;
  justify-content: center;
  border-radius: 8px;
  padding: 12px;
  width: 160px;
  `

export const Title = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`;

export const Spacing = styled.View`
  height: 120px;
  width: 10px;
`

export const InputText = styled.TextInput`
  font-size: 16px;
  height: 42px;
  padding-left: 10px;
  font-family: ${props => props.theme.font.book};
`

export const Row = styled.View`
  flex-direction: row;
  border-width: 2px;
  border-color: #00000050;
  width: 250px;
  margin: auto;
  justify-content: space-between;
  border-radius: 4px;
`

export const Div = styled.View`
  width: 2px;
  height: 30px;
  background: #00000020;
  align-self: center;
`

export const BtSearch = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#33333330"
}))`
  width: 42px;
  margin-right: 2px;
  height: 42px;
  justify-content: center;
  text-align: center;
  border-radius: 30px;
`




