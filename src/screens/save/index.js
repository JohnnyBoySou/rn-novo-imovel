
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, FlatList, SafeAreaView } from 'react-native';

import { Ionicons, Fontisto , MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,
  Div,
  Spacing,
  B,
  Tips,
} from './styles';


import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/header';
import Axios from 'axios';

import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'
import { TouchableRipple } from 'react-native-paper';

import RowLarge from '../../new_components/lists/row_large/index'

import { API_URL } from '../../api/index';

import Like from '../../new_components/like/index';

import RowLargeLoading from '../../new_components/loading/rowlarge_vertical';

export default function Save({ navigation, route, ...props }) {



  const { color, font, opacity } = useContext(ThemeContext)


  
  const getSaveIDs = async ( ) => {
    try {
      const value = await AsyncStorage.getItem('@SAVE__IDS')
      if(value !== null) {
        const result = JSON.parse(value)
        setDataSave(result)
        setSaves(result)
      }
      else{
        console.log('null value')
      }

    } catch(e) {
      console.log(e)
    }
  }



  const [dataSave, setDataSave] = useState([])

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [codigo, setCodigo] = useState()

  useEffect(() => {
    getSaveIDs()
  }, [])

  

  function setSaves( value ){
    for (var i = 0; i < value.length; i++) {
     getSave(value[i])
    }
  }



  async function getSave(value){
     const headers = {
      'Accept': "application/json"
    }
    setLoading(true)
    await Axios.get(`${API_URL}/salvos/list?ID=${value}`, {
        headers: headers
    }).then(function (response) {
        const result = response.data[0]


        data.push(result)

        setLoading(false)
        setDataLe(data.length)
    
    }).catch(error => {
        console.log(error)
    })
  }

  




  


  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const [load, setLoad] = useState(true)



  const onOpen = () => {
    modalizeRef.current?.open();
  }
  const [datale, setDataLe] = useState()


  const modalizeRef = useRef()


  const atualizaca = false

  
  const renderItem = ({ item }) => (
    <><RowLarge data={item} />
    <View style={{width: 10, height: 5,}}/></>
  ) 


return (
  <Main>
  <Header title="Salvos"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>

        <View style={{backgroundColor: color.off, width: 78, height: 78, borderRadius: 100, 
        alignSelf: 'center', justifyContent: 'center', marginBottom: 10,}}>
        <Text style={{textAlign: 'center',}}>
          <AntDesign name="hearto" size={42} color={color.primary} style={{textAlign: 'center'}} /></Text>
        </View>

        
        <Title>Seus Im??veis Salvos</Title>
        
        {!loading && 
        <MotiView delay={200} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} 
          transition={{type: 'timing'}}>
          <Label>Encontramos {datale} im??veis</Label>
        </MotiView>}

        

      {loading && <View style={{marginTop: 20,}}><RowLargeLoading style={{marginTop: 20,}}/></View>}



      {!loading &&  
       <MotiView delay={300} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
      <SafeAreaView style={{paddingHorizontal: 20,}}>
      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={data}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 0,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      </SafeAreaView> 
      </MotiView>}

  
        <View style={{marginTop: 30, marginBottom: 30,}}>
          <Text style={{textAlign: 'center'}}>
            <Feather style={{alignSelf: 'center'}} name="alert-circle" size={28} color={color.label} />
             
          </Text>
         <Tips>
          Clique sobre o bot??o de  <Ionicons name="heart-outline" size={16} style={{textAlign: 'center'}} color={color.label}/>  para salvar um im??vel </Tips>
        </View>
    
  </Wrapper>

  
  </Main>
  )
}