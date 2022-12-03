import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.background};
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
`;


export const Spacing = styled.View`
  width: 30px;
  height: 16px;
`;


export const Title = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.color.title};
  font-family: ${props => props.theme.font.medium};
  
  margin: 0px;
  margin-left: -20px;
  margin-bottom: 0px;
`;



export const Label = styled.Text`
  font-size: 24px;
  margin: 20px 0px;
  color: ${props => props.theme.color.label};
  font-family: ${props => props.theme.font.book};
`;

export const Hr = styled.View`
  height: 2px;
  background-color: #00000020;
`

export const Line = styled.View`
    display: flex;
    flex-direction: row;
    padding: 12px 24px;
`


export const View = styled.ScrollView`
  margin-left: -16px;
`