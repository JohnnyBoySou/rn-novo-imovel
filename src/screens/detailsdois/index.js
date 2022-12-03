
import React, { useEffect, useState, useRef, useCallback, useContext , useReducer} from 'react';
import { View, TouchableOpacity,  Animated, Image, Text, ScrollView, StatusBar, RefreshControl, BackHandler, Dimensions, StyleSheet, Clipboard   } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const largura = 0.7 * width;
const altura = 0.6 * height;

import { Ionicons, Fontisto , MaterialIcons, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { TouchableRipple, Surface,  Snackbar  } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';


import { requestPreferences } from '../../api/request' 
import Similar from '../../new_components/similar'

import QuickMap from '../../new_components/quick_map'


import AwaitLoad from '../../components/awaitload/index';
import Button from '../../components/button/index';
import Header from '../../components/header/index';
import Storys from '../../components/storys/index';

import { Wrapper, Container, Title, 
Dual,
Options,
Images,
Option,
OptionLabel,
Descricao,
Preco,
Tempo,
Valor,
Alugar,
AlugarLabel,
AlugarIcon,
LerMais,
Main,
More,
Img,
Spacing,
Icone,
Modal,

Mapa,
Sublabel,
Quick,

Client,
ClientImg,
ClientTitle,
ClientLabel,
Verify,

Imobil,
ImobilImg,
ImobilLabel,
ImobilTitle,
MapButton,


Taxas,
TaxasLabel,
ModalDois,

Lista,
Ball,
ListaLabel,
Div,

Infra,
InfraLabel,

Local,
LocalLabel,
Press,
Codigo,
CodigoLabel,
SubTitle,


Gallery,
ImgGallery,
BtGallery,
BtGalleryText,
ViewGallery,

Tax,


TabOne,
TabTwo,
Span,

TaxLabel,
TaxLi,
} from './styles';

import { ThemeContext } from 'styled-components/native';

import { MotiView, useAnimationState, AnimatePresence } from 'moti'

import { Modalize } from 'react-native-modalize';


import FindMap from '../../components/findmap/index';
import { Skeleton } from '@motify/skeleton'
import CustomStyle from '../../api/customStyle'

import Axios from 'axios';
import Conservacao from '../../components/details/conservacao';

import Item from '../../components/item/index';
import ItemDestaque from '../../components/item_destaque/index';
import Financiamento from '../../components/financiamento/index';


import ModalImobil from '../../components/modalImobil/index';


import Like from '../../new_components/like/index';

export default function DetailsDois({ navigation, route, }) {

  const item = route.params?.dados

  const taxas = route.params?.dados.taxas;

  useEffect(() => {
    getAutor()
  },[])

  const autor_id = route.params?.dados.post_author

  const item1tipo = route.params?.dados.item1
  const item1qtd = route.params?.dados.qtd1

  const item2tipo = route.params?.dados.item2
  const item2qtd = route.params?.dados.qtd2

  const item3tipo = route.params?.dados.item3
  const item3qtd = route.params?.dados.qtd3

  
  const itemarea = route.params?.dados.area

  const descricao = item.descricao;


  const latitude = route.params?.dados.latitude
  const longitude = route.params?.dados.longitude

  const imobiliaria_descricao = route.params?.dados.imobiliaria_descricao;


  const infras = route.params?.dados.infraestrutura
  
  const { color } = useContext(ThemeContext)
  const { font } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)
  



  const modalizeRef = useRef(null);
  const modalizeCheck = useRef(null);
  const modalizeImobil = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onOpenCheck = () => {
    modalizeCheck.current?.open();
  };
  
  const onOpenImobil = () => {
    modalizeRef.current?.close();
    modalizeCheck.current?.close();
    modalizeImobil.current?.open();
    
  };

  
  const onCloseImobil = () => {
    modalizeImobil.current?.close();
    
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };



  const codigo = item.codigo;
  const [visible, setVisible] = React.useState(false);

  function copiar(){
    Clipboard.setString(`${codigo}`)
    setVisible(true)
  } 
  
  const a = false

  const [imobil, setImobil] = useState()

  const [title, setDescricao] = useState()
  const [loading, setLoading] = useState(true)

  const [semImobil, setSemImobil] = useState(false)

  async function getAutor(){
    setLoading(true)
    const headers = {
      'Accept': "application/json"
    }
    await Axios.get(`https://s2hentais.com/novoimovel/wp-json/autor/all?id=${autor_id}`, {
        headers: headers
    }).then(function (response) {
        setImobil(response.data[0])
        setDescricao(response.data[0].descricao)
        const resposta = response.data[0]
        setLoading(false)
        if(resposta.length == 0){ 
          setSemImobil(true)
        }
    }).catch(error => {
        console.log(error)
    })
  }


  function filterTitle(title){

    if(title != undefined){
      if(title.length < 100){
        return title;
      }
      return `${title.substring(0, 100)}...`;
    }}


  const codigonovo = `#${item.codigo}`

  const [img1, setImg1] = useState(true)
  const [img2, setImg2] = useState(false)
  const [img3, setImg3] = useState(false)
 
  function changeImage1(){
      setImg1(true)
      setImg2(false)
      setImg3(false)
  }
  function changeImage2(){
      setImg1(false)
      setImg2(true)
      setImg3(false)
  }
  function changeImage3(){
      setImg1(false)
      setImg2(false)
      setImg3(true)
  }





  function finalizar(){
    modalizeCheck.current?.close();
    navigation.navigate('Finalizar', {dados: imobil, residencia: item})
  }


  function openMap(){
    modalizeCheck.current?.close();
    navigation.navigate('VerMapa', {dados: item, imobil: imobil})
  }




const [alturaImagem , setAlturaImagem] = useState( new Animated.Value(280))
const [open, setOpen] = useState(true)

function aumentarImagem(){
    if(open){
      Animated.timing(
        alturaImagem, {
          toValue: 500,
          duration: 300,
          useNativeDriver: false,
        }
      ).start();
      setOpen(false)
    }else{
      Animated.timing(
        alturaImagem, {
          toValue: 280,
          duration: 300,
          useNativeDriver: false,
        }
      ).start();
      setOpen(true)
    }
    
  }

  const tituloDestaque = route.params?.tituloDestaque
  const subtituloDestaque = route.params?.subtituloDestaque
  const destaque = `${tituloDestaque} ${subtituloDestaque}`

 const [scrollY, setScrollY] = useState(new Animated.Value(0));

 
  const [imgBack, setImageBack] = useState(item.imagem1) 


  const [img1A, setImg1A] = useState(4)
  const [img2A, setImg2A] = useState(0)
  const [img3A, setImg3A] = useState(0)

  const handleImg1 = () => {
    setImg1A(4)
    setImg2A(0)
    setImg3A(0)
    setImageBack(item.imagem1)
  }

  const handleImg2 = () => {
    setImg1A(0)
    setImg2A(4)
    setImg3A(0)
    setImageBack(item.imagem2)
  }
  
  const handleImg3 = () => {
    setImg1A(0)
    setImg2A(0)
    setImg3A(3)
    setImageBack(item.imagem3)
  }


   const [itemSimilar, setItemSimilar] = useState([])

    function getSimiliar(){
      setLoading(true)
      requestPreferences().then(
        function(item) {
          setItemSimilar(item)
          setLoading(false)
        })}

    useEffect(() => {
      getSimiliar()
    }, [])




const tilt = `${item?.categoria} com ${item?.qtd1} ${item?.item1}s, ${item?.qtd2} ${item?.item2} e ${item?.area} metros quadrados`







  

return (
  <>

<Main>
<Header title={`#${item.ID}`} subtitle={item.categoria}/>
  <Wrapper  onScroll={Animated.event([{
       nativeEvent: {
         contentOffset: { y: scrollY }
       },
     }],
     { useNativeDriver: false })}>


  <TabOne style={{width: width}}>


<Animated.View
      style={{
        borderRadius: 12,
        
        marginLeft: 0,
        marginRight: 0,

        opacity: scrollY.interpolate({
           inputRange:[1, 250, 400],
           outputRange: [1, 0.5, 0],
           extrapolate: 'clamp'
         }),

        transform: [{ scale: scrollY.interpolate({
           inputRange:[1, 250, 400],
           outputRange: [1, 0.8, 0],
           extrapolate: 'clamp'
         }), },
        ]


      }}

      
      >
    <MotiView delay={150} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
      <Dual pagingEnabled={true} showsHorizontalScrollIndicator={false}>
      
        
        
        
        <Images onLongPress={() => navigation.navigate('ImageZoom', {item: item})} onPress={aumentarImagem}>


        <Animated.Image style={{width: 350, height: alturaImagem, borderRadius: 12, marginLeft: 20,}} source={{uri: imgBack}} />    
          
          
          </Images><Spacing/>
      



    <View style={{justifyContent: 'center', height: 280, backgroundColor: color.off, alignContent: 'center', padding: 12, borderRadius: 8, marginRight: 20,}}>
            <View style={{flexDirection: 'row',  marginBottom: 20,}}>
              <TouchableRipple style={{borderRadius: 8,}} onPress={handleImg1} borderless={true}>
                <Image source={{uri: item.imagem1}} style={{width: 110, height: 110, borderRadius: 6, borderWidth: img1A, borderColor: "#fff",}}/>
              </TouchableRipple>
              <Spacing/>
              
              <TouchableRipple style={{borderRadius: 8,}} onPress={handleImg2} borderless={true}> 
                <Image source={{uri: item.imagem2}} style={{width: 110, height: 110, borderRadius: 6, borderWidth: img2A, borderColor: "#fff",}}/>
              </TouchableRipple>
            </View>

            <View style={{flexDirection: 'row', backgroundColor: color.off, }}>
              <TouchableRipple style={{borderRadius: 8,}}  onPress={handleImg3} borderless={true}>
                <Image source={{uri: item.imagem3}} style={{width: 110, height: 110, borderRadius: 6, borderWidth: img3A, borderColor: "#fff",}}/>
              </TouchableRipple>
              <Spacing/>
              
              <TouchableRipple onPress={() => navigation.navigate('ImageZoom', {item: item})} borderless style={{width: 110, height: 110, borderRadius: 12, backgroundColor: color.primary, justifyContent: 'center', }}>
                <Text style={{color: "#fff", fontSize: 54, fontFamily: font.medium, textAlign: 'center',}}>+5</Text>
              </TouchableRipple>
            </View>

    </View>





      {img2 && <><Spacing/>
        <Images onLongPress={() => navigation.navigate('ImageZoom', {item: item})} onPress={aumentarImagem}>
        <Animated.Image style={{width: 350, height: alturaImagem, borderRadius: 12,}} source={{uri: item.imagem2}} /></Images><Spacing/></>}



      {img3 && <><Spacing/><Images onLongPress={() => navigation.navigate('ImageZoom', {item: item})} onPress={aumentarImagem}><Animated.Image style={{width: 350, height: alturaImagem, borderRadius: 12,}} 
      source={{uri: item.imagem3}} /></Images><Spacing/></>}
      </Dual>
    </MotiView>

  </Animated.View>
    
     <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
      <View style={{marginLeft: 24, width: '73%', marginBottom: 10,}}>
    
        <MotiView delay={400} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
          <Title>{tilt}</Title>


        </MotiView> 
      </View>

      <View style={{marginRight: 24, marginTop: 0, width: '30%'}}>
         <Like codigo={item.ID} />
      </View>

</View>


  <MotiView delay={500} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>

   <Local disabled={loading} onPress={() => navigation.navigate('VerMapa', {dados: item, imobil: imobil})}>
      <>
        <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 0, marginRight: 10,}} />
        <LocalLabel>{item.rua}, {item.numero} - {item.bairro}</LocalLabel>
      </>
    </Local>

    </MotiView>
   

  
    <MotiView delay={600} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
    
    <View  style={{paddingHorizontal: 24, marginTop: 20, flexDirection: 'row'}}>
    
      <TouchableRipple style={{borderRadius: 6, flexGrow: 1,}} borderless={true} onPress={() => navigation.navigate('Tag', {type: item1tipo, amount: item1qtd, url: 1,})}>
        <Item type={item1tipo} amount={item1qtd} />
      </TouchableRipple>

      
      <View style={{width: 12, height: 10}}/>
     
      <TouchableRipple style={{borderRadius: 6, flexGrow: 1,}} borderless={true} 
      onPress={() => navigation.navigate('Tag', {type: item2tipo, amount: item2qtd, url: 2,})}>
        <Item type={item2tipo} amount={item2qtd} />
      </TouchableRipple>
      

      <View style={{width: 12, height: 10}}/>

      <TouchableRipple style={{borderRadius: 6, flexGrow: 1,}} borderless={true}>
        <Item type="Area" amount={itemarea} />
      </TouchableRipple>

    </View>
  </MotiView>

  
<MotiView delay={800} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
  
    { item.imagem2?.length > 0 && <View style={{marginLeft: 24, marginTop: 20,}}><SubTitle>Galeria</SubTitle></View> }

    { item.imagem2?.length > 0 && 
      <Gallery>
        { item.imagem1?.length > 0 && <ViewGallery disabled={img1} onPress={changeImage1}><ImgGallery source={{uri: item.imagem1}}/></ViewGallery> }
        { item.imagem2?.length > 0 && <ViewGallery disabled={img2} onPress={changeImage2}><ImgGallery source={{uri: item.imagem2}}/></ViewGallery> }
        { item.imagem3?.length > 0 && <ViewGallery disabled={img3} onPress={changeImage3}><ImgGallery source={{uri: item.imagem3}}/></ViewGallery> }
        { item.imagem3?.length > 0 && <BtGallery onPress={() => navigation.navigate('Gallery', {item: item})}><BtGalleryText>+</BtGalleryText></BtGallery> }
        <Spacing/>
      </Gallery>
   
    }
    </MotiView>
    
    <View style={{marginHorizontal: 24,marginTop: 20,}}><Div/></View>

    <MotiView delay={800} from={{ translateY: 20, opacity: 0 }} animate={{ translateY: 0, opacity: 1, }} transition={{type: 'timing'}}>
  
    <View style={{paddingHorizontal: 24, marginTop: 20, }}>
      {item.descricao?.length > 0 && <SubTitle>Sobre</SubTitle>}
      {item.descricao?.length > 0 && <Descricao selectable={true}>{item.descricao}</Descricao>}
      
    <Spacing/>

    <Div style={{marginBottom: 10}}/>
    
    <QuickMap lat={item.latitude} lng={item.longitude} />

    <Spacing/>
    
    <Div style={{marginBottom: 10}}/>
    
    <Conservacao nivel={item.conservacao} />
    
  
  <Div style={{marginBottom: 10, marginTop: 0,}}/>
    
  <SubTitle style={{marginBottom: -10}}>Infraestrutura</SubTitle>
  <View style={{paddingVertical: 12,}}>
  
  {infras?.map((infras) => 
   <Lista>
      <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infras}</InfraLabel>
    </Lista>
  )}
  
  <Div style={{marginBottom: 10, marginTop: 20,}}/>

  
  <SubTitle style={{marginBottom: -10}}>Taxas adicionais</SubTitle>
  
  <View style={{paddingTop: 15,}}>
 {taxas?.map((taxas) => 
 <Lista key={taxas}>
      <Ball/>
      <ListaLabel>{taxas}</ListaLabel>
    </Lista>)}

    
  </View>

  <Div style={{marginBottom: 10, marginTop: 20,}}/>

  <SubTitle style={{marginBottom: 10,}}>Imobiliária</SubTitle>
  <Imobil disabled={loading}  onPress={() => navigation.navigate('Imobil', {dados: imobil})}>
      <>
      {loading && <View style={{width: 10, height: 10,}}/>}
      {loading && <Skeleton show={loading} radius={100} height={42} width={42} colorMode="light"  />}
      {loading == false && <ImobilImg source={{uri: imobil?.foto}}/>}
      <View style={{justifyContent: 'center', marginLeft: 12, }}>
        {loading && <Skeleton show={loading} radius={4} height={20} width={220} colorMode="light"  />}
        {loading && <View style={{width: 10, height: 6,}}/>}
        {loading && <Skeleton show={loading} radius={2} height={16} width={180} colorMode="light"  /> }
        {loading && <View style={{width: 10, height: 6,}}/>}
        {loading == false && <ImobilTitle>{imobil?.nome}</ImobilTitle>}
        {loading == false && <ImobilLabel>{imobil?.endereco}</ImobilLabel>}
      </View>
      </>
    </Imobil>

  </View>
  
  <Div style={{marginBottom: 0, marginTop: -10,}}/>

  {!loading && <Similar data={itemSimilar}/>}
    
        <View style={{height: 50, width: 20,}}/>

    </View>






















    </MotiView>
    </TabOne>



    


  </Wrapper>

      <Quick onPress={onOpenCheck}>
        <Ionicons name="checkmark" style={{textAlign: 'center'}} size={32} color="#fff" />
      </Quick>



<Modalize ref={modalizeImobil} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
  
    <ModalImobil imobilimg={imobil?.foto} title={imobil?.nome} endereco={imobil?.endereco} imobil={imobil} navigation={navigation}/>
    
    <Div style={{marginHorizontal: 24}}/>

    <Alugar color="#5B72F2" onPress={onCloseImobil} style={{marginTop: 20, marginHorizontal: 24,}}>
      <>
        <AlugarLabel>Fechar</AlugarLabel>
        <AlugarIcon/>
        <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowdown" size={28} color="#FFF" />
      </>
    </Alugar>

    <View style={{height: 30, width: 10,}}/>
</Modalize>

  

  <Modalize ref={modalizeCheck} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
    
    <Modal>



<View style={{ marginHorizontal: 24, paddingTop: 12,}}>
  { a && <View style={{borderRadius: 12, padding: 20, marginBottom: 20, marginTop: 10}}>

     <View style={{justifyContent: 'center', alignContent: 'center', borderRadius: 8, alignSelf: 'center',  }}>
      <AnimatedCircularProgress
            size={100}
            width={8}
            fill={100}
            tintColor={color.primary}
            backgroundColor="#ffffff50"
            rotation={0}
            lineCap="round"
            duration={1200}
            children={() =>  <Animatable.Text duration={1000} delay={500} animation="fadeInUpBig"><Ionicons name="checkmark" size={52} color={color.primary} /></Animatable.Text>}
            />
      </View> 
      </View> }
      
  



      <View style={{flexDirection: 'row'}}>
        <Preco>
          <Tempo>{item.tipo}</Tempo>
          {item.tipo == "Ambos" && 
          <Valor>R$ {item.valor_mensal} / R$ {item.valor_unico}</Valor>
          }
          {item.tipo != "Ambos" && 
          <>
           <Valor>R$ {item.valor_mensal}{item.valor_unico}</Valor>
          </>
          }

        </Preco>
        {item.tipo != "Ambos" && <>
        <MapButton onPress={openMap}>
          <Image source={require('../../assets/quick_map.png')} style={{width: 56, height: 56}}/>
        </MapButton></>}

      </View>

       <Tax>
       
      <Lista style={{marginBottom: 8}}>
       <Infra style={{backgroundColor: color.secundary, marginTop: -2, marginRight: -4,}}>
          <Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
        <InfraLabel style={{color: "#B55025", fontSize: 18, fontFamily: 'Font_Medium',}}>Taxas adicionais</InfraLabel>
      </Lista>
      <View style={{marginTop: -4}}>

          {taxas?.map((taxas) => 
          <View style={{flexDirection: 'row'}}>
            <Ball style={{backgroundColor: "#906959", marginBottom:4,  }}/>
            <TaxLi style={{color: "#906959"}} key={taxas}>{taxas}</TaxLi></View> )}
          </View>  
      </Tax>



      
        <Alugar disabled={loading} color="#5B72F2" onPress={finalizar}>
            <>
            <>
            {item.tipo == "Valor Único" &&
              <AlugarLabel>Comprar agora</AlugarLabel>}
            {item.tipo == "Por mês" &&
              <AlugarLabel>Alugar agora</AlugarLabel>}
            </>
            <AlugarIcon/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
            </>
          </Alugar>
          </View>
      </Modal>
  </Modalize>



  </Main>
  </>
  )
}