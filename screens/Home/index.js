import React, { Component } from 'react';
import { Animated, Image, FlatList, ScrollView, Dimensions, ImageBackground, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Button, Block, Card, Text, } from '../../components';
import { theme } from '../../constants';
import PersonalPatients from '../PersonalPatients';
import styles from './styles';



const { width, height } = Dimensions.get('window');
// scrollX = new Animated.Value(0);

class Home extends Component {
    state = {
        data: ''
    }


    render() {

        return (
            <ScrollView >
                <Block style={{backgroundColor:'#fff'}}>
                        {this.props.children}
                        <Block>
                            <Block center marginLeft={20} flex={false} margin={[10, 0, 10, 0]}>
                                <Text size={30} paddingTop={15} bold light>Diseases</Text>
                                <Text gray >Select your disease </Text>
                            </Block>
                            <Block>

                                <Block row space='around' >
                                    <TouchableOpacity style={{ flex: 1, space: 'around', margin: 10, }} onPress={() => Actions.diabetes()}>
                                        <Card
                                            width={null}
                                            avtWidth={width / 4}
                                            center
                                            height={height / 4}
                                            shadow
                                            style={{margin:10}}
                                            avtImg={require('../../assets/img/com.png')}
                                            justifyContent='center'
                                        >
                                            <ImageBackground
                                                style={{ width: '100%',height:'100%'}}
                                                source={require('../../assets/doctors_img/diabetes.jpg')}
                                            >
                                                <Block style={styles.mainDiseases}>
                                                    <Text center size={18} white>Diabetes</Text>
                                                    <Text center primary>Click here to Explore</Text>
                                                </Block>
                                            </ImageBackground>
                                        </Card>
                                    </TouchableOpacity>

                                    <TouchableOpacity TouchableOpacity style={{ flex: 1, space: 'around', margin: 10, marginLeft: 0, }} onPress={() => Actions.eyetumors()}>
                                        <Card
                                            width={null}
                                            avtWidth={width / 4}
                                            center
                                            height={height / 5}
                                            shadow
                                            style={{margin:10}}
                                            avtImg={require('../../assets/img/avatar.png')}
                                            justifyContent='flex-end'
                                        >
                                            <ImageBackground
                                                style={{ width: '100%',height:'100%' }}
                                                source={require('../../assets/doctors_img/eye.jpg')}
                                            >
                                                <Block style={styles.mainDiseases}>
                                                    <Text center size={18} white>Eye Tumors</Text>
                                                    <Text center primary>Click here to Explore</Text>
                                                </Block>
                                            </ImageBackground>
                                        </Card>
                                    </TouchableOpacity>
                                </Block>
                                <Block row space='around'>

                                    <TouchableOpacity style={{ flex: 1, space: 'around', margin: 10, marginTop: 0 }} onPress={() => Actions.stroke()}>
                                        <Card
                                            width={null}
                                            avtWidth={width / 4}
                                            center
                                            height={height / 5}
                                            shadow
                                            style={{margin:10}}
                                            avtImg={require('../../assets/img/ocofamerica.png')}
                                            justifyContent='flex-end'
                                        >
                                            <ImageBackground
                                                style={{ width: '100%',height:'100%' }}
                                                source={require('../../assets/doctors_img/stroke.jpg')}
                                            >
                                                <Block style={styles.mainDiseases}>
                                                    <Text center size={18} white>Stroke</Text>
                                                    <Text center primary>Click here to Explore</Text>
                                                </Block>
                                            </ImageBackground>
                                        </Card>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ flex: 1, space: 'around', margin: 10, marginLeft: 0, marginTop: 0 }} onPress={() => Actions.sickle()}>
                                        <Card
                                            width={null}
                                            avtWidth={width / 4}
                                            center
                                            height={height / 4}
                                            shadow
                                            style={{margin:10}}
                                            avtImg={require('../../assets/img/legality.png')}
                                            justifyContent='flex-end'
                                        >
                                            <ImageBackground
                                                style={{ width: '100%',height:'100%' }}
                                                source={require('../../assets/doctors_img/images.jpeg')}
                                            >
                                                <Block style={styles.mainDiseases}>
                                                    <Text center size={18} white>Sickle cell </Text>
                                                    <Text center primary>Click here to Explore</Text>
                                                </Block>
                                            </ImageBackground>
                                        </Card>
                                    </TouchableOpacity>
                                </Block>
                            </Block>
                            <Block >
                                <Block left marginLeft={20} marginTop={0}>
                                    <Text h1 red >Personal Patients</Text>
                                    <Text style={{ width: '40%', borderTopWidth: 3, borderTopColor: theme.colors.primary, marginTop: 5 }}></Text>
                                </Block>

                                <Block marginTop={0} padding={[0,0,50,0]}>
                                    {/* <PersonalPatients /> */}
                                    <Text center gray>Content Comming Soon</Text>
                                </Block>
                            </Block>
                        </Block>
                </Block>
            </ScrollView>

        )
    }
}



export default Home;
