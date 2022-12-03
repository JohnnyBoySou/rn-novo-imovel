import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';
import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 20px;
  background: ${props => props.theme.background};

`

export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
  
`;

export const Label = styled.Text`
  color: #717485;
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-top: 6px;
  line-height: 28px;
`;





export const Subheadline = styled.Text`
  color:${props => props.theme.color.label};
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;

export const Modal = styled.View`
  margin: 24px 24px;
  padding: 20px;

`

export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.off ? "#EB5757" : "#5B72F2"};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 20px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;

`


export const ButtonLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 20px;
  text-align: center;
  margin-top: 2px;
  flex-grow: 2;
  font-family: ${props => props.theme.font.medium};
`;

export const ButtonIcon = styled.View`
  width: 60px;
  border-left-color: #FFF;
  border-left-width: 2px;
  margin-top: -20px;
  margin-bottom: -20px;
`



export const Spacing = styled.View`
  width: 20px;
  height: 10px;
`
export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`





export const Select = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  flex-grow: 1;
`

export const SelectLabel = styled.Text`
  color: ${props => props.activity ? "#FFF" : "#5B72F2"};
  font-size: 18px;
  font-family: ${props => props.activity ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;


export const Spacing1 = styled.View`
  width: 0px;
  height: 00px;
`


