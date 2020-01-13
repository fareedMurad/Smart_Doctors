import React, { Component } from 'react';
import Block from './Block';
import Button from './Button';
import Text from './Text';
import { Image } from 'react-native';


const BackBtn = ({ action, backgroundColor, style, children }) => {
    return (
        <Block flex={false} row style={{ backgroundColor: backgroundColor, padding: 5 }}>
            <Button onPress={action} style={{ width: 30, ...style }} transparent>
                <Image
                    source={require('../assets/icons/undo.png')}
                    style={{ marginLeft:20, width: 20, height: 20 }}
                    resizeMode="contain"
                >
                </Image>
            </Button>
            <Block>
                {children}
            </Block>
        </Block>
    )
}

export default BackBtn;
