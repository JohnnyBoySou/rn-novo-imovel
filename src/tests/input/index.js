import React, { useState,  useContext } from 'react';
import { View, Dimensions, } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import {
  InputText,
  Row,
  Div,
  BtSearch,
} from './styles';

import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { FontAwesome } from '@expo/vector-icons'; 


export default function Input({ navigation }){
  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)

  const [text, onChangeText] = useState()
 
  return(
    <View >
      <Row>
        <View>
          <InputText value={text} type="number" keyboardType="number-pad" placeholder="Insira algum valor" onChangeText={text => onChangeText(text)}/>
        </View>
        <Div/>
      
        <View>
          <BtSearch onPress={() => {}}>
            <FontAwesome style={{textAlign: 'center',}} name="dollar" size={18} color="#00000080"/>
          </BtSearch>
        </View>
      
      </Row>
     
     </View>

  )
}