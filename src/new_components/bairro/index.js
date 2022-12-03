
import React, { useState, useRef, useContext, useCallback, useEffect }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, Text, Dimensions, ImageBackground, FlatList , SafeAreaView } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { 
HeadTitle,
Title,
Number,
Img,
Label,
LabelBt,
Div,
 } from './styles'

import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';


import Axios from 'axios';

import { API_URL } from '../../api/index';


import { SharedElement } from 'react-navigation-shared-element'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import RowLarge from '../lists/row_large/index';
import RowSmall from '../lists/row_small/index';


export default function Bairro({ route, ...props }){

  //const data = props?.data


  useEffect(() => {
    defalut()
  }, [])

  const open = props?.open
  const defalut = () => {
    if(open){
      setData(extradata)
    }
  }

  const [lengthCentro, setLengthCentro] = useState()
  const [lengthAmizade, setLengthAmizade] = useState()
  const [lengthLalau, setLengthLalau] = useState()


  async function getDados(valor){
   
     const headers = {
      'Accept': "application/json"
    }
    
    setLoading(true)
      await Axios.get(`${API_URL}/length/bairro?bairro=${valor}`, {
        headers: headers
    }).then(function (response) {
        
        setLoading(false)
        console.log(response.data.length)
        handleQtd(valor, response.data.length)

    }).catch(error => {
        console.log(error)
    })
  }


  function handleQtd (bairro, value) {
    if(bairro == "Centro"){
      setLengthCentro(value)
    }
  }



  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  
  const pegarPost = (item) => {
      navigation.push('DetailsDois', { dados: item, });};


  const [data, setData] = useState([
    {nome: 'Centro', extensao: 13, imoveis: lengthCentro}, 
    {nome: 'Água Verde', extensao: 18, imoveis: lengthAmizade}, 
    {nome: 'Águas Claras', extensao: 22, imoveis:lengthLalau},
    {nome: 'Barra do Rio Cerro', extensao: 10, },
    
  ])

  const extradata = [ 
    {nome: 'Centro', extensao: 13, imoveis: lengthCentro}, 
    {nome: 'Água Verde', extensao: 18, imoveis: lengthAmizade}, 
    {nome: 'Águas Claras', extensao: 22, imoveis:lengthLalau},
    {nome: 'Barra do Rio Cerro', extensao: 10, },
    {nome: 'Barra do Rio Molha', extensao: 10, },
    {nome: 'Boa Vista', extensao: 10, },
    {nome: 'Braço do Ribeirão Cavalo', extensao: 10, },
    {nome: 'Centenário', extensao: 10, },
    {nome: 'Chico de Paulo', extensao: 10, },
    {nome: 'Czerniewicz', extensao: 10, },
    {nome: 'Estrada Nova', extensao: 10, },
    {nome: 'Ilha da Figueira', extensao: 10, },
    {nome: 'Jaraguá 84', extensao: 10, },
    {nome: 'Jaraguá 99', extensao: 10, },
    {nome: 'Jaraguá Esquerdo', extensao: 10, },
    {nome: 'João Pessoa', extensao: 10, },
    {nome: 'Nova Brasília', extensao: 10, },
    {nome: 'Nereu Ramos', extensao: 10, },
    {nome: 'Parque Malwee', extensao: 10, },
    {nome: 'Rau', extensao: 10, },
    {nome: 'Ribeirão Cavalo', extensao: 10, },
    {nome: 'Rio Cerro I', extensao: 10, },
    {nome: 'Rio Cerro II', extensao: 10, },
    {nome: 'Rio da Luz', extensao: 10, },
    {nome: 'Rio Molha', extensao: 10, },
    {nome: 'Santa Luzia', extensao: 10, },
    {nome: 'Santo Antônio', extensao: 10, },
    {nome: 'São Luís', extensao: 10, },
    {nome: 'Tifa Martins', extensao: 10, },
    {nome: 'Tifa Monos', extensao: 10, },
    {nome: 'Três Rios do Norte', extensao: 10, },
    {nome: 'Três Rios do Sul', extensao: 10, },
    {nome: 'Vieira', extensao: 10, },
    {nome: 'Vila Baependi', extensao: 10, },
    {nome: 'Vila Lalau', extensao: 10, },
    {nome: 'Vila Lenzi', extensao: 10, },
    {nome: 'Vila Nova', extensao: 10, },
  ]
      
  const renderItem = ({ item }) => (
    <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }}>
    
    <TouchableRipple rippleColor="#00000020" style={{marginBottom: 16, borderRadius: 12,}} borderless onPress={() => navigation.navigate('Bairro', {info: item})}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>

      <View style={{flexDirection: 'row'}}>
        <Img><Fontisto name="map-marker-alt" size={28} color="#FFF" style={{textAlign: 'center', marginTop: -4,}}/></Img>
        <View style={{justifyContent: 'center', marginLeft: 16,}}>
          <Title>{item.nome}</Title>
          <Label>{item.extensao} km de extensão</Label>
        </View>
      </View>
     
    </View>
  </TouchableRipple>
  </MotiView>
  ) 
  
  const [active, setActive] = useState(false)
  const more = () => {
    setActive(!active)
    const data = [
        {nome: 'Centro', extensao: 13, imoveis: 98}, 
        {nome: 'Amizade', extensao: 18, imoveis: 75}, 
        {nome: 'Vila Lalau', extensao: 22, imoveis: 49} 
      ]
    if(active){
      setData(data)
    }else{setData(extradata) }

  }


  
  const a = false;

  
  return(
    <>
    <Div/>  
    <View style={{paddingBottom: 20, marginHorizontal: 20,}}>
      
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginBottom: 20, marginTop: 20,}}>
      <HeadTitle>Por bairro </HeadTitle>
    </View>

    <SafeAreaView style={{flex: 1,}}>
      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

          {a && <TouchableRipple onPress={more} style={{backgroundColor: color.off, 
          borderRadius: 6, paddingHorizontal: 12, paddingVertical: 10}}>
          <>
          
          
          {!active &&<LabelBt>Mostrar mais</LabelBt>}
          {active &&<LabelBt>Mostrar menos</LabelBt>}
        
        </>
          
          </TouchableRipple>}


    </SafeAreaView>

    </View>
    </>

  )
}




