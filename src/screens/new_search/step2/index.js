
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
  Sublabel,
  Input
} from './styles';



import Header from '../../../components/header';


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { ProgressBar } from 'react-native-paper';

export default function SearchNewStep2({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


   const a = false


  const nextScreen = ( item ) => {
    navigation.navigate('SearchOther', { 'item': item })
  }


  const [quartos, setQuartos] = useState(3)

return (
  <Main>
  <Header title="Pesquisar"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
    <ScrollView style={{paddingVertical: 10, paddingHorizontal: 20,}}>
    <Title>Quantos quartos seriam o ideal? </Title>
    <Sublabel>(Opcional)</Sublabel>

     <View style={{marginBottom: 10, marginTop: 20,}}>

            
            
            <Spacing1/>

            <Input value={quartos} autoFocus={false} onChangeText={setQuartos}/>
           

            
            <Spacing1/>
            <Select activity={true} onPress={() => nextScreen('Kitnet')}>
              <SelectLabel activity={true}>Próximo</SelectLabel>
            </Select>
          <Spacing1/>
    </View>

  </ScrollView>

  </Wrapper>

  </Main>
  )
}