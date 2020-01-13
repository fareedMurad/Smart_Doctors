import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Dimensions, Animated, Image, ScrollView } from "react-native";

import { Button, Card, Block, Text, BackBtn } from '../../components';
import { theme } from '../../constants';

const { width, height } = Dimensions.get('window');
scrollX = new Animated.Value(0);

export default class PersonalPatients extends Component {
    state = {
        data: '',
        toggleList: false,
    }
    renderLogs() {
        const { logsList, allLogs } = this.props;
        const { toggleList } = this.state
        const renderLogs = toggleList ? allLogs : logsList;
        return (
            <FlatList
                horizontal={false}
                numColumns={3}
                showsHorizontalScrollIndicator={false}
                // scrollEventThrottle={16}
                snapToAlignment="center"
                data={renderLogs}
                extraDate={this.state}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    // <ScrollView>
                    <TouchableOpacity style={{ flex: 1, space: 'around', margin: 5, marginBotttom: 0 }}>
                        <Card
                            height={height / 4.5}
                            shadow
                            center
                            style={{ padding: 20 }}
                            avtImg={item.avtImg}
                            heading={item.name}
                            titleColor={theme.colors.blue}
                            paraColor={theme.colors.gray}
                            marginTop={height / 6.5}
                        >
                            <Block middle center>
                                <Button padding={10} style={{ width:`75%`, borderRadius: 8, marginBottom: 10,marginTop:20, backgroundColor: 'rgba(253,244,244,0.8)' }}>
                                    <Block row middle center space='between' >
                                        <Image
                                            source={require('../../assets/img/phoneicon.png')}
                                            style={{ width: 10, height: 10, marginRight: 5 }}>
                                        </Image>
                                        <Text right size={10} >{item.phone}</Text>

                                    </Block>

                                </Button>
                            </Block>
                        </Card>
                    </TouchableOpacity>
                    // </ScrollView>
                )}
                onScroll={
                    Animated.event([{
                        nativeEvent: { contentOffset: { x: this.scrollX } }
                    }])
                }
            />
        )
    }
    render() {

        const { toggleList } = this.state
        return (
            <ScrollView>
                <Block >
                    {this.renderLogs()}
                    <Block center >
                        <Button transparent padding={10} style={{ marginBottom: 50, width: null }} onPress={() => this.setState({ toggleList: !toggleList })}>
                            <Block row flex={false}>
                                <Text red bold middle>See More</Text>
                                <Image
                                    source={require('../../assets/img/moreicon.png')}
                                    style={{ marginLeft: 5, width: 30, height: 30 }}
                                    resizeMode="contain"
                                ></Image>
                            </Block>
                        </Button>

                    </Block>
                </Block>
            </ScrollView>
        )
    }
}

PersonalPatients.defaultProps = {
    logsList: [
        { id: 1, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 2, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 3, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 4, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 5, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 6, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
    ],
    allLogs: [
        { id: 1, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 2, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 3, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 4, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 5, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 6, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 7, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 8, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 9, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 77, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 88, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
        { id: 99, name: 'Vivek saroch', phone: '555-666-999', avtImg: require('../../assets/img/person.png') },
    ],

};