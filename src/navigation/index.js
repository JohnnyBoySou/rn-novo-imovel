
import React, { useEffect, useState, useRef, useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, Ionicons, MaterialCommunityIcons, Fontisto, Feather , SimpleLineIcons  } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { View, TouchableOpacity,  Animated, FlatList, ActivityIndicator,  ScrollView,  Dimensions, Image, Pressable } from 'react-native';
import { Label } from './styles.js';

import AppLoading from 'expo-app-loading';

import HomeScreen from '../screens/home/index';
import DetailsScreen from '../screens/details';
import ImageScreen from '../screens/image_zoom/index';
import ValorScreen from '../screens/splash/valor';
import BuscaScreen from '../screens/splash/busca';
import MapaScreen from '../screens/splash/mapa';
import VerMapaScreen from '../screens/map';
import ImobilScreen from '../screens/imobil';
import SettingsScreen from '../screens/settings';
import SearchScreen from '../screens/search';
import DestaquesScreen from '../screens/destaques';
//import ResultScreen from '../screens/search/result';
import LoadScreen from '../screens/load';
import AsyncSplashScreen from '../screens/async';
//import ListScreen from '../screens/list';
import InnerMapScreen from '../screens/innermap';
import FinalizarScreen from '../screens/finalizar';
//import PlanosScreen from '../screens/planos/index';
//import MatchScreen from '../screens/match/index';
//import TagScreen from '../screens/tag/index'; 

import AcessibilidadeScreen from '../screens/acessibilidade'; 
import VisitarScreen from '../screens/splash/visitar';
import SaveScreen from '../screens/save';


import ErrorScreen from '../screens/error/index';
import NotifyScreen from '../screens/notify';
import SplashScreen from '../screens/splash/index';

import FinanciarScreen from '../screens/financiar/index';
import DetailsDoisScreen from '../screens/detailsdois';
import NewScreen from '../screens/newscreen/index';
import PerfilScreen from '../screens/perfil/index';
import DadosImovelScreen from '../screens/dadosimovel/index';

import StorysScreen from '../screens/storys/index';
import MainScreens from '../screens/mainscreens/index';

import GalleryScreen from '../screens/gallery/index';
import BairroScreen from '../screens/bairro/index';


import MessagesScreen from '../screens/messages/index';

import ExplorarScreen from '../screens/explorar/index';

import DraftMapScreen from '../screens/draft_map/index';


import MapButton from '../components/mapbutton/index';

import TestScreen from '../tests/index'


import NewSearchScreen from '../screens/new_search';
import NewSearchStep2Screen from '../screens/new_search/step2/index'


import { ThemeContext } from 'styled-components/native';
import { MotiView, useAnimationState, AnimatePresence } from 'moti'


import { SharedElement,
  createSharedElementStackNavigator


 } from 'react-navigation-shared-element'




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const icons = {
  Home: {
    lib: Ionicons,
    name: 'md-home-outline',
    title: 'Ínicio',
    name_outline: 'md-home',
    colorIcon: "#FFF",
  },
  Config: {
    lib: Ionicons,
    name: 'settings-outline',
    name_outline: 'settings',
    title: 'Ajustes',
    colorIcon: "#FFF"
  },
  Search: {
    lib: AntDesign,
    title: 'Pesquisar',
    name: 'search1',
    name_outline: 'search1',
    colorIcon: "#FFF"
  },
  Save: {
    title: 'Destaques',
    lib: AntDesign,
    name: 'hearto',
    name_outline: 'heart',
    colorIcon: '#FFF',
  },
  InnerMap: {
    title: 'Mapa',
    lib: Feather,
    name: 'map',
    name_outline: 'star',
    colorIcon: '#FFF',
  }
};



function TabNavigator() {

  const { color } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)


  
  return (
    <Tab.Navigator initialRouteName="Home" 
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name, name_outline, colorIcon, title, } = icons[route.name];
          
          if (route.name === 'InnerMap') {
            return (<MapButton onPress={() => navigation.navigate('InnerMap')} focused={focused}/>);}

          if(focused){
            return <>
            
              <View style={{backgroundColor: "#F1F3FF", padding: 18, borderTopLeftRadius: 12, borderTopRightRadius: 12,}}>
                <Icon name={name_outline} size={28} color="#5B72F2" style={{textAlign: 'center',}} />
              </View>
              <View style={{width: '100%', height: 4, backgroundColor: "#5B72F2", position: 'absolute', bottom: 0, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}/>
              </>;
            }else{
            return <><Icon name={name} style={{textAlign: 'center',}}  size={24} color="#00000060" /></>;}
          },
      })}
      tabBarOptions={{
        showLabel: false,
        style:{height: 64,elevation: 0,borderTopWidth: 0,zIndex: 999},
        activeTintColor: color.primary,
        inactiveTintColor: color.activity,
        activeBackgroundColor: "#fff",
        labelStyle:{fontFamily: font.medium, fontSize: 16,}}}>
      
      <Tab.Screen name="Home" component={HomeScreen}  options={{title: 'Início',...TransitionPresets.ModalSlideFromBottomIOS, }}/>    
      <Tab.Screen name="Search" component={SearchScreen}  options={{title: 'Pesquisar',...TransitionPresets.ModalSlideFromBottomIOS, }}/>
      <Tab.Screen name="InnerMap" component={InnerMapScreen}  options={{title: 'Mapa',...TransitionPresets.ModalSlideFromBottomIOS, }}/>
      <Tab.Screen name="Save" component={SaveScreen}  options={{title: 'Destaques',...TransitionPresets.ModalSlideFromBottomIOS, }}/>
      <Tab.Screen name="Config" component={SettingsScreen}  options={{title: 'Ajustes',...TransitionPresets.ModalSlideFromBottomIOS, }}/>
    </Tab.Navigator>

  );
}

export default function App() {

  let [fontsLoaded] = useFonts({
    Font_Book: require('../assets/fonts/Circular_Book.ttf'),
    Font_Medium: require('../assets/fonts/Circular_Medium.ttf'),
    Font_Bold:  require('../assets/fonts/Circular_Bold.ttf'),
    Font_Black: require('../assets/fonts/Circular_Black.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (

   <NavigationContainer>
    <Stack.Navigator initialRouteName="TabNavigator" 
    screenOptions={{headerShown: false, ...TransitionPresets.SlideFromRightIOS,}} >

      <Stack.Screen name="Test" component={TestScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="MainScreens" component={MainScreens} />


      <Stack.Screen name="NewSearch" component={NewSearchScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
      
      <Stack.Screen name="NewSearchStep2" component={NewSearchStep2Screen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>

      <Stack.Screen name="DetailsDois" component={DetailsDoisScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
       <Stack.Screen name="Finalizar" component={FinalizarScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/> 
      <Stack.Screen name="Error" component={ErrorScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/> 
      <Stack.Screen name="Notify" component={NotifyScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
      <Stack.Screen name="Splash" component={SplashScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Visitar" component={VisitarScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Valor" component={ValorScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Busca" component={BuscaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
      <Stack.Screen name="Mapa" component={MapaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="VerMapa" component={VerMapaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Imobil" component={ImobilScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Search" component={SearchScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Load" component={LoadScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Async" component={AsyncSplashScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="ImageZoom" component={ImageScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Gallery" component={GalleryScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>

      
      <Stack.Screen name="Bairro" component={BairroScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
      <Stack.Screen name="Messages" component={MessagesScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
      <Stack.Screen name="Explorar" component={ExplorarScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
  
      <Stack.Screen name="DraftMap" component={DraftMapScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
            
      <Stack.Screen name="Perfil" component={PerfilScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
      <Stack.Screen name="DadosImovel" component={DadosImovelScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
      
      <Stack.Screen name="Save" component={SaveScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Storys" component={StorysScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      <Stack.Screen name="Acessibilidade" component={AcessibilidadeScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
      <Stack.Screen name="Financiar" component={FinanciarScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
    </Stack.Navigator>
  </NavigationContainer>
   );
}}



/*const navegacao = {<Stack.Screen name="Acessibilidade" component={AcessibilidadeScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/> 
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
           <Stack.Screen name="MainScreens" component={MainScreens} />
            <Stack.Screen name="DetailsDois" component={DetailsDoisScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
           <Stack.Screen name="Tag" component={TagScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
            <Stack.Screen name="Finalizar" component={FinalizarScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/> 
            <Stack.Screen name="Error" component={ErrorScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/> 
            <Stack.Screen name="Notify" component={NotifyScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
            <Stack.Screen name="Splash" component={SplashScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Visitar" component={VisitarScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Valor" component={ValorScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Busca" component={BuscaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
            <Stack.Screen name="Mapa" component={MapaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="VerMapa" component={VerMapaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Imobil" component={ImobilScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Settings" component={SettingsScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Search" component={SearchScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Load" component={LoadScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="List" component={ListScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Async" component={AsyncSplashScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Result" component={ResultScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="ImageZoom" component={ImageScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            <Stack.Screen name="Gallery" component={GalleryScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
            
            <Stack.Screen name="Financiar" component={FinanciarScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
            <Stack.Screen name="Perfil" component={PerfilScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
            <Stack.Screen name="DadosImovel" component={DadosImovelScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
            <Stack.Screen name="ViewStory" component={ViewStoryScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
            <Stack.Screen name="Match" component={MatchScreen} options={{...TransitionPresets.SlideFromRightIOS}} />
            <Stack.Screen name="Planos" component={PlanosScreen} options={{...TransitionPresets.SlideFromRightIOS}} />  

             // <Tab.Screen name="InnerMap" component={InnerMapScreen}  options={{title: 'Mapa',...TransitionPresets.ModalSlideFromBottomIOS, }}/>
      //<Tab.Screen name="Destaques" component={DestaquesScreen}  options={{title: 'Destaques',...TransitionPresets.ModalSlideFromBottomIOS, }}/>
}*/
