import React, { Component } from 'react';
import {Block} from '../components';
import Screens from './Navigation';


export default class App extends Component {
    render() {
        return (
            <Block>
                <Screens />
            </Block>
        )
    }
}
