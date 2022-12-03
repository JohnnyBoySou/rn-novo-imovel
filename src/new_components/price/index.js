import React from 'react'
import { View,Dimensions,  FlatList , SafeAreaView } from 'react-native';

import { 

HeadLine,
HeadLabel,
Div,

 } from './styles'



const width = Dimensions.get('window').width;

import RowSmall from '../lists/row_small/index';


export default function Price({ route, ...props }){
  const data = props?.data

  const value_max = props.value_max

  const renderItem2 = ({ item }) => (
    <RowSmall data={item} />
  ) 


  
  return(
    <View style={{paddingBottom: 20,}}>
      <Div/>        
      <View style={{flexDirection: 'row', 
      justifyContent: 'space-between', alignContent: 'center', marginBottom: 10, marginTop: 20,
      marginHorizontal: 20,}}>


        <View style={{width: width,}}>
          <HeadLine>Até R$ {value_max}</HeadLine>
         </View>
       
       
      </View>

    <SafeAreaView style={{flex: 1,}}>

      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
          />

          
    </SafeAreaView>

    </View>

  )
}




