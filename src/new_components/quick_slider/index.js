import React from 'react';
import { View, FlatList, ImageBackground, Animated} from 'react-native'

import {ScalingDot} from "react-native-animated-pagination-dots";
import { 
  Container, 
  Title,
  Label,
  Img,

  Card,
  Spacing,
  Div,
} from './styles';


export default QuickSlider = ( props ) => {
    


    const data = [{name: 'Ajuste os filtros \npara encontrar \nmais!'}, {name: 'Escolhemos alguns imóveis que se podem te interessar!'}]

    const renderItem = ({item}) => (
      <>
      <Card onPress={() => {}} style={{marginLeft: 10, marginRight: 10, width: 300, }}>
        <ImageBackground 
        style={{ justifyContent: 'center', paddingHorizontal: 20, 
  height: 160, width: 300, paddingVertical: 20,}} 
        source={require('../../assets/banner_filter.png')}>
        <Label>{item?.name}</Label>
        </ImageBackground>
   
      </Card>    
   </>
    )
  

    const a = false;
    const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    
    
    <Container>    
    <Div/>
      
      <FlatList
            showsHorizontalScrollIndicator={false}
             onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            pagingEnabled
            horizontal
            decelerationRate={'normal'}
            data={data}
            ListHeaderComponent={() => <Spacing/>}
            ListFooterComponent={() => <Spacing/>}
            
            renderItem={renderItem}
            keyExtractor={data => data.name}
          />
        <View style={{width: 100, height: 20, marginTop: 20, marginBottom: -30, alignSelf: 'center',}}>
          <ScalingDot
            data={data}
            scrollX={scrollX}

            activeDotScale={1.4}
            inActiveDotOpacity={0.6}
            dotStyle={{
                width: 8,
                height: 8,
                backgroundColor: '#5B72F2',
                borderRadius: 5,
                marginHorizontal: 4
            }}
        />
        </View>


    </Container>
  );
};
