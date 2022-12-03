import React, { useContext , useState, useRef} from 'react';
import { Dimensions } from 'react-native'

import { ThemeContext } from 'styled-components/native';
import { 
  Container, 
  Line,
  Title,
  Label,
  Hr,
  View,

} from './styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import MapView,  { Marker, Callout, Circle } from 'react-native-maps';

const QuickMap = ( props ) => {
    const lat = props?.lat
    const lng = props?.lng
    
    const { color } = useContext(ThemeContext)

    const [latitude, setLatitude] = useState(lat)
    const [longitude, setLongitude] = useState(lng)

    const mapview = useRef()
    const a = false;
  return (
    
    
    <Container>    
      <Title>Mapa</Title>
      <View>

      <View style={{backgroundColor: "#00000020", marginLeft: 0, marginBottom: 10, height: 140, borderRadius: 8, marginTop: 10, width: "100%"}}/>

      {a && <MapView
        style={{width: 0.86 * width, height: 120, borderRadius: 12, marginTop: 15,}}
        showsPointsOfInterest={false}

        ref={mapview}

        customMapStyle={{overflow: 'hidden', borderRadius: 12,}}

        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0099000,
          longitudeDelta: 0.0045000,
        }}
        provider="google"
      >



      <Marker coordinate={{latitude: latitude, longitude: longitude,}} 
      pinColor={color.primary}/>
        <Circle center={{
          latitude: latitude,
          longitude: longitude,
        }} radius={25} 
        
        fillColor="#5B72F220" 
        strokeColor={color.primary}
        strokeWidth={5}
        />
      
      </MapView>}


      </View>
    </Container>
  );
};

export default QuickMap;