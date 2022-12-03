
import React, { useState, useRef, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence, Skeleton } from 'moti'

import { View, FlatList, Dimensions, ImageBackground, ScrollView  } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';

import { Title,
  SubTitle,  
  Spacing,
  Button,
  QuickBt,
  QuickButtons,
  BtLabel,
  Gradient,
  Emoji,
  EmojiImg,
  
 } from './styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import image from '../../assets/banner_filter.png'

export default function Additional({ route, ...props }){

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)

  
  
  const pegarPost = (item) => {
      navigation.navigate('DetailsDois', { dados: item, });};
      
  const data = props?.data;

  const renderItem = ({item}) => (
     <Button onPress={() => pegarPost(item)} style={{backgroundColor: color.primary}}>
        <ImageBackground source={{uri: item?.imagem1}} resizeMode="cover" style={{ flex: 1, justifyContent: 'flex-end'}}>
        <>
        <View style={{paddingHorizontal: 20, zIndex: 99, paddingBottom: 15, }}>
          <SubTitle>{item.qtd1} quartos      {item.area} m2</SubTitle>
          <Title>R$ {item.valor_mensal}</Title>
        </View>
        <Gradient colors={['transparent', 'rgba(0,0,0,0.6)']} />
        <Emoji>
          <EmojiImg/>
        </Emoji>
        </>
        </ImageBackground>
      </Button>
  )

  const list = [
    {name: 'Toda familia', emoji: 0},
    {name: 'Leve seu pet', emoji: 0},
    {name: 'Perto da escola', emoji: 0},
    {name: 'Para universitários', emoji: 0},
    ]

  const renderList = ({item}) => (<QuickBt><BtLabel>{item?.name}</BtLabel></QuickBt> )
  
  return(
    <View>
    <Title style={{color: color.title, paddingLeft: 20, marginBottom: 18, fontSize: 24,}}>Explore</Title>

    <QuickButtons>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            ListHeaderComponent={() => <View style={{width: 20}}/>}
            data={list}
            renderItem={renderList}
            keyExtractor={data => data.name}
          />
    </QuickButtons>

     <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListHeaderComponent={() => <View style={{width: 20}}/>}
            ListFooterComponent={() => <Spacing/>}
            
            renderItem={renderItem}
            keyExtractor={data => data.name}
          />

    </View>

  )
}




