import React, { useContext , useState, useEffect} from 'react';


import { ThemeContext } from 'styled-components/native';
import { 
  Container, 
  Line,
  Title,
  Label,
  Hr,
  View,

} from './styles';
import ListH2 from '../../new_components/lists/row_small';

const Similar = ( props ) => {
    const item = props?.data
    const { color } = useContext(ThemeContext)
    const quickItem = [item[1] , item[2] , item[3]]


  return (
    
    <Container>    
      <Line>
        <Title>Imóveis relacionados</Title>
      </Line> 
      <View horizontal={true} showsHorizontalScrollIndicator={false}>
      {quickItem?.map((quickItem) => 
      <ListH2 
      key={quickItem?.ID} data={quickItem}/> )}
      </View>
    </Container>
  );
};

export default Similar;