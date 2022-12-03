import React from 'react';
import { View, } from 'react-native';

import Input from './input/index'
import Additional from '../new_components/additional/index'

export default function Test({ navigation }){
  return(
    <View style={{flex: 1, backgroundColor: "#fff", justifyContent: 'center',}}>
     <Additional/>
    </View>

  )
}