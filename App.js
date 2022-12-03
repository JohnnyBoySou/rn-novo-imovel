import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/navigation/index';
import { ThemeContext, ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { useColorScheme, StatusBar } from 'react-native';
import themes from './src/theme'

export default function Main() {
 return (
    <ThemeProvider theme={themes.light}>
      <StatusBar barStyle="dark-content"/>
      <App />
    </ThemeProvider>
    );
}

