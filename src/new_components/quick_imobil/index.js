import React, { useContext , useState, useRef} from 'react';
import {  FlatList} from 'react-native'

import { 
  Container, 
  Title,
  Label,
  Img,

  Card,
  Spacing,
  Div,
} from './styles';


const QuickImobil = ( props ) => {
    


    const data = [{name: 'Arthur Muller'}, {name: "João Sousa"}, {name: 'Marcos Freitas'}, {name: "Andrio Jukis"}, {name: "Davi Ferrugem"}]

    const renderItem = ({item}) => (
      <Card onPress={() => {}}>
        <>
        <Img />
        <Label>{item?.name}</Label>
        </>
      </Card>    
    )
  

    const a = false;
  return (
    
    
    <Container>    
    <Div/>
      <Title>Imobiliarias Populares</Title>
      

      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListHeaderComponent={() => <Spacing/>}
            ListFooterComponent={() => <Spacing/>}
            
            renderItem={renderItem}
            keyExtractor={data => data.name}
          />


    </Container>
  );
};

export default QuickImobil;