
import React, { useState, useContext, } from 'react';
import { View,  Dimensions, Image, StatusBar, ScrollView,  } from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign , Feather} from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { NavigationContainer, useNavigation, } from '@react-navigation/native';


import { 
  Wrapper, 
  Title, 
  Main,
  Label,

  Spacing,

  Div,
  Modal,

  Select,
  Spacing1,
  SelectLabel,
} from './styles';




import Header from '../../components/header';


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar } from 'react-native-paper';

export default function SearchNew({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


   const a = false


  const nextScreen = ( item ) => {
    navigation.navigate('NewSearchStep2', { 'item': item })
  }


  const categories = [
    "Casa", 
    "Apartamento",
    "Casa Comercial",
    "Chácara",
    "Cobertura",
    "Galpão",
    "Geminado",
    "Prédio Comercial",
    "Sala Comercial",
    "Sítio",
    "Sobrado",
    "Terreno",
    "Kitnet",
    ]




return (
  <Main>
  <Header title="Pesquisar"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
    <ScrollView style={{paddingVertical: 10, paddingHorizontal: 20,}}>
    <Title>Que tipo de imóvel você está procurando?</Title>


     <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, marginTop: 20,}}>

             
            {categories?.map((categories) => (
            <Select  onPress={() => nextScreen('Casa')}>
              <SelectLabel >Casa</SelectLabel>
            </Select>

              
            ))}
            



            <Spacing1/>

            <Select  onPress={() => nextScreen('Apartamento')}>
              <SelectLabel >Apartamento</SelectLabel>
            </Select>
            <Spacing1/>



            <Select  onPress={() => nextScreen('Casa Comercial')}>
              <SelectLabel>Casa Comercial</SelectLabel>
            </Select>
            <Spacing1/>

            <Select onPress={() => nextScreen('Chácara')}>
              <SelectLabel>Chácara</SelectLabel>
            </Select>
             <Spacing1/>

            <Select onPress={() => nextScreen('Cobertura')}>
              <SelectLabel >Cobertura</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select onPress={() => nextScreen('Galpão')}>
              <SelectLabel >Galpão</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select onPress={() => nextScreen('Geminado')}>
              <SelectLabel>Geminado</SelectLabel>
            </Select>
            
            <Spacing1/>

            <Select onPress={() => nextScreen('Prédio Comercial')}>
              <SelectLabel>Prédio Comercial</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select onPress={() => nextScreen('Sala Comercial')}>
              <SelectLabel>Sala Comercial </SelectLabel>
            </Select>
            
             <Spacing1/>
            <Select  onPress={() => nextScreen('Sítio')}>
              <SelectLabel >Sítio</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select onPress={() => nextScreen('Sobrado')}>
              <SelectLabel>Sobrado </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select onPress={() => nextScreen('Terreno')}>
              <SelectLabel>Terreno </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select onPress={() => nextScreen('Kitnet')}>
              <SelectLabel>Kitnet </SelectLabel>
            </Select>
          <Spacing1/>
        </View>

  </ScrollView>

  </Wrapper>

  </Main>
  )
}