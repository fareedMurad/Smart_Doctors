import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, ScrollView, ImageBackground, Image, Alert,TouchableOpacity } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons';

import Block from '../Block';
import Button from '../Button';
import Text from '../Text'

import { theme } from '../../constants';


const { width, height } = Dimensions.get('window');


export default class Navbar extends Component {

    state = {
        sideBarVisible: true,
        drawerWidth: 0,
        wrapperWidth: 0
    }
    render() {

        
        return (
            <Block flex={false}>
                <Block flex={false} row style={{backgroundColor:this.props.backgroundColor,...styles.navBarStyles}} >
                    {this.props.children}
                    <Block margin={[20, 0, 0, 0]} >
                        <Text center white size={22}>{this.props.title}</Text>
                    </Block>
                </Block>

            </Block>
        )
    }

}


const styles = StyleSheet.create({
    navBarStyles: {
        height: height / 10,
        color: theme.colors.blue,
        opacity: 0.9
    },


    menuBarStyles: {
        backgroundColor: theme.colors.white,
        margin: 3,
        marginLeft: 20,
        width: 30,
        height: 5,
    }
})

