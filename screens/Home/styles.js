import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants';
const { width, height } = Dimensions.get('window');
const Styles = StyleSheet.create({
  backgroundImageStyles: {
    width: null,
    height: height
  },
  mainDiseases:{
    width:'100%',
    backgroundColor:'rgba(0,0,0,0.6)',
    padding:15,
    borderRadius:5,
    

  }
})

export default Styles;