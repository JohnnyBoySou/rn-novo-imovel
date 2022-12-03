
import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View, TouchableOpacity,  Animated,  Text, ScrollView, StatusBar,  Dimensions, Image, Linking } from 'react-native';



import { Ionicons, Fontisto , MaterialIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import {  
  Title, 
  Subtitle,
  HeaderMain,
  Back,
  LengthLabel,
  Length,
} from './styles';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import { ThemeContext } from 'styled-components/native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation, } from '@react-navigation/native';

export default function Header({ route, ...props }) {

  
  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  const title = props?.title;
  const subtitle = props?.subtitle;
  const back = props.back;
  const options = props.back;
  
  const snack = props.snack;

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);




  function voltar(){
    hideMenu()
    navigation.goBack()
  }


  function filterDesc(title){
      if(title.length < 15){
        return title;
      }
      else{
        return `${title?.substring(0, 16)}...`;
      }
    }
  
  
  function ajuda(){
    Linking.openURL('https://maisconectados.com/ajuda')
  }

  function avaliar(){
    Linking.openURL('https://play.google.com/store/apps/details?id=com.maisconectados.meunovoimovel')
  }

return (<>
    <HeaderMain>
    
    
    <MotiView delay={150} from={{ translateX: -20, opacity: 0 }} animate={{ translateX: 0, opacity: 1, }} transition={{type: 'timing'}}>
      <Back onPress={() => navigation.goBack()} >
        <MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-left" size={42} color={color.title} />
      </Back>
    </MotiView>

    
   <View style={{alignSelf: 'center', flexGrow: 2,}}>
      <Title selectable={true}> {title} </Title>
      {snack > 0 && <Length><LengthLabel>{snack}</LengthLabel></Length>}
    </View>


  <MotiView delay={150} from={{ translateX: 20, opacity: 0 }} animate={{ translateX: 0, opacity: 1, }} transition={{type: 'timing'}}>
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={
        <Back onPress={showMenu}>
          <MaterialIcons style={{textAlign: 'center',}} name="more-horiz" size={36} color={color.title} />
        </Back>
        }
        onRequestClose={hideMenu}
      >
        <MenuItem pressColor="#00000020" textStyle={{fontFamily: 'Font_Book', fontSize: 16, color: color.title}} onPress={ajuda}>Ajuda</MenuItem>
        <MenuDivider />
        <MenuItem pressColor="#00000020" textStyle={{fontFamily: 'Font_Book', fontSize: 16, color: color.title}} onPress={voltar}>Voltar</MenuItem>
        <MenuDivider />
        <MenuItem pressColor="#00000020" textStyle={{fontFamily: 'Font_Book', fontSize: 16, color: color.title}} onPress={avaliar}>Avaliar</MenuItem>
      </Menu>
      </View>

      </MotiView>
    </HeaderMain>

    

      


    </>
    
  )
}