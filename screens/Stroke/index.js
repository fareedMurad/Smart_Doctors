import React, { Component } from 'react'
import { Animated, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

import { Button, Input, Block, Text, BackBtn } from '../../components';
import { theme, mocks } from '../../constants';

const { width, height } = Dimensions.get('window');

class Stroke extends Component {

  state = {
    searchFocus: new Animated.Value(0.6),
    searchString: null,
  }

  render() {
    return (
      <Block>
        <BackBtn
          backgroundColor={theme.colors.primary}
          action={() => Actions.drawerlayout()}
        />
        <ScrollView >
          <Block style={{ backgroundColor: '#fff' }}>
            <Block flex={false} style={styles.header} margin={[30, 0, 0, 0]}>
              <Text h1 bold style>About Stroke</Text>
              <Block padding={[5, 0, 0, 0]} style={styles.underlinde}></Block>
            </Block>
            <Block style={{ padding: 10, marginTop: 10 }}>
              <Image source={require('../../assets/images/Stroke2.jpg')} style={{ width: '100%', height: 200, }} />
              <Image source={require('../../assets/images/stroke1.jpg')} style={{ width: '100%', height: 200, marginTop: 20, marginBottom: 20 }} />
              <Image source={require('../../assets/images/Stroke.jpg')} style={{ width: '100%', height: 200, marginLeft: 20 }} />
              {/* <Image source={require('../../assets/doctors_img/Stroke.jpg')} />
            <Image source={require('../../assets/doctors_img/Stroke.jpg')} /> */}
            </Block>

            <Block>
              <Block padding={[20, 20, 0, 20]}>
                <Text bold h1>History of Stroke</Text>
                <Block flex={false} padding={[5, 0, 0, 0]} style={{ marginBottom: 20, ...styles.underlinde }}></Block>
                <Text size={16} gray >Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </Block>
              <Block center margin={[30, 30, 40, 30]}>
                <Text h2 bold>Treatment Avilable using Face Detaction(AI)</Text>
                <TouchableOpacity>
                  <Image
                    style={{ width: 100, height: 100, marginTop: 20 }}
                    source={require('../../assets/doctors_img/AI.png')}>
                  </Image>
                  <Text h2 primary>Scan Face</Text>
                </TouchableOpacity>

              </Block>
            </Block>
            <Block flex={false} padding={[20]} style={{ backgroundColor: theme.colors.primary }}>
              <Text white center>All Right Reservesd PVT LTD.</Text>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    )
  }
}


export default Stroke;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2
  },
  underlinde: {
    width: 100,
    borderBottomWidth: 3,
    borderBottomColor: theme.colors.primary
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - (theme.sizes.padding * 2.5),
    marginBottom: theme.sizes.base,
    borderRadius: 4,
  },
  mainImage: {
    minWidth: '95%',
    minHeight: 200,
  }
})